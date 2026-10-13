import { defineCollection, z } from 'astro:content';

const postures = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    position: z.number(),
    chineseName: z.string(),
    englishName: z.string(),
    level: z.enum(['beginner', 'intermediate', 'advanced']),
    summary: z.string(),
    bookChapters: z.array(z.string()).optional(),
    bbcEpisodes: z.array(z.number()).optional(),
    order: z.number(),
  }),
});

const episodes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    day: z.number(),
    videoId: z.string(),
    posture: z.string().optional(),
    warmup: z.string().optional(),
    cooldown: z.string().optional(),
    philosophy: z.string().optional(),
    dailyApplication: z.string().optional(),
    order: z.number(),
  }),
});

const warmups = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    chineseName: z.string().optional(),
    category: z.enum(['warmup', 'cooldown']),
    introducedIn: z.number().optional(),
    order: z.number(),
  }),
});

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    section: z.enum(['beginner', 'intermediate', 'advanced', 'application', 'reference', 'next']),
    summary: z.string(),
    order: z.number(),
  }),
});

export const collections = { postures, episodes, warmups, guides };