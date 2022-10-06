import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
  transformerCompileClass,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      cdn: "https://esm.sh/",
    }),
  ],
  transformers: [
    transformerCompileClass(),
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    darkMode: "media", // or 'class'
    colors: {
      primary: {
        main: "var(--primary-main)",
        light: "var(--primary-main)",
        dark: "var(--primary-main)",
        contrastText: "var(--primary-main)",
      },
      common: {
        black: "var(--primary-main)",
        white: "var(--primary-main)",
      },
      secondary: {
        main: "var(--primary-main)",
        light: "var(--primary-main)",
        dark: "var(--primary-main)",
        contrastText: "var(--primary-main)",
      },
      error: {
        main: "var(--primary-main)",
        light: "var(--primary-main)",
        dark: "var(--primary-main)",
        contrastText: "var(--primary-main)",
      },
      warning: {
        main: "var(--primary-main)",
        light: "var(--primary-main)",
        dark: "var(--primary-main)",
        contrastText: "var(--primary-main)",
      },
      info: {
        main: "var(--primary-main)",
        light: "var(--primary-main)",
        dark: "var(--primary-main)",
        contrastText: "var(--primary-main)",
      },
      success: {
        main: "var(--primary-main)",
        light: "var(--primary-main)",
        dark: "var(--primary-main)",
        contrastText: "var(--primary-main)",
      },
      grey: {
        "50": "var(--primary-main)",
        "100": "var(--primary-main)",
        "200": "var(--primary-main)",
        "300": "var(--primary-main)",
        "400": "var(--primary-main)",
        "500": "var(--primary-main)",
        "600": "var(--primary-main)",
        "700": "var(--primary-main)",
        "800": "var(--primary-main)",
        "900": "var(--primary-main)",
        A100: "var(--primary-main)",
        A200: "var(--primary-main)",
        A400: "var(--primary-main)",
        A700: "var(--primary-main)",
      },
      text: {
        primary: "var(--primary-main)",
        secondary: "var(--primary-main)",
        disabled: "var(--primary-main)",
        icon: "var(--primary-main)",
      },
      divider: "var(--primary-main)",
      background: {
        paper: "var(--primary-main)",
        default: "var(--primary-main)",
      },
      action: {
        active: "var(--primary-main)",
        hover: "var(--primary-main)",
        hoverOpacity: "var(--primary-main)",
        selected: "var(--primary-main)",
        selectedOpacity: "var(--primary-main)",
        disabled: "var(--primary-main)",
        disabledBackground: "var(--primary-main)",
        disabledOpacity: "var(--primary-main)",
        focus: "var(--primary-main)",
        focusOpacity: "var(--primary-main)",
        activatedOpacity: "var(--primary-main)",
      },
    },
  },
  rules: [["custom-rule", { color: "red" }]],
  shortcuts: {
    f: "flex",
    "il-f": "inline-flex",

    fjs: "justify-start",
    fjc: "justify-center",
    fje: "justify-end",
    fjb: "justify-between",
    fja: "justify-around",
    fjv: "justify-around",

    fas: "items-start",
    fac: "items-center",
    fae: "items-end",
    fab: "items-baseline",
    faq: "items-stretch",

    fcc: "justify-center items-center",
  },
});
