import { services } from '../data/services';
import { getBusinessesByService } from '../data/businesses';
import { SITE } from '../lib/site';

export async function GET() {
  const serviceUrls = ['', ...services.map((s) => s.slug)];
  const businessesByService = await getBusinessesByService();
  const profileUrls = Object.entries(businessesByService).flatMap(([serviceSlug, list]) =>
    list.map((b) => `${serviceSlug}/${b.slug}`),
  );

  const urls = [...serviceUrls, ...profileUrls]
    .map((p) => `<url><loc>${SITE.domain}/${p}</loc><changefreq>weekly</changefreq></url>`)
    .join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
}
