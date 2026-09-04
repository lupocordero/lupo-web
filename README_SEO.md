# README SEO — Lupo Photography (lupo.pm)

Estrategia SEO completa para el sitio de Lupo, fotógrafo en Mallorca. Sitio construido en **Astro 5**, estático, coste de hosting **0 €** (Cloudflare Pages o Vercel), multilingüe **ES / DE / EN**.

---

## 1. Resumen de la keyword research

La research completa con tablas por idioma (keyword, intención, volumen, dificultad, página objetivo) está en [`docs/keyword-research.md`](./docs/keyword-research.md). Resumen de las keywords principales por idioma y qué página ataca cada una:

### 🇪🇸 Español — top keywords
| Keyword | Página |
|---|---|
| fotógrafo Mallorca | `/es` |
| fotógrafo de bodas Mallorca | `/es/bodas` |
| fotógrafo de elopement Mallorca | `/es/elopeamiento` |
| fotógrafo de eventos Mallorca | `/es/eventos` |
| fotógrafo de real estate Mallorca | `/es/real-estate` |
| fotógrafo de retratos / familia Mallorca | `/es/retratos` |
| fotógrafo de comida Mallorca | `/es/comida` |
| fotógrafo en Palma / Sóller / Deià / Calvià | `/es/palma`, `/es/soller`, `/es/deia`, `/es/calvia` |

### 🇩🇪 Deutsch — Top-Keywords
| Keyword | Seite |
|---|---|
| Fotograf Mallorca | `/de` |
| Hochzeitsfotograf Mallorca | `/de/hochzeiten` |
| Elopement Mallorca Fotograf | `/de/elopement` |
| Eventfotograf Mallorca | `/de/events` |
| Immobilienfotograf Mallorca | `/de/immobilien` |
| Familienfotograf / Portraitfotograf Mallorca | `/de/portraits` |
| Foodfotograf Mallorca | `/de/food` |
| Fotograf Palma / Sóller / Deià / Calvià | `/de/palma`, `/de/soller`, `/de/deia`, `/de/calvia` |

### 🇬🇧 English — top keywords
| Keyword | Page |
|---|---|
| Mallorca photographer | `/en` |
| wedding photographer Mallorca | `/en/weddings` |
| elopement photographer Mallorca | `/en/elopeement` |
| event photographer Mallorca | `/en/events` |
| real estate photographer Mallorca | `/en/real-estate` |
| family / portrait photographer Mallorca | `/en/portraits` |
| food photographer Mallorca | `/en/food` |
| photographer in Palma / Sóller / Deià / Calvià | `/en/palma`, `/en/soller`, `/en/deia`, `/en/calvia` |

Las keywords informativas de cola larga alimentan los 3 posts del blog (9 artículos en total, 3 por idioma) — ver sección 6.

---

## 2. Cómo usar esta web para posicionar

**Estructura de contenidos** (52 páginas generadas):

- 3 homes (`/es`, `/de`, `/en`) — atacan los head terms de marca + servicio.
- 18 páginas de servicio (6 servicios × 3 idiomas) — atacan "fotógrafo de [servicio] Mallorca" en cada idioma.
- 12 páginas de ubicación (4 zonas × 3 idiomas) — atacan "fotógrafo en [zona]" y capturan búsquedas locales de quien ya sabe dónde quiere las fotos.
- 6 páginas Sobre mí / Contacto (2 × 3 idiomas).
- 9 posts de blog (3 artículos × 3 idiomas) — atacan keywords informativas de cola larga y generan enlazado interno hacia servicios y ubicaciones.

**Enlazado interno**: cada página de servicio enlaza a las ubicaciones donde se realiza ese servicio; cada página de ubicación menciona los servicios que se hacen allí; cada post de blog enlaza a 1-2 páginas de servicio y 1-3 de ubicación relevantes (`relatedServiceKeys` / `relatedLocationKeys` en el frontmatter). Esto reparte "link equity" interno hacia las páginas transaccionales, que son las que convierten.

**Cómo ampliar contenido más adelante**:

