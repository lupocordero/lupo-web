import { SITE } from './site';
import { SITE_URL } from '../../astro.config.mjs';
import type { Lang } from './routes';

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#business`,
    name: SITE.brand,
    alternateName: 'Lupo',
    image: `${SITE_URL}/images/og-default.jpg`,
    url: SITE_URL,
    telephone: SITE.whatsappNumber,
    email: SITE.email,
    priceRange: SITE.priceRange,
    address: {
      '@type': 'PostalAddress',
      addressRegion: SITE.addressRegion,
      addressCountry: SITE.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.latitude,
      longitude: SITE.longitude,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: SITE.serviceArea,
    },
    sameAs: [SITE.instagramUrl],
    knowsLanguage: ['es', 'de', 'en'],
    founder: {
      '@type': 'Person',
      name: SITE.founder,
    },
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  lang: Lang;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: opts.serviceType,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#business`,
      name: SITE.brand,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: SITE.serviceArea,
    },
    inLanguage: opts.lang,
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  if (!faqs.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  lang: Lang;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    image: `${SITE_URL}${opts.image}`,
    datePublished: opts.datePublished,
    author: {
      '@type': 'Person',
      name: SITE.founder,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.brand,
    },
    inLanguage: opts.lang,
  };
}
