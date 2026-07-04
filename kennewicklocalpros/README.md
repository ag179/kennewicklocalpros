# kennewicklocalpros.com

Single-city SEO experiment site: 48 service pages for Kennewick, WA on flat URLs (`/roofing`, `/pestcontrol`, …). Static Astro output — all content is server-rendered HTML, fully indexable, no client-side content rendering.

## Customization checklist (do these before launch)

1. **Phone number** — replace `(XXX) XXX-XXXX` in `src/lib/site.ts` (`phone` and `phoneHref`).
2. **Lead form** — replace `YOUR_FORM_ID` in `src/lib/site.ts` (`formEndpoint`) with a real Formspree form ID. Each submission includes a hidden `service` field so you know which page generated the lead.
3. **Domain** — already set to `https://kennewicklocalpros.com` in `astro.config.mjs` and `src/lib/site.ts`. Change both if the domain changes.

## Build & run

```bash
npm install
npm run build     # static site → dist/
npm run preview   # preview the built site locally
npm run dev       # dev server
```

## Deploy on Bolt.new

1. Upload the project folder (or import from GitHub).
2. Bolt runs `npm install && npm run build` automatically; output is static files in `dist/`.
3. Connect the custom domain `kennewicklocalpros.com` in the hosting settings.

Any static host works (Netlify, Cloudflare Pages, Vercel): build command `npm run build`, publish directory `dist`.

## Structure

- `src/data/services/batch-01.ts … batch-08.ts` — all page content (48 `ServiceEntry` objects). This is where 100% of the copy lives.
- `src/data/services/index.ts` — concatenates batches into `services`.
- `src/pages/[service].astro` — one dynamic route renders every service page.
- `src/pages/index.astro` — homepage: city intro + all 48 services grouped by category.
- `src/lib/schema.ts` — JSON-LD (Service, LocalBusiness, FAQPage, BreadcrumbList).
- `src/pages/sitemap.xml.ts`, `src/pages/robots.txt.ts` — generated at build.

## Scaling to 100 pages

Add `batch-09.ts`, `batch-10.ts`, … following the same `ServiceEntry` shape, import them in `src/data/services/index.ts`, and rebuild. Keep the uniqueness rules: no shared sentence skeletons between pages, service-specific FAQs, and a different Kennewick angle per page. Slugs are flat concatenated lowercase (`gutterguards`, not `gutter-guards`).

## Measuring the experiment

Submit `sitemap.xml` in Google Search Console after launch. After 4–8 weeks, check the Performance report by page: services earning impressions are candidates for expansion into standalone rank & rent sites.
