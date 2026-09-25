export const SITE = {
  name: 'Kennewick Local Pros',
  domain: 'https://kennewicklocalpros.com',
  city: 'Kennewick',
  state: 'WA',
  stateFull: 'Washington',
  geo: { lat: 46.2112, lng: -119.1372 },
  // Business listings are read from this Supabase project at build time (table: listings, filtered by site).
  // The anon key is a public, read-only key: row-level security only lets it read visible listings.
  listingsDb: {
    site: 'kennewicklocalpros',
    url: 'https://npzxpbplfsozbmwlnnka.supabase.co',
    anonKey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wenhwYnBsZnNvemJtd2xubmthIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2NTgyMDIsImV4cCI6MjA3MzIzNDIwMn0.vGZYoprvQsnFQIQlL98XeII8x7MXIxte7IISMB7AIB8',
  },
};
