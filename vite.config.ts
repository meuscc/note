import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

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
  plugins: [react()],
  build: {
    target: ["es2020"],
  },
  optimizeDeps: {
    esbuildOptions: {
      target: ["es2020"],
    },
  },
});
