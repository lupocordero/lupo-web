import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Update this to the real production domain once DNS on lupo.pm is live.
export const SITE_URL = 'https://lupo.pm';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'never',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'de', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  integrations: [
    tailwind({ applyBaseStyles: true }),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
          de: 'de-DE',
          en: 'en-GB',
        },
      },
      // "Little Eyes" is a private image-consent page shared only via a
      // direct WhatsApp link to families — keep it out of the sitemap on
      // top of its own noindex/nofollow meta tag (see Layout.astro).
      filter: (page) => !page.includes('/little-eyes'),
    }),
  ],
});
