import Markdown from "vite-plugin-md";

export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [
        { src: "https://cdn.jsdelivr.net/npm/prismjs@1.28.0/prism.min.js" },
        {
          src: "https://cdn.jsdelivr.net/npm/prismjs@1.28.0/components/prism-c.min.js",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/prismjs@1.28.0/components/prism-cpp.min.js",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/prismjs@1.28.0/components/prism-go.min.js",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/prismjs@1.28.0/components/prism-python.min.js",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/prismjs@1.28.0/components/prism-julia.min.js",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/prismjs@1.28.0/components/prism-rust.min.js",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/prismjs@1.28.0/components/prism-dart.min.js",
        },
        {
          src: "https://unpkg.com/shiki",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/modern-normalize@1.1.0/modern-normalize.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/prismjs@1.28.0/themes/prism.min.css",
        },
      ],
    },
  },
  vite: {
    plugins: [Markdown()],
  },
  buildModules: ["@pinia/nuxt"],
});
