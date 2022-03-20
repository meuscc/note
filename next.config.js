import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import { remarkMdxCodeMeta } from "remark-mdx-code-meta";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.mdx?/,
      use: [
        {
          loader: "@mdx-js/loader",
          options: {
            remarkPlugins: [
              remarkGfm,
              [remarkToc, { heading: "目录" }],
              remarkMdxCodeMeta,
            ],
            rehypePlugins: [],
            // providerImportSource: "@mdx-js/react",
          },
        },
        "./loaders/md_loader.cjs",
      ],
    });
    return config;
  },
};

export default nextConfig;
