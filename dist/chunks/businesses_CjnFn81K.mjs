import { S as SITE } from './site_xz-GphEw.mjs';

function toBusiness(r) {
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
    mapsUrl: r.maps_url,
    reviewsUrl: r.reviews_url
  };
}
const MAX_ATTEMPTS = 5;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function fetchWithRetry(endpoint, anonKey) {
  let lastError;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const res = await fetch(endpoint, {
        headers: { apikey: anonKey, Authorization: `Bearer ${anonKey}`, Accept: "application/json" },
        signal: AbortSignal.timeout(2e4)
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${await res.text()}`);
      return await res.json();
    } catch (err) {
      lastError = err;
      const cause = err instanceof Error && err.cause ? ` (${String(err.cause.message ?? err.cause)})` : "";
      console.warn(`[listings] attempt ${attempt}/${MAX_ATTEMPTS} failed: ${err instanceof Error ? err.message : err}${cause}`);
      if (attempt < MAX_ATTEMPTS) await sleep(1500 * 2 ** (attempt - 1));
    }
  }
  throw new Error(`Could not load listings from Supabase after ${MAX_ATTEMPTS} attempts: ${lastError instanceof Error ? lastError.message : lastError}`);
}
async function loadListings() {
  const { url, anonKey, site } = SITE.listingsDb;
  const base = process.env.LISTINGS_DB_URL ?? url;
  const endpoint = `${base}/rest/v1/listings?select=*&site=eq.${encodeURIComponent(site)}&order=service.asc,sort_order.asc,name.asc`;
  const rows = await fetchWithRetry(endpoint, anonKey);
  if (rows.length === 0) {
    throw new Error(`Supabase returned no listings for site "${site}". Refusing to build pages without listings.`);
  }
  const grouped = {};
  for (const r of rows) (grouped[r.service] ??= []).push(toBusiness(r));
  return grouped;
}
let cache = null;
function getBusinessesByService() {
  cache ??= loadListings();
  return cache;
}
function milesBetween(aLat, aLng, bLat, bLng) {
  const R = 3958.8;
  const toRad = (x) => x * Math.PI / 180;
  const dLat = toRad(bLat - aLat);
  const dLng = toRad(bLng - aLng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(aLat)) * Math.cos(toRad(bLat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

export { getBusinessesByService as g, milesBetween as m };
