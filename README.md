# Lupo Photography — lupo.pm

Sitio web multilingüe (ES/DE/EN) para un fotógrafo en Mallorca, construido con **Astro 5** + **Tailwind CSS**. Estático, sin backend, listo para desplegar gratis en Cloudflare Pages o Vercel.

## Empezar

```bash
npm install
npm run dev
```

Abre `http://localhost:4321` (redirige automáticamente a `/es`).

## Build de producción

```bash
npm run build
npm run preview
```

## Documentación

- [`CONFIG.md`](./CONFIG.md) — cómo cambiar WhatsApp, email, Instagram y el formulario de contacto.
- [`README_SEO.md`](./README_SEO.md) — estrategia SEO completa: keyword research, Google Business Profile, backlinks, métricas, plan de contenidos, despliegue.
- [`docs/keyword-research.md`](./docs/keyword-research.md) — tablas de keyword research por idioma.

## Estructura del proyecto

```
src/
  components/       Header, Footer, SEOHead, ServiceCard, Gallery, FAQSection, WhatsAppCTA
  layouts/          Layout.astro (envoltorio base de cada página)
  content/          Contenido en Markdown (content collections), organizado por tipo e idioma:
    services/{es,de,en}/    6 páginas de servicio × 3 idiomas
    locations/{es,de,en}/   4 páginas de ubicación × 3 idiomas
    pages/{es,de,en}/       home, about, contact
    blog/{es,de,en}/        3 artículos × 3 idiomas
  data/             site.ts (config/placeholders), routes.ts (mapa de slugs por idioma), schema.ts (JSON-LD)
  pages/            Rutas Astro: [lang]/index.astro, [lang]/[slug].astro, [lang]/blog/index.astro, [lang]/blog/[slug].astro
public/
  images/           Imágenes placeholder (reemplazar por fotos reales manteniendo el nombre de archivo)
  robots.txt
```
