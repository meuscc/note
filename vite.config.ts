import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import viteMarkdownPlugin from "./tools/vite-plugin-md";

export default defineConfig({
  plugins: [solidPlugin(), viteMarkdownPlugin()],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
  server: {
    port: 4000,
  },
});
