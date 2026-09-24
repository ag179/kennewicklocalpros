/* empty css                                     */
import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate, r as renderComponent } from '../chunks/astro/server_B3_TUemF.mjs';
import 'kleur/colors';
import { a as $$Layout, $ as $$LeadForm } from '../chunks/LeadForm_B34E5igM.mjs';
import 'clsx';
import { g as getBusinessesByService } from '../chunks/businesses_D1xvn9i8.mjs';
import { s as services } from '../chunks/index_U1Wg8-ld.mjs';
import { S as SITE } from '../chunks/site_xz-GphEw.mjs';
import { s as serviceSchema, f as faqSchema, b as breadcrumbSchema, l as localBusinessSchema } from '../chunks/schema_D1D0L_cj.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://kennewicklocalpros.com");
const $$BusinessList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BusinessList;
  const { businesses, serviceName, serviceSlug, city } = Astro2.props;
  const telHref = (p) => `tel:+1${p.replace(/\D/g, "")}`;
  return renderTemplate`${maybeRenderHead()}<section class="mt-10" id="local-businesses"> <h2 class="text-2xl font-bold text-stone-900">${serviceName} companies in ${city} and the Tri-Cities</h2> <p class="mt-2 text-sm text-stone-600 leading-relaxed"> ${businesses.length} local ${serviceName.toLowerCase()} providers, ranked by Google rating weighted by number of reviews.
    Listings are independent businesses. Contact them directly.
</p> <ol class="mt-5 grid gap-4 sm:grid-cols-2"> ${businesses.map((b) => renderTemplate`<li class="bg-white border border-stone-200 rounded-xl p-5 flex flex-col hover:border-sky-400 transition-colors"> <div class="flex items-start justify-between gap-3"> <h3 class="font-semibold text-stone-900 leading-snug"> <a${addAttribute(`/${serviceSlug}/${b.slug}`, "href")} class="hover:text-sky-700">${b.name}</a> </h3> ${b.rating !== null && b.reviews > 0 && renderTemplate`<span class="flex-none text-sm whitespace-nowrap"> <span class="font-bold text-amber-600">★ ${b.rating.toFixed(1)}</span> <span class="text-stone-400"> (${b.reviews.toLocaleString("en-US")})</span> </span>`} </div> <p class="mt-2 text-sm text-stone-600">${b.address}</p> ${b.hours && renderTemplate`<p class="mt-1 text-xs text-stone-500">${b.hours}</p>`} <div class="mt-auto pt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold"> ${b.phone && renderTemplate`<a${addAttribute(telHref(b.phone), "href")} class="text-sky-700 hover:text-sky-800">${b.phone}</a>`} <a${addAttribute(`/${serviceSlug}/${b.slug}`, "href")} class="text-sky-700 hover:text-sky-800">View profile</a> ${b.website && renderTemplate`<a${addAttribute(b.website, "href")} target="_blank" rel="noopener nofollow" class="text-stone-500 hover:text-stone-700">Website</a>`} </div> </li>`)} </ol> </section>`;
}, "/home/project/src/components/BusinessList.astro", void 0);

const $$Astro = createAstro("https://kennewicklocalpros.com");
function getStaticPaths() {
  return services.map((s) => ({ params: { service: s.slug }, props: { entry: s } }));
}
const $$service = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$service;
  const { entry } = Astro2.props;
  const related = services.filter((s) => entry.related.includes(s.slug));
  const businessesByService = await getBusinessesByService();
  const localBusinesses = businessesByService[entry.slug] ?? [];
  const schemas = [serviceSchema(entry), faqSchema(entry), breadcrumbSchema(entry), localBusinessSchema()];
  if (localBusinesses.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `${entry.name} companies in ${SITE.city}, ${SITE.state}`,
      itemListElement: localBusinesses.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "LocalBusiness",
          name: b.name,
          address: b.address,
          ...b.phone ? { telephone: b.phone } : {},
          ...b.website ? { url: b.website } : {}
        },
        url: `${SITE.domain}/${entry.slug}/${b.slug}`
      }))
    });
  }
  const categoryAnchor = entry.category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.metaTitle, "description": entry.metaDescription, "canonical": `${SITE.domain}/${entry.slug}`, "schemas": schemas }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-3xl mx-auto px-4"> <nav class="text-xs text-stone-500 mt-6" aria-label="Breadcrumb"> <a href="/" class="hover:text-sky-700">Home</a> <span class="mx-1">›</span> <a${addAttribute(`/#${categoryAnchor}`, "href")} class="hover:text-sky-700">${entry.category}</a> <span class="mx-1">›</span> <span class="text-stone-700">${entry.name}</span> </nav> <h1 class="mt-4 text-3xl sm:text-4xl font-extrabold text-stone-900">${entry.h1}</h1> <div class="mt-5 space-y-4 text-stone-700 leading-relaxed"> ${entry.intro.map((p) => renderTemplate`<p>${p}</p>`)} </div> ${localBusinesses.length > 0 && renderTemplate`${renderComponent($$result2, "BusinessList", $$BusinessList, { "businesses": localBusinesses, "serviceName": entry.name, "serviceSlug": entry.slug, "city": SITE.city })}`} <h2 class="mt-10 text-2xl font-bold text-stone-900">Common ${entry.name.toLowerCase()} situations in ${SITE.city}</h2> <div class="mt-4 grid gap-4"> ${entry.problems.map((pr) => renderTemplate`<div class="bg-white border border-stone-200 rounded-xl p-5"> <h3 class="font-semibold text-stone-900">${pr.title}</h3> <p class="mt-1 text-sm text-stone-600 leading-relaxed">${pr.body}</p> </div>`)} </div> <h2 class="mt-10 text-2xl font-bold text-stone-900">How it works</h2> <ol class="mt-4 space-y-3"> ${entry.process.map((st, i) => renderTemplate`<li class="flex gap-3"> <span class="flex-none w-7 h-7 rounded-full bg-sky-700 text-white text-sm font-bold flex items-center justify-center">${i + 1}</span> <div> <p class="font-semibold text-stone-900">${st.step}</p> <p class="text-sm text-stone-600 leading-relaxed">${st.detail}</p> </div> </li>`)} </ol> <h2 class="mt-10 text-2xl font-bold text-stone-900">What ${entry.name.toLowerCase()} costs in ${SITE.city}</h2> <p class="mt-3 text-stone-700 leading-relaxed">${entry.priceContext}</p> <h2 class="mt-10 text-2xl font-bold text-stone-900">Frequently asked questions</h2> <div class="mt-4 space-y-5"> ${entry.faqs.map((f) => renderTemplate`<div> <h3 class="font-semibold text-stone-900">${f.q}</h3> <p class="mt-1 text-sm text-stone-600 leading-relaxed">${f.a}</p> </div>`)} </div> <div class="mt-12"> ${renderComponent($$result2, "LeadForm", $$LeadForm, { "serviceName": entry.name })} </div> ${related.length > 0 && renderTemplate`<section class="mt-12"> <h2 class="text-xl font-bold text-stone-900">Related services in ${SITE.city}</h2> <ul class="mt-3 flex flex-wrap gap-2"> ${related.map((r) => renderTemplate`<li> <a${addAttribute(`/${r.slug}`, "href")} class="inline-block bg-white border border-stone-300 hover:border-sky-600 hover:text-sky-700 rounded-full px-4 py-2 text-sm font-medium">${r.name}</a> </li>`)} </ul> </section>`} </main> ` })}`;
}, "/home/project/src/pages/[service].astro", void 0);

const $$file = "/home/project/src/pages/[service].astro";
const $$url = "/[service]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$service,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
