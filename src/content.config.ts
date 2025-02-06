import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
    loader: glob({
        base: "./content/projects/",
        pattern: "*.md",
    }),
    schema: z.object({
        name: z.string().min(1),
        description: z.string(),
        links: z.array(z.string()),
        slug: z.string(),
        createdAt: z.coerce.date(),
        updatedAt: z.coerce.date().optional(),
        tags: z.array(z.string()),
    }),
});

const posts = defineCollection({
    loader: glob({
        base: "./content/posts/",
        pattern: "*.md",
    }),
    schema: z.object({
        name: z.string().min(1),
        description: z.string(),
        links: z.array(z.string()),
        slug: z.string(),
        createdAt: z.coerce.date(),
        updatedAt: z.coerce.date().optional(),
        tags: z.array(z.string()),
    }),
});

export const collections = {
    projects,
    posts,
};
