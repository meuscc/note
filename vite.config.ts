import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";
import pages from "vite-plugin-pages";

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ["**/*.svg", "**/*.png", "**/*.jpg", "**/*.jpeg"],
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
      "@/": `${path.resolve(__dirname, "src")}/`,
      "/src/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),
    pages({
      extensions: ["vue", "md"],
    }),
  ],
});
