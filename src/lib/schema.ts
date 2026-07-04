import { SITE } from './site';
import type { ServiceEntry } from '../types';

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    url: SITE.domain,
    telephone: SITE.phone,
    address: { '@type': 'PostalAddress', addressLocality: SITE.city, addressRegion: SITE.state, addressCountry: 'US' },
    geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    areaServed: { '@type': 'City', name: SITE.city },
  };
}

export function serviceSchema(s: ServiceEntry) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${s.name} in ${SITE.city}, ${SITE.state}`,
    serviceType: s.name,
    description: s.metaDescription,
    url: `${SITE.domain}/${s.slug}`,
    areaServed: { '@type': 'City', name: SITE.city },
    provider: { '@type': 'LocalBusiness', name: SITE.name, telephone: SITE.phone },
  };
}

export function faqSchema(s: ServiceEntry) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: s.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(s: ServiceEntry) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.domain },
      { '@type': 'ListItem', position: 2, name: s.category, item: `${SITE.domain}/#${s.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}` },
      { '@type': 'ListItem', position: 3, name: s.name, item: `${SITE.domain}/${s.slug}` },
    ],
  };
}
