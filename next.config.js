import mdx from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import gfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import highlight from "rehype-highlight";
import remarkMath from "remark-math";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter, gfm, remarkMath],
    rehypePlugins: [rehypeKatex, highlight],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});

export default nextConfig;
