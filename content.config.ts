import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    schema: z.object({
        id: z.string(),
        title: z.string(),
        publicationDate: z.coerce.date().optional(),
        updatedDate: z.coerce.date().optional(),
    }),
});

export const collections = { blog };
