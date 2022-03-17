import { defineConfig } from "vite";
import { resolve } from "node:path";
import viteMarkdownPlugin from "./tools/vite-plugin-md";
import { viteHtmlPlugin } from "./tools/vite-plugin-html";
import fg from "fast-glob";

const entries = fg.sync(["pages/**/*.html"], { dot: true });

const input: any = {};

entries.forEach((entry) => {
  input[entry] = resolve(__dirname, entry);
});

const myPlugin = () => {
  let server;
  return {
    name: "configure-server",
    configureServer(_server) {
      server = _server;
    },
    transform(code, id) {
      console.log(id);

      if (server) {
        // use server...
      }
    },
  };
};

export default defineConfig({
  plugins: [myPlugin(), viteMarkdownPlugin(), viteHtmlPlugin()],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        ...input,
      },
    },
  },
  server: {
    port: 4000,
  },
});
