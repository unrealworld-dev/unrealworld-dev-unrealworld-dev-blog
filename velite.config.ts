import { defineConfig, defineCollection, s } from 'velite'
import rehypeslug from "rehype-slug"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeAutolinkHeadings from "rehype-autolink-headings"


// `s` is extended from Zod with some custom schemas,
// you can also import re-exported `z` from `velite` if you don't need these extension schemas.

const computedFields = <T extends { slug: string }>(data: T) => ({
    ...data,
    slugAsParams: data.slug.split("/").slice(1).join("/"),
})

const posts = defineCollection({
    name: "Post",
    pattern: "blog/**/*.mdx",
    schema: s.object({
        slug: s.path(),
        filename: s.string(),
        title: s.string().max(99),
        description: s.string().max(999).optional(),
        date: s.isodate(),
        cover: s.image().optional(),
        published: s.boolean().default(true),
        content: s.mdx()
        // 이미지 추가필요
    })
        .transform(computedFields),
})

export default defineConfig({
    root: "content",
    output: {
        data: ".velite",
        assets: "public/static",
        base: "/static/",
        name: "[name]-[hash:6].[ext]",
        clean: true,
    },
    collections: { posts },
    mdx: {
        rehypePlugins: [
            rehypeslug,
            [rehypePrettyCode, { theme: "github-dark" }],
            [rehypeAutolinkHeadings, {
                behavior: "wrap",
                properties: {
                    className: ["subheading-anchor"],
                    ariaLabel: "Link to section",
                },
            }],
        ],
        remarkPlugins: [],
    },
})