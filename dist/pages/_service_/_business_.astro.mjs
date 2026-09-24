/* empty css                                        */
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_B3_TUemF.mjs';
import 'kleur/colors';
import { $ as $$LeadForm, a as $$Layout } from '../../chunks/LeadForm_B34E5igM.mjs';
import { s as services } from '../../chunks/index_U1Wg8-ld.mjs';
import { m as milesBetween, g as getBusinessesByService } from '../../chunks/businesses_CjnFn81K.mjs';
import { S as SITE } from '../../chunks/site_xz-GphEw.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://kennewicklocalpros.com");
async function getStaticPaths() {
  const businessesByService = await getBusinessesByService();
  return Object.entries(businessesByService).flatMap(([serviceSlug, list]) => {
    const entry = services.find((s) => s.slug === serviceSlug);
    if (!entry) return [];
    return list.map((b, i) => ({
      params: { service: serviceSlug, business: b.slug },
      props: { b, rank: i + 1, total: list.length, list, serviceName: entry.name, serviceSlug }
    }));
  });
}
const $$business = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$business;
  const { b, rank, total, list, serviceName, serviceSlug } = Astro2.props;
  const canonical = `${SITE.domain}/${serviceSlug}/${b.slug}`;
  const telHref = b.phone ? `tel:+1${b.phone.replace(/\D/g, "")}` : null;
  const serviceLower = serviceName.toLowerCase();
  const cityState = `${b.city}, ${SITE.state}`;
  const milesFromCenter = milesBetween(SITE.geo.lat, SITE.geo.lng, b.lat, b.lng);
  const distanceText = milesFromCenter < 1 ? "less than a mile from central Kennewick" : `about ${Math.round(milesFromCenter)} miles from central Kennewick`;
  const scores = b.reviewsPerScore ?? {};
  const totalScored = Object.values(scores).reduce((a, n) => a + n, 0);
  const pctOf = (star) => totalScored ? Math.round((scores[star] ?? 0) / totalScored * 100) : 0;
  const fiveStarPct = pctOf("5");
  const openDays = (b.weeklyHours ?? []).filter((d) => d.hours !== "Closed");
  let hoursSentence = "";
  if (b.weeklyHours) {
    if (b.weeklyHours.every((d) => d.hours === "Open 24 hours")) hoursSentence = "It lists itself as open 24 hours, seven days a week.";
    else if (openDays.length === 7) hoursSentence = "It is open seven days a week.";
    else hoursSentence = `It is open ${openDays.length} days a week and closed on ${b.weeklyHours.filter((d) => d.hours === "Closed").map((d) => d.day).join(" and ")}.`;
  }
  const ratingSentence = b.rating !== null && b.reviews > 0 ? `It has a ${b.rating.toFixed(1)}-star average from ${b.reviews.toLocaleString("en-US")} Google review${b.reviews === 1 ? "" : "s"}${totalScored >= 10 ? `, and ${fiveStarPct}% of those reviews are five stars` : ""}.` : "It does not have enough Google reviews yet for a meaningful rating.";
  const intro = `${b.name} is a ${serviceLower} provider located at ${b.street ?? b.address} in ${cityState}${b.postalCode ? ` ${b.postalCode}` : ""}, ${distanceText}. ${ratingSentence} ${hoursSentence}`.trim();
  const rankSentence = `Out of the ${total} ${serviceLower} companies we list for Kennewick and the Tri-Cities, ${b.name} ranks #${rank} when rating is weighted by the number of reviews.`;
  const nearby = list.filter((o) => o.slug !== b.slug).map((o) => ({ o, miles: milesBetween(b.lat, b.lng, o.lat, o.lng) })).sort((x, y) => x.miles - y.miles).slice(0, 4);
  const mapSrc = `https://maps.google.com/maps?q=${b.lat},${b.lng}&z=14&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${b.name}, ${b.address}`)}`;
  const dayCodes = {
    Monday: "Mo",
    Tuesday: "Tu",
    Wednesday: "We",
    Thursday: "Th",
    Friday: "Fr",
    Saturday: "Sa",
    Sunday: "Su"
  };
  const to24 = (t) => {
    const m = t.match(/^(\d{1,2})(?::(\d{2}))?(am|pm)$/);
    if (!m) return null;
    let h = Number(m[1]) % 12;
    if (m[3] === "pm") h += 12;
    return `${String(h).padStart(2, "0")}:${m[2] ?? "00"}`;
  };
  const openingHours = (b.weeklyHours ?? []).map((d) => {
    if (d.hours === "Closed") return null;
    if (d.hours === "Open 24 hours") return `${dayCodes[d.day]} 00:00-23:59`;
    const [a, z] = d.hours.split("\u2013");
    const s = to24(a);
    const e = to24(z);
    return s && e ? `${dayCodes[d.day]} ${s}-${e}` : null;
  }).filter(Boolean);
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: b.name,
      url: b.website ?? void 0,
      telephone: b.phone ?? void 0,
      address: {
        "@type": "PostalAddress",
        streetAddress: b.street ?? void 0,
        addressLocality: b.city,
        addressRegion: SITE.state,
        postalCode: b.postalCode ?? void 0,
        addressCountry: "US"
      },
      geo: { "@type": "GeoCoordinates", latitude: b.lat, longitude: b.lng },
      ...openingHours.length ? { openingHours } : {},
      ...b.mapsUrl ? { hasMap: b.mapsUrl } : {}
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
        { "@type": "ListItem", position: 2, name: serviceName, item: `${SITE.domain}/${serviceSlug}` },
        { "@type": "ListItem", position: 3, name: b.name, item: canonical }
      ]
    }
  ];
  const title = `${b.name} \u2013 ${serviceName} in ${cityState} | Hours, Phone & Reviews`;
  const description = `${b.name}: ${serviceLower} in ${cityState}.${b.rating !== null && b.reviews > 0 ? ` Rated ${b.rating.toFixed(1)}\u2605 from ${b.reviews.toLocaleString("en-US")} Google reviews.` : ""} Address, phone, opening hours, map and nearby alternatives.`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "canonical": canonical, "schemas": schemas }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-3xl mx-auto px-4"> <nav class="text-xs text-stone-500 mt-6" aria-label="Breadcrumb"> <a href="/" class="hover:text-sky-700">Home</a> <span class="mx-1">›</span> <a${addAttribute(`/${serviceSlug}`, "href")} class="hover:text-sky-700">${serviceName}</a> <span class="mx-1">›</span> <span class="text-stone-700">${b.name}</span> </nav> <header class="mt-4"> <h1 class="text-3xl sm:text-4xl font-extrabold text-stone-900">${b.name}</h1> <p class="mt-2 text-stone-600"> ${serviceName} · ${cityState} ${b.verified && renderTemplate`<span class="ml-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">Verified Google listing</span>`} </p> ${b.rating !== null && b.reviews > 0 && renderTemplate`<p class="mt-3 text-lg"> <span class="font-bold text-amber-600">★ ${b.rating.toFixed(1)}</span> <span class="text-stone-500 text-base"> · ${b.reviews.toLocaleString("en-US")} Google reviews</span> </p>`} <div class="mt-5 flex flex-wrap gap-3"> ${telHref && renderTemplate`<a${addAttribute(telHref, "href")} class="bg-sky-700 hover:bg-sky-800 text-white font-semibold px-5 py-3 rounded-lg">Call ${b.phone}</a>`} ${b.website && renderTemplate`<a${addAttribute(b.website, "href")} target="_blank" rel="noopener nofollow" class="bg-white border border-stone-300 hover:border-sky-600 font-semibold px-5 py-3 rounded-lg">Visit website</a>`} <a${addAttribute(directionsUrl, "href")} target="_blank" rel="noopener nofollow" class="bg-white border border-stone-300 hover:border-sky-600 font-semibold px-5 py-3 rounded-lg">Get directions</a> </div> </header> <section class="mt-8 space-y-3 text-stone-700 leading-relaxed"> <p>${intro}</p> <p>${rankSentence}</p> </section> <section class="mt-8 grid gap-4 sm:grid-cols-2"> <div class="bg-white border border-stone-200 rounded-xl p-5"> <h2 class="text-lg font-bold text-stone-900">Contact & location</h2> <dl class="mt-3 space-y-3 text-sm"> <div> <dt class="text-xs font-semibold text-stone-500 uppercase tracking-wide">Address</dt> <dd class="mt-0.5 text-stone-800">${b.address}</dd> </div> ${b.phone && telHref && renderTemplate`<div> <dt class="text-xs font-semibold text-stone-500 uppercase tracking-wide">Phone</dt> <dd class="mt-0.5"><a${addAttribute(telHref, "href")} class="font-semibold text-sky-700 hover:underline">${b.phone}</a></dd> </div>`} ${b.website && renderTemplate`<div> <dt class="text-xs font-semibold text-stone-500 uppercase tracking-wide">Website</dt> <dd class="mt-0.5 break-all"> <a${addAttribute(b.website, "href")} target="_blank" rel="noopener nofollow" class="text-sky-700 hover:underline">${b.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}</a> </dd> </div>`} </dl> </div> <div class="bg-white border border-stone-200 rounded-xl p-5"> <h2 class="text-lg font-bold text-stone-900">Opening hours</h2> ${b.weeklyHours ? renderTemplate`<table class="mt-3 w-full text-sm"> <tbody> ${b.weeklyHours.map((d) => renderTemplate`<tr class="border-b border-stone-100 last:border-0"> <th scope="row" class="py-1.5 text-left font-medium text-stone-600">${d.day}</th> <td${addAttribute(`py-1.5 text-right ${d.hours === "Closed" ? "text-stone-400" : "text-stone-800"}`, "class")}>${d.hours}</td> </tr>`)} </tbody> </table>` : renderTemplate`<p class="mt-3 text-sm text-stone-600">Hours are not published. Call ahead to confirm availability.</p>`} </div> </section> ${totalScored > 0 && renderTemplate`<section class="mt-8 bg-white border border-stone-200 rounded-xl p-5"> <h2 class="text-lg font-bold text-stone-900">Google review breakdown</h2> <div class="mt-3 space-y-1.5"> ${["5", "4", "3", "2", "1"].map((star) => renderTemplate`<div class="flex items-center gap-3 text-sm"> <span class="w-8 text-stone-600">${star}★</span> <div class="flex-1 h-2.5 bg-stone-100 rounded-full overflow-hidden"> <div class="h-full bg-amber-500 rounded-full"${addAttribute(`width:${pctOf(star)}%`, "style")}></div> </div> <span class="w-16 text-right text-stone-500">${(scores[star] ?? 0).toLocaleString("en-US")}</span> </div>`)} </div> ${b.reviewsUrl && renderTemplate`<a${addAttribute(b.reviewsUrl, "href")} target="_blank" rel="noopener nofollow" class="mt-4 inline-block text-sm font-semibold text-sky-700 hover:underline">Read the reviews on Google</a>`} </section>`} ${(b.services.length > 0 || Object.keys(b.attributes).length > 0) && renderTemplate`<section class="mt-8"> <h2 class="text-lg font-bold text-stone-900">Services & details</h2> ${b.services.length > 0 && renderTemplate`<div class="mt-3 flex flex-wrap gap-2"> ${b.services.map((s) => renderTemplate`<span class="text-sm bg-sky-50 text-sky-800 px-3 py-1 rounded-full font-medium">${s}</span>`)} </div>`} ${Object.entries(b.attributes).length > 0 && renderTemplate`<dl class="mt-4 grid gap-3 sm:grid-cols-2 text-sm"> ${Object.entries(b.attributes).map(([group, items]) => renderTemplate`<div> <dt class="text-xs font-semibold text-stone-500 uppercase tracking-wide">${group}</dt> <dd class="mt-0.5 text-stone-800">${items.join(", ")}</dd> </div>`)} </dl>`} </section>`} <section class="mt-8"> <h2 class="text-lg font-bold text-stone-900">Map</h2> <div class="mt-3 rounded-xl overflow-hidden border border-stone-200 aspect-[16/9] bg-stone-100"> <iframe${addAttribute(mapSrc, "src")}${addAttribute(`Map showing ${b.name}`, "title")} class="w-full h-full" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> </div> </section> ${nearby.length > 0 && renderTemplate`<section class="mt-10"> <h2 class="text-xl font-bold text-stone-900">Other ${serviceLower} companies nearby</h2> <ul class="mt-4 grid gap-3 sm:grid-cols-2"> ${nearby.map(({ o, miles }) => renderTemplate`<li> <a${addAttribute(`/${serviceSlug}/${o.slug}`, "href")} class="block bg-white border border-stone-200 rounded-xl p-4 hover:border-sky-400 transition-colors"> <span class="font-semibold text-stone-900">${o.name}</span> <span class="mt-1 block text-xs text-stone-500"> ${o.rating !== null && o.reviews > 0 ? `\u2605 ${o.rating.toFixed(1)} (${o.reviews.toLocaleString("en-US")}) \xB7 ` : ""} ${miles < 0.1 ? "same building" : `${miles.toFixed(1)} mi away`} · ${o.city} </span> </a> </li>`)} </ul> <a${addAttribute(`/${serviceSlug}#local-businesses`, "href")} class="mt-4 inline-block text-sm font-semibold text-sky-700 hover:underline">
See all ${total} ${serviceLower} companies in Kennewick
</a> </section>`} <div class="mt-12"> ${renderComponent($$result2, "LeadForm", $$LeadForm, { "serviceName": serviceName })} </div> <p class="mt-8 mb-4 text-xs text-stone-500 leading-relaxed"> ${SITE.name} is an independent directory and is not affiliated with ${b.name}. Details are based on public Google Maps
      information and may have changed. Confirm hours and services with the business directly.
</p> </main> ` })}`;
}, "/home/project/src/pages/[service]/[business].astro", void 0);

const $$file = "/home/project/src/pages/[service]/[business].astro";
const $$url = "/[service]/[business]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$business,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
