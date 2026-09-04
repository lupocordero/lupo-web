import { defineCollection, z } from 'astro:content';

const langEnum = z.enum(['es', 'de', 'en']);

const faqSchema = z.object({
  q: z.string(),
  a: z.string(),
});

// NOTE: the URL slug field is named "pageSlug", NOT "slug". Astro's content
// collections treat a `slug:` frontmatter key as reserved (it overrides the
// auto-generated entry id/slug), and because several of our locations and
// services intentionally share the same slug string across languages
// (e.g. /de/food and /en/food, or palma/soller/deia/calvia which are
// identical in all three languages), using the reserved field caused
// cross-language entries to silently overwrite each other. "pageSlug" is a
// plain schema field instead, so every entry keeps its own unique id.
const baseSeo = {
  lang: langEnum,
  pageSlug: z.string(),
  seoTitle: z.string(),
  metaDescription: z.string(),
  h1: z.string(),
};

const services = defineCollection({
  type: 'content',
  schema: z.object({
    ...baseSeo,
    serviceKey: z.enum(['elopement', 'weddings', 'events', 'realestate', 'portraits', 'food']),
    subtitle: z.string(),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    gallery: z.array(z.object({ src: z.string(), alt: z.string() })).default([]),
    faqs: z.array(faqSchema).default([]),
    areas: z.array(z.string()).default([]),
  }),
});

const locations = defineCollection({
  type: 'content',
  schema: z.object({
    ...baseSeo,
    locationKey: z.enum(['palma', 'soller', 'deia', 'calvia']),
    subtitle: z.string(),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    gallery: z.array(z.object({ src: z.string(), alt: z.string() })).default([]),
    faqs: z.array(faqSchema).default([]),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    ...baseSeo,
    pageKey: z.enum(['home', 'about', 'contact']),
    subtitle: z.string().optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    ...baseSeo,
    postKey: z.enum(['family-locations', 'elopement-guide', 'what-to-bring']),
    excerpt: z.string(),
    publishDate: z.coerce.date(),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    relatedServiceKeys: z.array(z.string()).default([]),
    relatedLocationKeys: z.array(z.string()).default([]),
  }),
});

export const collections = { services, locations, pages, blog };
