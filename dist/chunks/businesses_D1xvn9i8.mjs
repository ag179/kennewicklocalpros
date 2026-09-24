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
async function loadListings() {
  const { url, anonKey, site } = SITE.listingsDb;
  const base = process.env.LISTINGS_DB_URL ?? url;
  const endpoint = `${base}/rest/v1/listings?select=*&site=eq.${encodeURIComponent(site)}&order=service.asc,sort_order.asc,name.asc`;
  const res = await fetch(endpoint, { headers: { apikey: anonKey, Authorization: `Bearer ${anonKey}` } });
  if (!res.ok) {
    throw new Error(`Could not load listings from Supabase (${res.status}): ${await res.text()}`);
  }
  const rows = await res.json();
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
