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
    }),
  ],
});