1. **Más artículos de blog.** Añade un nuevo archivo `.md` en `src/content/blog/<lang>/` siguiendo el esquema de `src/content/config.ts` (necesitarás añadir el nuevo `postKey` al enum del schema y al mapa `blogPostSlugs` en `src/data/routes.ts`). Ideas: "Mejor época del año para fotografiarse en Mallorca", "Elopement vs. boda pequeña: cómo elegir", "Cómo preparar tu villa para una sesión de real estate".
2. **Más ubicaciones.** Sigue el mismo patrón: añade el nuevo `locationKey` al enum en `config.ts` y `routes.ts`, y crea los 3 archivos de contenido (`es/`, `de/`, `en/`). Candidatas fuertes por volumen de búsqueda: Pollença, Alcúdia, Valldemossa, Santanyí, Portocolom.
3. **Landing pages long-tail adicionales** combinando servicio + ubicación (ej. "fotógrafo de bodas en Sóller") si el análisis de Search Console muestra demanda específica — no están generadas de inicio para no diluir el presupuesto de rastreo, pero el patrón de contenido (frontmatter + `[lang]/[slug].astro`) se puede reutilizar fácilmente.

---

## 3. Google Business Profile — checklist

El local pack de Google Maps es, a medio plazo, más importante que el ranking orgánico puro para búsquedas tipo "fotógrafo Mallorca". Checklist para crear/optimizar el perfil:

- [ ] **Nombre del negocio**: "Lupo Photography" (evita añadir keywords al nombre — va contra las políticas de Google y puede penalizar el perfil).
- [ ] **Categoría principal**: "Fotógrafo" / "Photographer". Categorías secundarias: "Fotógrafo de bodas", "Servicio de fotografía inmobiliaria", "Fotógrafo de eventos".
- [ ] **Descripción** en los 3 idiomas (Google permite solo una descripción principal, pero puedes adaptar el texto para incluir términos en los tres idiomas de forma natural, o duplicar el perfil por mercado si el volumen lo justifica más adelante).
- [ ] **Área de servicio**: Mallorca + añade explícitamente cada pueblo: Palma, Marratxí, Portol, Sóller, Deià, Calvià, Andratx.
- [ ] **Teléfono/WhatsApp** y **web** (lupo.pm) verificados y coincidiendo exactamente con los del sitio (consistencia NAP — Name, Address, Phone — es un factor de ranking local).
- [ ] **Subir 20-30 fotos** reales de trabajos — mezcla de las 6 categorías de servicio, para que el algoritmo entienda toda la oferta.
- [ ] **Pedir reviews** a clientes reales tras cada sesión. Plantillas de texto que puedes sugerir (cuanto más mencionen el tipo de sesión y el lugar, mejor para SEO local):
  - *"Lupo hizo las fotos de nuestro elopement en Deià y fue perfecto — puntual, súper majo, y las fotos en dos días."*
  - *"Wir hatten unser Hochzeitsshooting mit Lupo in Sóller, alles hat super geklappt, tolle Kommunikation auf Deutsch."*
  - *"Booked Lupo for real estate photos of our villa in Calvià — fast turnaround, great quality, highly recommend."*
- [ ] **Publicar 1 post/semana** en el perfil (Google Posts) con una foto reciente de sesión y un enlace a la página de servicio o ubicación correspondiente.
- [ ] Activar **mensajería directa** desde el perfil de Google si está disponible en tu región, como canal adicional a WhatsApp.

---

## 4. Estrategia de backlinks

Tipos de sitios a contactar, por prioridad:

1. **Wedding planners en Mallorca** — ofrecerles fotos de las bodas que cubráis juntos a cambio de mención + enlace en su web/portfolio.
2. **Fincas, hoteles y villas** que organizan bodas o elopements — proponer intercambio: fotos profesionales del espacio a cambio de que te incluyan en su lista de "fotógrafos recomendados".
3. **Agencias de real estate** (villas, alquiler vacacional) — mismo enfoque: fotos de calidad a cambio de crédito y enlace como "fotógrafo colaborador".
4. **Blogs de expatriados en Mallorca** (alemanes e ingleses — hay varios blogs y foros de la comunidad expat muy activos) — proponer un artículo invitado tipo "Cómo organizar un elopement en Mallorca siendo extranjero" con enlace a tu web.
5. **Restaurantes y proyectos gastronómicos** que fotografíes — pedir que te enlacen como "fotógrafo" en su web o redes.

**Cómo hacer outreach**: mensaje corto y personalizado (nunca plantilla genérica visible), ofreciendo valor primero (fotos gratis o a precio reducido para el primer proyecto) a cambio de mención + enlace dofollow. Para guest posts, proponer 2-3 títulos concretos en vez de pedir "escribir para tu blog" en genérico — aumenta mucho la tasa de respuesta.

---

## 5. Métricas y seguimiento

**Configuración inicial**:

