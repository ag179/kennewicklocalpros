import { services } from '../data/services';
import { SITE } from '../lib/site';

export async function GET() {
  const urls = ['', ...services.map((s) => s.slug)]
    .map((p) => `<url><loc>${SITE.domain}/${p}</loc><changefreq>weekly</changefreq></url>`)
    .join('');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
}
