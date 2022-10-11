import { resolve } from "node:path";

import {
  transformerDirectives,
  transformerVariantGroup,
  transformerCompileClass,
} from "unocss";

export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/blurhash@2.0.2/dist/index.js",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/modern-normalize@1.1.0/modern-normalize.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,600,700,800&display=swap",
        },
      ],
    },
  },
  srcDir: "src",
  alias: {
    "/src": resolve(__dirname, "./src"),
  },
  vite: {},
  buildModules: ["@pinia/nuxt", "@unocss/nuxt"],
  unocss: {
    // presets
    uno: true,
    icons: true,
    attributify: true,

    // core options
    shortcuts: [],
    rules: [],
    transformers: [
      transformerCompileClass(),
      transformerDirectives(),
      transformerVariantGroup(),
    ],
    theme: {
      breakpoints: {
        sm: "0px",
        md: "834px",
        lg: "1200px",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        roboto: ["roboto", "serif"],
      },
      colors: {
        primary: {
          DEFAULT: "var(--s-primary-main)",
          dark: "var(--s-primary-dark)",
          light: "var(--s-primary-light)",
        },
        tertiary: {
          DEFAULT: "var(--s-tertiary-main)",
          dark: "var(--s-tertiary-dark)",
          light: "var(--s-tertiary-light)",
        },
        t: {
          DEFAULT: "var(--s-text-main)",
          p5y: "var(--s-text-main)",
          middle: "var(--s-text-middle)",
          light: "var(--s-text-light)",
        },
      },
    },
  },
});
