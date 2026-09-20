import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z
    .object({
      title: z.string(),
      date: z.union([z.string(), z.date(), z.number()]).optional(),
      author: z.string().optional(),
      layout: z.string().optional(),
      type: z.string().optional(),
      category: z.string().optional(),
      tags: z.any().optional(),
      slug: z.string().optional(),
      event: z.string().optional(),
      place: z.string().optional(),
      link: z.string().optional(),
      sitemap: z.any().optional(),
    })
    .passthrough(),
});

export const collections = { posts };
