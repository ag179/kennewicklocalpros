import { c as createAstro, a as createComponent, d as addAttribute, b as renderTemplate, u as unescapeHTML, e as renderHead, f as renderSlot, m as maybeRenderHead } from './astro/server_B3_TUemF.mjs';
import 'kleur/colors';
import 'clsx';
import { S as SITE } from './site_xz-GphEw.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://kennewicklocalpros.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, canonical, schemas = [] } = Astro2.props;
  const footerLinks = [
    { slug: "plumbing", name: "Plumbing" },
    { slug: "hvac", name: "HVAC" },
    { slug: "roofing", name: "Roofing" },
    { slug: "electrician", name: "Electrician" },
    { slug: "landscaping", name: "Landscaping" },
    { slug: "pestcontrol", name: "Pest Control" },
    { slug: "concrete", name: "Concrete" },
    { slug: "housecleaning", name: "House Cleaning" }
  ];
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonical, "href")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonical, "content")}><meta property="og:type" content="website"><meta property="og:site_name"${addAttribute(SITE.name, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg">${schemas.map((s) => renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(s))))}${renderHead()}</head> <body class="bg-stone-50 text-stone-800 antialiased"> <header class="bg-white border-b border-stone-200 sticky top-0 z-10"> <div class="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-3"> <a href="/" class="font-bold text-lg text-sky-800">${SITE.name}</a> <a${addAttribute(SITE.phoneHref, "href")} class="bg-sky-700 hover:bg-sky-800 text-white text-sm font-semibold px-4 py-2 rounded-lg whitespace-nowrap">Call ${SITE.phone}</a> </div> </header> ${renderSlot($$result, $$slots["default"])} <footer class="bg-stone-900 text-stone-300 mt-16"> <div class="max-w-5xl mx-auto px-4 py-10 grid gap-8 sm:grid-cols-3"> <div> <p class="font-bold text-white">${SITE.name}</p> <p class="mt-2 text-sm">Serving ${SITE.city}, ${SITE.stateFull} and the surrounding Tri-Cities area.</p> <a${addAttribute(SITE.phoneHref, "href")} class="mt-3 inline-block text-sky-300 font-semibold">${SITE.phone}</a> </div> <div> <p class="font-semibold text-white text-sm uppercase tracking-wide">Popular services</p> <ul class="mt-2 space-y-1 text-sm"> ${footerLinks.map((l) => renderTemplate`<li><a${addAttribute(`/${l.slug}`, "href")} class="hover:text-white">${l.name}</a></li>`)} </ul> </div> <div> <p class="font-semibold text-white text-sm uppercase tracking-wide">About this site</p> <p class="mt-2 text-sm"> ${SITE.name} is a referral service. We connect you with independent local providers; we do not perform the
            services listed and are not affiliated with any single contractor.
</p> <p class="mt-3 text-xs text-stone-400"><a href="/" class="hover:text-white">Home</a> · <a href="/sitemap.xml" class="hover:text-white">Sitemap</a></p> </div> </div> </footer> </body></html>`;
}, "/home/project/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://kennewicklocalpros.com");
const $$LeadForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LeadForm;
  const { serviceName } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-sky-50 border border-sky-200 rounded-2xl p-6 sm:p-8"> <h2 class="text-xl font-bold text-sky-900">Get a free ${serviceName.toLowerCase()} quote in ${SITE.city}</h2> <p class="mt-1 text-sm text-stone-600">
Tell us what you need and we'll match you with a local pro — or call
<a${addAttribute(SITE.phoneHref, "href")} class="font-semibold text-sky-700">${SITE.phone}</a>.
</p> <form method="POST"${addAttribute(SITE.formEndpoint, "action")} class="mt-4 grid gap-3 sm:grid-cols-2"> <input type="hidden" name="service"${addAttribute(serviceName, "value")}> <input type="text" name="name" required placeholder="Your name" class="rounded-lg border border-stone-300 px-3 py-2 text-sm"> <input type="tel" name="phone" required placeholder="Phone number" class="rounded-lg border border-stone-300 px-3 py-2 text-sm"> <input type="email" name="email" placeholder="Email (optional)" class="rounded-lg border border-stone-300 px-3 py-2 text-sm sm:col-span-2"> <textarea name="message" rows="3" placeholder="What do you need done?" class="rounded-lg border border-stone-300 px-3 py-2 text-sm sm:col-span-2"></textarea> <button type="submit" class="sm:col-span-2 bg-sky-700 hover:bg-sky-800 text-white font-semibold rounded-lg px-4 py-3">Request my free quote</button> </form> </section>`;
}, "/home/project/src/components/LeadForm.astro", void 0);

export { $$LeadForm as $, $$Layout as a };
