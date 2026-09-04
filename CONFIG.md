# Configuración rápida — Lupo Photography (lupo.pm)

Todos los datos de contacto placeholder viven en **un único archivo**:

```
src/data/site.ts
```

Ábrelo y edita el objeto `SITE` al principio del archivo:

```ts
export const SITE = {
  brand: 'Lupo Photography',
  domain: 'lupo.pm',
  url: 'https://lupo.pm',
  whatsappNumber: '+34 600 000 000',       // ← cambia aquí
  whatsappLink: 'https://wa.me/34600000000', // ← y aquí (mismo número, sin +, sin espacios)
  email: 'hola@lupo.pm',                    // ← cambia aquí
  instagram: '@lupo.mallorca',              // ← cambia aquí
  instagramUrl: 'https://instagram.com/lupo.mallorca', // ← y aquí
  ...
};
```

Ese objeto se usa en el header, footer, botones de WhatsApp, página de contacto y todos los schemas JSON-LD (`ProfessionalService`, `ContactPoint`) — cambiándolo ahí se actualiza en **todo el sitio** a la vez.

## WhatsApp

Hay también algunos enlaces de WhatsApp escritos directamente dentro del texto de las páginas de servicio, ubicación y blog (los que aparecen como `[escríbeme por WhatsApp](https://wa.me/34600000000)` dentro del markdown). Si cambias el número, busca y reemplaza `34600000000` en todo el proyecto:

```bash
grep -rl "34600000000" src/content | xargs sed -i 's/34600000000/TUNUEVONUMERO/g'
```

## Formulario de contacto

El formulario en `/contacto`, `/kontakt`, `/contact` actualmente envía por `mailto:` (abre el cliente de correo del usuario). Está pensado como placeholder funcional de coste cero. Para usar **Formspree** (gratis hasta 50 envíos/mes) en su lugar:

1. Crea una cuenta en [formspree.io](https://formspree.io) y un formulario nuevo.
2. Abre `src/pages/[lang]/[slug].astro`, busca el comentario `<!-- Formspree placeholder -->` y cambia:
   ```html
   <form action="https://formspree.io/f/TU_ID_DE_FORM" method="POST" class="space-y-4">
   ```
   (elimina el `mailto:` y el `enctype="text/plain"`).

## Dominio de producción

El dominio está definido en `astro.config.mjs`, en la constante `SITE_URL`. Si cambias de dominio, actualízalo ahí — se usa para generar el sitemap, los canonicals y las URLs absolutas de Open Graph.

## Imágenes

Todas las imágenes del sitio están en `public/images/` como **placeholders generados** (un fondo de color con el nombre del archivo escrito encima), listos para que sustituyas cada uno por una foto real con el mismo nombre de archivo — así no tienes que tocar ningún código, solo reemplazar el archivo. Los nombres ya están optimizados para SEO (palabras clave + "mallorca" + número), así que consérvalos tal cual al sustituir las fotos.

## Despliegue

Ver instrucciones completas en `README_SEO.md`, sección "Despliegue".
