/* empty css                                     */
import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_B3_TUemF.mjs';
import 'kleur/colors';
import { a as $$Layout, $ as $$LeadForm } from '../chunks/LeadForm_B34E5igM.mjs';
import { S as SITE } from '../chunks/site_xz-GphEw.mjs';
import { b as byCategory } from '../chunks/index_U1Wg8-ld.mjs';
import { l as localBusinessSchema } from '../chunks/schema_D1D0L_cj.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const categories = byCategory();
  const anchor = (c) => c.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const title = `Kennewick Local Pros \u2014 Home & Local Services in Kennewick, WA`;
  const description = `Find trusted local pros in Kennewick, WA for 48 home, outdoor, auto, and event services. Free quotes, one call or one form \u2014 we connect you with the right provider.`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "canonical": `${SITE.domain}/`, "schemas": [localBusinessSchema()] }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-4"> <section class="py-12 sm:py-16"> <h1 class="text-3xl sm:text-4xl font-extrabold text-stone-900 max-w-3xl">
Every local service Kennewick actually needs, one directory.
</h1> <div class="mt-6 max-w-3xl space-y-4 text-stone-700 leading-relaxed"> <p>
Kennewick is a working town in an unusual place: a shrub-steppe desert with eight inches of rain a year,
          summers that run past 100°F, wind events that top 50 mph, and irrigation water that keeps lawns green from
          April to October. Those conditions are hard on houses — and they shape which trades matter here. Roofs age
          from UV rather than moisture. Concrete cracks from freeze-thaw winters, not rain. Hard Columbia Basin water
          shortens the life of every water heater in town, and cheap Mid-Columbia hydro power means most households run
          electric heat, which changes the math on furnaces, heat pumps, and EV chargers.
</p> <p>
The housing stock is just as specific. Much of central Kennewick was built fast during the Hanford decades —
          1950s and 60s ranch homes with original panels, galvanized plumbing, and single-pane windows — while
          Southridge and the newer south-side neighborhoods have modern construction with its own punch list. Whether
          you own a 70-year-old ranch near Highlands or a five-year-old build off Bob Olson Parkway, the pro you need
          exists somewhere in the Tri-Cities. Finding the right one is the hard part.
</p> <p>
That's what this directory does. We're a referral service, not a contractor: browse the 48 services below,
          each with a straight explanation of what the work involves in Kennewick specifically — local price drivers,
          common problems, and questions worth asking. When you're ready, one call or one short form and we connect you
          with an independent local provider. No membership, no fee to you.
</p> </div> <div class="mt-8 flex flex-wrap gap-3"> <a${addAttribute(SITE.phoneHref, "href")} class="bg-sky-700 hover:bg-sky-800 text-white font-semibold px-5 py-3 rounded-lg">Call ${SITE.phone}</a> <a href="#services" class="border border-stone-300 hover:border-stone-400 font-semibold px-5 py-3 rounded-lg">Browse all services</a> </div> </section> <section id="services" class="pb-4"> <h2 class="text-2xl font-bold text-stone-900">All services in Kennewick, WA</h2> <div class="mt-6 grid gap-8 sm:grid-cols-2"> ${[...categories.entries()].map(([category, entries]) => renderTemplate`<div${addAttribute(anchor(category), "id")} class="bg-white border border-stone-200 rounded-2xl p-6"> <h3 class="font-bold text-sky-900">${category}</h3> <ul class="mt-3 space-y-2"> ${entries.map((s) => renderTemplate`<li> <a${addAttribute(`/${s.slug}`, "href")} class="text-stone-700 hover:text-sky-700 hover:underline"> ${s.name} </a> </li>`)} </ul> </div>`)} </div> </section> <section class="py-12 max-w-2xl"> ${renderComponent($$result2, "LeadForm", $$LeadForm, { "serviceName": "General" })} </section> </main> ` })}`;
}, "/home/project/src/pages/index.astro", void 0);

const $$file = "/home/project/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
