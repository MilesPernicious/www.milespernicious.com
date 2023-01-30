/*
 * (C) Copyright 2023 Miles Pernicious
 *
 * SPDX-License-Identifier: MIT
 */

import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		subtitle: z.string().optional(),
		summary: z.string(),
		description: z.string().optional(),
		author: z.string().default('AUTHOR'),
		tags: z.array(z.string()).optional(),
		publishDate: z.string(),
		license: z.string().default('CC-BY-SA-4.0'),
		draft: z.boolean().default(false),
		featuredImage: z.object({
			src: z.string(),
			alt: z.string(),
			caption: z.string()
		}).optional(),
	})
});

export const collections = {
	'blog': blogCollection,
}
