import { SITE } from '../lib/site';

export async function GET() {
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${SITE.domain}/sitemap.xml\n`, {
    headers: { 'Content-Type': 'text/plain' },
  });
}
