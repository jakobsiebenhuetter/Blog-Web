import {defineCollection} from 'astro:content';

import {glob, file} from 'astro/loaders';

import {z} from 'astro/zod'

const blog = defineCollection({
    loader: glob({base: './src/assets/data/blog/articles', pattern: '*.md'}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.string().optional(),
        updatedDate: z.string().optional(),
    })
});

export const collections = {blog};