1. Crea una propiedad en **Google Search Console** para `https://lupo.pm` (verificación por DNS TXT record, la opción más robusta) y sube el sitemap: `https://lupo.pm/sitemap-index.xml`.
2. Crea una propiedad de **Google Analytics 4**, añade el snippet de medición en `src/layouts/Layout.astro` (justo antes de `</head>`, o usando `@astrojs/partytown` si quieres cargarlo sin bloquear el rendimiento).
3. Añade parámetros **UTM** a los enlaces de WhatsApp para medir clics por página (ej. `https://wa.me/34600000000?text=...&utm_source=web&utm_medium=cta&utm_campaign=bodas`), o usa un evento de GA4 (`gtag('event', 'whatsapp_click', {...})`) en el componente `WhatsAppCTA.astro`.

**Qué mirar cada mes**:

- **Search Console → Rendimiento**: qué keywords traen impresiones y clics, y qué páginas concretas. Presta especial atención a keywords donde apareces en posición 5-15 — son las más fáciles de mejorar con contenido adicional o más enlaces internos.
- **Posiciones para los head terms**: "fotógrafo Mallorca" / "Fotograf Mallorca" / "Mallorca photographer" — es normal que tarden 4-6 meses en moverse; las long-tail (ej. "fotógrafo bodas pequeñas Mallorca") deberían moverse más rápido.
- **Clics en WhatsApp** (vía UTM o evento GA4) por página — te dice qué páginas convierten mejor, no solo cuáles traen tráfico.
- **Local pack**: comprueba manualmente en Google Maps (modo incógnito) tu posición para "fotógrafo Mallorca" y variantes — Search Console no reporta bien el rendimiento de Maps.

**Cómo ajustar la estrategia según resultados**: si una página de servicio tiene impresiones altas pero CTR bajo, revisa/mejora el título y meta description. Si tiene buen CTR pero posición estancada más allá de la página 1, añade más contenido único (más FAQs, más ejemplos) y refuerza enlaces internos hacia ella desde el blog.

---

## 6. Plan de contenidos — 3 a 6 meses

| Mes | Acción |
|---|---|
| 1 | Publicar el sitio, configurar GBP (ver sección 3), enviar sitemap a Search Console, empezar a pedir reviews tras cada sesión. |
| 1-2 | Outreach a 10-15 wedding planners / fincas / agencias inmobiliarias para primeros backlinks (sección 4). |
| 2 | Publicar 2 artículos de blog nuevos (en los 3 idiomas) — ideas: "Mejor época del año para fotografiarte en Mallorca", "Real estate: cómo preparar tu villa para la sesión de fotos". |
| 3 | Añadir 1-2 páginas de ubicación nuevas si Search Console muestra demanda (Pollença, Valldemossa, Alcúdia). |
| 3-4 | Publicar 2 artículos más de blog + revisar qué páginas de servicio necesitan más FAQs según preguntas reales de clientes. |
| 4-5 | Campaña de reviews más activa (objetivo: 15-20 reviews en Google Business Profile). |
| 5-6 | Revisar Search Console: identificar las 5 keywords con más impresiones pero peor posición, y reforzarlas con contenido + enlaces internos. |

**Objetivos de tráfico y consultas**:

- Mes 1-2: sitio indexado, primeras impresiones en Search Console, primeras reviews.
- Mes 3: tráfico orgánico visible (aunque bajo), primeras consultas orgánicas.
- Mes 4-6: objetivo de **10+ consultas/mes** combinando tráfico orgánico + Google Maps (local pack) + backlinks de partners (wedding planners, fincas, agencias).

---

## 7. Despliegue

### Cloudflare Pages (recomendado, gratis)

1. Sube este proyecto a un repositorio de GitHub/GitLab.
2. En Cloudflare Pages → "Create a project" → conecta el repositorio.
3. Configuración de build:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Añade el dominio `lupo.pm` (comprado en Hostinger) en Cloudflare Pages → "Custom domains", y actualiza los nameservers o los registros DNS en Hostinger según las instrucciones de Cloudflare.

### Vercel (alternativa, gratis)

1. Sube el proyecto a GitHub/GitLab.
2. En Vercel → "New Project" → importa el repositorio (Vercel detecta Astro automáticamente).
3. Build command: `npm run build` · Output directory: `dist`.
4. Añade `lupo.pm` en Vercel → Settings → Domains, y apunta el DNS desde Hostinger según las instrucciones de Vercel.

### Local

```bash
npm install
npm run dev      # servidor de desarrollo en http://localhost:4321
npm run build    # genera el sitio estático en /dist
npm run preview  # sirve /dist localmente para comprobar el build de producción
```

---

Ver también [`CONFIG.md`](./CONFIG.md) para cambiar WhatsApp, email, Instagram y el endpoint del formulario de contacto.
