import { defineConfig } from "vite";
// @ts-ignore
import viteMarkdownPlugin from "./tools/vite-plugin-md";

export default defineConfig({
  plugins: [viteMarkdownPlugin()],

  server: {
    port: 4000,
  },
});
