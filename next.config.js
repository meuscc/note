import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mdx?/,
      use: [
        {
          loader: "@mdx-js/loader",
          options: {
            remarkPlugins: [remarkGfm, [remarkToc, { heading: "目录" }]],
            rehypePlugins: [rehypeSlug],
            providerImportSource: "@mdx-js/react",
          },
        },
        "./loaders/md_loader.cjs",
      ],
    });
    return config;
  },
};

export default nextConfig;
