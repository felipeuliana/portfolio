import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    description: z.string(),
    isDraft: z.boolean().default(true),
    pubDate: z.date(),
    tags: z.array(z.string()).default(['General']),
    title: z.string(),
    // Allows you to link a project directly to an article
    relatedProject: z.string().optional(), 
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    description: z.string().max(160),
    publishDate: z.date(),
    title: z.string(), 
    // UI Metadata
    featured: z.boolean().default(false),
    status: z.enum(['draft', 'in-progress', 'published']),
    // Technical Metadata
    githubUrl: z.url().optional(),
    liveUrl: z.url().optional(),
    role: z.string(),
    stack: z.array(z.string()),
    // Optimized assets
    coverAlt: z.string(),
    coverImage: image(),
  }),
});

export const collections = {
  articles,
  projects,
};
