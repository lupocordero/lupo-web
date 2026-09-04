// Single source of truth for localized slugs. Content collection frontmatter
// `slug` fields MUST match these values — this file is what SEOHead uses to
// build hreflang alternates and what the nav/footer use to build links.

export const LANGS = ['es', 'de', 'en'] as const;
export type Lang = (typeof LANGS)[number];

export const LANG_LABELS: Record<Lang, string> = {
  es: 'Español',
  de: 'Deutsch',
  en: 'English',
};

export const LOCALE_TAGS: Record<Lang, string> = {
  es: 'es-ES',
  de: 'de-DE',
  en: 'en-GB',
};

// Only services with their own dedicated, SEO-targeted page live here.
// Weddings and food are intentionally NOT sold as standalone services —
// they show up as by-products inside the portfolio/journal (a wedding
// because a portrait/elopement couple got married, food because it was
// on the table at an event) without their own page or explicit marketing.
export const serviceSlugs = {
  elopement: { es: 'elopeamiento', de: 'elopement', en: 'elopement' },
  portraits: { es: 'retratos', de: 'portraits', en: 'portraits' },
  events: { es: 'eventos', de: 'events', en: 'events' },
  realestate: { es: 'real-estate', de: 'immobilien', en: 'real-estate' },
} as const;

export type ServiceKey = keyof typeof serviceSlugs;
export const SERVICE_KEYS = Object.keys(serviceSlugs) as ServiceKey[];

// Editorial hierarchy for the new positioning: elopement + portraits are the
// core specialty, events is a secondary offering, real estate is kept
// deliberately apart as commercial/B2B work rather than personal work.
export const SERVICE_TIER: Record<ServiceKey, 'core' | 'secondary' | 'commercial'> = {
  elopement: 'core',
  portraits: 'core',
  events: 'secondary',
  realestate: 'commercial',
};

export const locationSlugs = {
  palma: { es: 'palma', de: 'palma', en: 'palma' },
  soller: { es: 'soller', de: 'soller', en: 'soller' },
  deia: { es: 'deia', de: 'deia', en: 'deia' },
  calvia: { es: 'calvia', de: 'calvia', en: 'calvia' },
} as const;

export type LocationKey = keyof typeof locationSlugs;
export const LOCATION_KEYS = Object.keys(locationSlugs) as LocationKey[];

export const pageSlugs = {
  home: { es: '', de: '', en: '' },
  about: { es: 'sobre-mi', de: 'uber-mich', en: 'about' },
  contact: { es: 'contacto', de: 'kontakt', en: 'contact' },
} as const;

export const blogIndexSlug = { es: 'blog', de: 'blog', en: 'blog' } as const;

export const blogPostSlugs = {
  'family-locations': {
    es: 'mejores-lugares-fotos-familia-mallorca',
    de: 'beste-orte-familienfotos-mallorca',
    en: 'best-locations-family-photos-mallorca',
  },
  'elopement-guide': {
    es: 'guia-elopement-soller-deia',
    de: 'elopement-soller-deia-guide',
    en: 'elopement-soller-deia-guide',
  },
  'what-to-bring': {
    es: 'que-llevar-sesion-fotos-familia-mallorca',
    de: 'was-mitbringen-familienshooting-mallorca',
    en: 'what-to-bring-family-photo-session-mallorca',
  },
} as const;

export type BlogPostKey = keyof typeof blogPostSlugs;
export const BLOG_POST_KEYS = Object.keys(blogPostSlugs) as BlogPostKey[];

export function localePath(lang: Lang, slug: string): string {
  return slug ? `/${lang}/${slug}` : `/${lang}`;
}

export function serviceHref(key: ServiceKey, lang: Lang): string {
  return localePath(lang, serviceSlugs[key][lang]);
}

export function locationHref(key: LocationKey, lang: Lang): string {
  return localePath(lang, locationSlugs[key][lang]);
}

export function pageHref(key: keyof typeof pageSlugs, lang: Lang): string {
  return localePath(lang, pageSlugs[key][lang]);
}

export function blogIndexHref(lang: Lang): string {
  return localePath(lang, blogIndexSlug[lang]);
}

export function blogPostHref(key: BlogPostKey, lang: Lang): string {
  return `${blogIndexHref(lang)}/${blogPostSlugs[key][lang]}`;
}
