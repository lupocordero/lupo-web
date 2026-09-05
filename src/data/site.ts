// ---------------------------------------------------------------------------
// CONTACT DATA — see CONFIG.md at the project root for how to change every
// value below in one place. Email is temporary (lupo.cordero@gmail.com)
// until the @lupo.pm inbox is set up.
// ---------------------------------------------------------------------------

import type { Lang } from './routes';

export const SITE = {
  brand: 'Lupo',
  legalName: 'Lupo Photography',
  domain: 'lupo.pm',
  url: 'https://lupo.pm',
  whatsappNumber: '+34 623 066 432',
  whatsappLink: 'https://wa.me/34623066432',
  email: 'lupo.cordero@gmail.com',
  instagram: '@lupo.mallorca',
  instagramUrl: 'https://instagram.com/lupo.mallorca',
  serviceArea: 'Mallorca, Illes Balears, España',
  addressRegion: 'Illes Balears',
  addressCountry: 'ES',
  priceRange: '€€',
  founder: 'Lupo',
  latitude: 39.5696,
  longitude: 2.6502,
};

// Prefilled wa.me link so a tap opens WhatsApp with a friendly first message
// already typed, in the visitor's language.
const WHATSAPP_PREFILL: Record<Lang, string> = {
  es: 'Hola Lupo! Me gustaría preguntarte por disponibilidad para una sesión.',
  de: 'Hallo Lupo! Ich möchte mich nach der Verfügbarkeit für ein Shooting erkundigen.',
  en: "Hi Lupo! I'd like to ask about availability for a session.",
};

export function whatsappHref(lang: Lang): string {
  return `${SITE.whatsappLink}?text=${encodeURIComponent(WHATSAPP_PREFILL[lang])}`;
}

export const NAV = {
  es: { home: 'Inicio', work: 'Trabajo', areas: 'Zonas', about: 'Sobre mí', contact: 'Contacto', journal: 'Diario', cta: 'WhatsApp' },
  de: { home: 'Start', work: 'Arbeiten', areas: 'Gebiete', about: 'Über mich', contact: 'Kontakt', journal: 'Journal', cta: 'WhatsApp' },
  en: { home: 'Home', work: 'Work', areas: 'Areas', about: 'About', contact: 'Contact', journal: 'Journal', cta: 'WhatsApp' },
};

export const UI = {
  es: {
    readMore: 'Leer más', relatedPosts: 'Sigue leyendo', faqTitle: 'Preguntas frecuentes', ctaHeading: '¿Hablamos de tu sesión?', ctaBody: 'Cuéntame qué tienes en mente y te respondo el mismo día.', ctaButton: 'Escríbeme por WhatsApp', formName: 'Nombre', formEmail: 'Email', formSessionType: 'Tipo de sesión', formMessage: 'Mensaje', formSubmit: 'Enviar', areasWeWork: 'Dónde trabajo', servicesHeading: 'Especialidad', secondaryHeading: 'También', reelsHeading: 'Trabajo reciente', langSwitch: 'Idioma', blogListTitle: 'Diario', publishedOn: '', checkAvailability: 'Consultar disponibilidad', modalBody: 'Cuéntame la fecha y el tipo de sesión y te respondo el mismo día.', modalClose: 'Cerrar',
  },
  de: {
    readMore: 'Weiterlesen', relatedPosts: 'Weiterlesen', faqTitle: 'Häufig gestellte Fragen', ctaHeading: 'Lass uns reden', ctaBody: 'Schreib mir, was du dir vorstellst — ich antworte noch am selben Tag.', ctaButton: 'Auf WhatsApp schreiben', formName: 'Name', formEmail: 'E-Mail', formSessionType: 'Art des Shootings', formMessage: 'Nachricht', formSubmit: 'Senden', areasWeWork: 'Wo ich arbeite', servicesHeading: 'Spezialisierung', secondaryHeading: 'Außerdem', reelsHeading: 'Neueste Arbeiten', langSwitch: 'Sprache', blogListTitle: 'Journal', publishedOn: '', checkAvailability: 'Verfügbarkeit anfragen', modalBody: 'Schreib mir Datum und Art des Shootings — ich antworte noch am selben Tag.', modalClose: 'Schließen',
  },
  en: {
    readMore: 'Read more', relatedPosts: 'Keep reading', faqTitle: 'Frequently asked questions', ctaHeading: "Let's talk", ctaBody: "Tell me what you have in mind — I'll reply the same day.", ctaButton: 'Message on WhatsApp', formName: 'Name', formEmail: 'Email', formSessionType: 'Session type', formMessage: 'Message', formSubmit: 'Send', areasWeWork: 'Where I work', servicesHeading: 'Specialty', secondaryHeading: 'Also', reelsHeading: 'Recent work', langSwitch: 'Language', blogListTitle: 'Journal', publishedOn: '', checkAvailability: 'Check availability', modalBody: "Tell me the date and session type and I'll reply the same day.", modalClose: 'Close',
  },
};

// No emoji/icon set on purpose — the new editorial design leans on
// photography and typography, not iconography.
export const SERVICE_META = {
  events: { es: 'Eventos', de: 'Events', en: 'Events' },
  portraits: { es: 'Retratos', de: 'Porträts', en: 'Portraits' },
  elopement: { es: 'Elopement', de: 'Elopement', en: 'Elopement' },
  portraittour: { es: 'Portrait Tour', de: 'Portrait Tour', en: 'Portrait Tour' },
};

export const HOME_SERVICE_BLURBS = {
  events: {
    es: 'Bodas, fiestas, eventos de empresa y ferias — cobertura completa y entrega rápida.',
    de: 'Hochzeiten, Feiern, Firmenevents und Messen — volle Abdeckung, schnelle Lieferung.',
    en: 'Weddings, parties, corporate events and trade fairs — full coverage, fast delivery.',
  },
  portraits: {
    es: 'Familia, niños y retratos personales, siempre naturales.',
    de: 'Familie, Kinder und persönliche Porträts — immer natürlich.',
    en: 'Family, kids and personal portraits, always natural.',
  },
  elopement: {
    es: 'Ceremonias íntimas de pareja en los rincones más bonitos de la isla.',
    de: 'Intime Paar-Zeremonien an den schönsten Orten der Insel.',
    en: 'Intimate couple ceremonies in the island’s most beautiful corners.',
  },
  portraittour: {
    es: 'Un paseo fotográfico por Palma en el que te retrato mientras descubrimos la ciudad.',
    de: 'Ein fotografischer Spaziergang durch Palma, bei dem ich euch unterwegs porträtiere.',
    en: 'A photo walk through Palma where I portrait you as we explore the city.',
  },
};

export const LOCATION_META = {
  palma: { es: 'Palma', de: 'Palma', en: 'Palma' },
  soller: { es: 'Sóller', de: 'Sóller', en: 'Sóller' },
  deia: { es: 'Deià', de: 'Deià', en: 'Deià' },
  calvia: { es: 'Calvià', de: 'Calvià', en: 'Calvià' },
};
