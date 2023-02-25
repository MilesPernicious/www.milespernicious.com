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
		date: z.string(),
		dateUpdated: z.string().optional(),
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
		dateUpdated: z.string(),
		description: z.string(),
	})
});

const scheduleCollection = defineCollection({
	schema: z.object({
		month: z.string(),
		events: z.array(z.object({
			event: z.object({
				start: z.string().transform((startTime, ctx) => {
					const parsed = Date.parse(startTime);
					if (Number.isNaN(parsed)) {
						ctx.addIssue({
							code: z.ZodIssueCode.invalid_date,
							message: "Start Date must be a valid date string",
						});
						return z.NEVER;
					}
					return startTime;
				}),
				duration: z.string(),
				game: z.string(),
				platform: z.string(),
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
