import path from "node:path";
import { defineConfig } from "vite";

import Unocss from "unocss/vite";

export default defineConfig({
  server: {
    port: 4000,
    watch: {
      ignored: [path.resolve(__dirname, ".idea/**/*")],
    },
  },
  resolve: {
    alias: {
      "/src/": `${path.resolve(__dirname, "src")}/`,
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    Unocss({
      mode: "shadow-dom",
    }),
  ],
  build: {
    target: ["es2022"],
  },
  optimizeDeps: {
    esbuildOptions: {
      target: ["es2022"],
    },
  },
});
