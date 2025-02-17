import type { NextConfig } from "next";

import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeslug from "rehype-slug"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx']
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
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
  },
})

export default withMDX(nextConfig);
