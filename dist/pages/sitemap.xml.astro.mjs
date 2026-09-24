import { s as services } from '../chunks/index_U1Wg8-ld.mjs';
import { g as getBusinessesByService } from '../chunks/businesses_CjnFn81K.mjs';
import { S as SITE } from '../chunks/site_xz-GphEw.mjs';
export { renderers } from '../renderers.mjs';

async function GET() {
  const serviceUrls = ["", ...services.map((s) => s.slug)];
  const businessesByService = await getBusinessesByService();
  const profileUrls = Object.entries(businessesByService).flatMap(
    ([serviceSlug, list]) => list.map((b) => `${serviceSlug}/${b.slug}`)
  );
  const urls = [...serviceUrls, ...profileUrls].map((p) => `<url><loc>${SITE.domain}/${p}</loc><changefreq>weekly</changefreq></url>`).join("");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { "Content-Type": "application/xml" } }
  );
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
