import { defineCollection, z } from "astro:content";
import { rssSchema } from "@astrojs/rss";

const blog = defineCollection({
    schema: rssSchema,
});

export const collections = { blog };
