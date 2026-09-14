import { services } from '../data/services';
import { SITE } from '../lib/site';
import { supabase, directoryCategories } from '../lib/supabase';

export async function GET() {
  const serviceUrls = ['', ...services.map((s) => s.slug)];
  const directoryUrls = ['directory', ...directoryCategories.map((c) => `directory/${c.slug}`)];

  const { data: businesses } = await supabase.from('kennewick').select('slug');
  const businessUrls = (businesses ?? []).map((b) => `directory/${(b as { slug: string }).slug}`);

  const allPaths = [...serviceUrls, ...directoryUrls, ...businessUrls];
  const urls = allPaths
    .map((p) => `<url><loc>${SITE.domain}/${p}</loc><changefreq>weekly</changefreq></url>`)
    .join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
}
