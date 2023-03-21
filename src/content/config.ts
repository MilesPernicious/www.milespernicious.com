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
		description: z.string().min(50).max(160),
		author: z.string().default('AUTHOR'),
		tags: z.array(z.string()).optional(),
		date: z.coerce.date(),
		dateUpdated: z.coerce.date().optional(),
		license: z.string().default('CC-BY-SA-4.0'),
		draft: z.boolean().default(false),
		featuredImage: z.object({
			src: z.string(),
			alt: z.string(),
			caption: z.string()
		}).optional(),
	})
});

const legalCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		dateUpdated: z.coerce.date(),
		description: z.string(),
	})
});

const scheduleCollection = defineCollection({
	schema: z.object({
		month: z.string(),
		events: z.array(z.object({
			event: z.object({
				start: z.coerce.date(),
				duration: z.string(),
				game: z.string(),
				platform: z.array(z.string()),
				plan: z.string(),
			}),
		})),
	})
});

export const collections = {
	'blog': blogCollection,
	'legal': legalCollection,
	'schedule': scheduleCollection,
}
