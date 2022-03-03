import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
// import WindiCSS from "vite-plugin-windicss";
import Unocss from "unocss/vite";
import presetAttributify from "@unocss/preset-attributify";
import presetIcons from "@unocss/preset-icons";
import presetUno from "@unocss/preset-uno";

export default defineConfig({
  // plugins: [solidPlugin(), WindiCSS()],
  plugins: [
    solidPlugin(),
    Unocss({
      presets: [
        presetAttributify({
          /* options */
        }),
        presetIcons({
          /* options */
        }),
        presetUno({
          /* options */
        }),
      ],
    }),
  ],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
