/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.mdx?/,
      use: [
        {
          loader: "./loader.cjs",
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
