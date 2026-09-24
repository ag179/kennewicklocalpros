// Business listings shown on service pages (e.g. /pestcontrol) and on one profile page per business
// (/pestcontrol/<slug>). The data lives in Supabase (table `listings`) and is read once at build time,
// so every listing ends up in the static HTML. Hidden listings are filtered out by the database.
import { SITE } from '../lib/site';

export interface LocalBusiness {
  name: string;
  slug: string;
  phone: string | null;
  website: string | null;
  address: string;
  street: string | null;
  postalCode: string | null;
  city: string;
  lat: number;
  lng: number;
  rating: number | null;
  reviews: number;
  reviewsPerScore: Record<string, number> | null;
  hours: string | null;
  weeklyHours: { day: string; hours: string }[] | null;
  services: string[];
  attributes: Record<string, string[]>;
  verified: boolean;
  featured: boolean;
  /** Position by rating ranking (sort_order), ignoring featured placement. */
  rank: number;
  mapsUrl: string | null;
  reviewsUrl: string | null;
}

interface ListingRow {
  service: string;
  sort_order: number;
  slug: string;
  name: string;
  phone: string | null;
  website: string | null;
  address: string;
  street: string | null;
  postal_code: string | null;
  city: string;
  lat: number | null;
  lng: number | null;
  rating: number | string | null;
  reviews: number;
  reviews_per_score: Record<string, number> | null;
  hours: string | null;
  weekly_hours: { day: string; hours: string }[] | null;
  services: string[] | null;
  attributes: Record<string, string[]> | null;
  verified: boolean;
  featured: boolean;
  maps_url: string | null;
  reviews_url: string | null;
}

function toBusiness(r: ListingRow): LocalBusiness {
  return {
    name: r.name,
    slug: r.slug,
    phone: r.phone,
    website: r.website,
    address: r.address,
    street: r.street,
    postalCode: r.postal_code,
    city: r.city,
    lat: r.lat ?? SITE.geo.lat,
    lng: r.lng ?? SITE.geo.lng,
    rating: r.rating === null ? null : Number(r.rating),
    reviews: r.reviews ?? 0,
    reviewsPerScore: r.reviews_per_score,
    hours: r.hours,
    weeklyHours: r.weekly_hours && r.weekly_hours.length === 7 ? r.weekly_hours : null,
    services: r.services ?? [],
    attributes: r.attributes ?? {},
    verified: !!r.verified,
    featured: !!r.featured,
    rank: 0,
    mapsUrl: r.maps_url,
    reviewsUrl: r.reviews_url,
  };
}

const MAX_ATTEMPTS = 5;
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * Build servers sometimes get their connection dropped ("fetch failed: other side closed").
 * Retry a few times with a growing pause before giving up, and cap each attempt at 20 seconds.
 */
async function fetchWithRetry(endpoint: string, anonKey: string): Promise<ListingRow[]> {
  let lastError: unknown;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const res = await fetch(endpoint, {
        headers: { apikey: anonKey, Authorization: `Bearer ${anonKey}`, Accept: 'application/json' },
        signal: AbortSignal.timeout(20_000),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`);
      return (await res.json()) as ListingRow[];
    } catch (err) {
      lastError = err;
      const cause = err instanceof Error && err.cause ? ` (${String((err.cause as Error).message ?? err.cause)})` : '';
      console.warn(`[listings] attempt ${attempt}/${MAX_ATTEMPTS} failed: ${err instanceof Error ? err.message : err}${cause}`);
      if (attempt < MAX_ATTEMPTS) await sleep(1500 * 2 ** (attempt - 1)); // 1.5s, 3s, 6s, 12s
    }
  }
  throw new Error(`Could not load listings from Supabase after ${MAX_ATTEMPTS} attempts: ${lastError instanceof Error ? lastError.message : lastError}`);
}

async function loadListings(): Promise<Record<string, LocalBusiness[]>> {
  const { url, anonKey, site } = SITE.listingsDb;
  const base = process.env.LISTINGS_DB_URL ?? url; // override only for local testing
  const endpoint = `${base}/rest/v1/listings?select=*&site=eq.${encodeURIComponent(site)}&order=service.asc,sort_order.asc,name.asc`;
  const rows = await fetchWithRetry(endpoint, anonKey);
  if (rows.length === 0) {
    throw new Error(`Supabase returned no listings for site "${site}". Refusing to build pages without listings.`);
  }
  const grouped: Record<string, LocalBusiness[]> = {};
  const byService: Record<string, ListingRow[]> = {};
  for (const r of rows) (byService[r.service] ??= []).push(r);
  for (const [service, list] of Object.entries(byService)) {
    // Rows arrive in ranking order (sort_order). Record each listing's rank, then put featured ones on top.
    const businesses = list.map((r, i) => ({ ...toBusiness(r), rank: i + 1 }));
    grouped[service] = [...businesses.filter((b) => b.featured), ...businesses.filter((b) => !b.featured)];
  }
  return grouped;
}

let cache: Promise<Record<string, LocalBusiness[]>> | null = null;

/** All visible listings grouped by service slug, in display order. Fetched once per build. */
export function getBusinessesByService(): Promise<Record<string, LocalBusiness[]>> {
  cache ??= loadListings();
  return cache;
}

/** Straight-line distance in miles between two coordinates. */
export function milesBetween(aLat: number, aLng: number, bLat: number, bLng: number): number {
  const R = 3958.8;
  const toRad = (x: number) => (x * Math.PI) / 180;
  const dLat = toRad(bLat - aLat);
  const dLng = toRad(bLng - aLng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(aLat)) * Math.cos(toRad(bLat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
