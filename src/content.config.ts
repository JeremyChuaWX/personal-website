import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const projectSchema = z.object({
    name: z.string().min(1),
    description: z.string(),
    links: z.array(z.string()),
    slug: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()),
});

export type Project = z.infer<typeof projectSchema>;

const projects = defineCollection({
    loader: glob({
        base: "./content/projects/",
        pattern: "*.md",
    }),
    schema: projectSchema,
});

export const postSchema = z.object({
    name: z.string().min(1),
    description: z.string(),
    links: z.array(z.string()),
    slug: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()),
});

export type Post = z.infer<typeof postSchema>;

const posts = defineCollection({
    loader: glob({
        base: "./content/posts/",
        pattern: "*.md",
    }),
    schema: postSchema,
});

export const collections = {
    projects,
    posts,
};
