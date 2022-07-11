import { css, unsafeCSS } from "lit";
import { hexFromArgb } from "@material/material-color-utilities";
import { themes } from "/src/themes/themes";

export type SchemeColor =
  | "primary"
  | "secondary"
  | "tertiary"
  | "info"
  | "warning"
  | "success"
  | "error"
  | "neutral"
  | "neutralVariant";

const schemeColors: SchemeColor[] = [
  "primary",
  "secondary",
  "tertiary",
  "info",
  "success",
  "warning",
  "secondary",
  "error",
  // "neutral",
  // "neutralVariant",
];

export default function createThemeStyle() {
  // language=css
  return css`
    :root {
      ${unsafeCSS(f())}
    }
    .dark {
      ${unsafeCSS(f2())}
    }
  `;
}

export function f() {
  return schemeColors
    .map((color) => {
      return `
      --${color}-default: ${hexFromArgb(themes.palettes[color].tone(40))};
      --${color}-hover: ${hexFromArgb(themes.palettes[color].tone(30))};
      --${color}-active: ${hexFromArgb(themes.palettes[color].tone(20))};
      --${color}-disabled: ${hexFromArgb(themes.palettes[color].tone(90))};
      --${color}-on-default: ${hexFromArgb(themes.palettes[color].tone(95))};
      --${color}-on-disabled: ${hexFromArgb(themes.palettes[color].tone(80))};
      
      --${color}-light-default: ${hexFromArgb(themes.palettes[color].tone(90))};
      --${color}-light-hover: ${hexFromArgb(themes.palettes[color].tone(80))};
      --${color}-light-active: ${hexFromArgb(themes.palettes[color].tone(70))};
      --${color}-light-disabled: ${hexFromArgb(themes.palettes[color].tone(10))}
      --${color}-light-on-default: ${hexFromArgb(
        themes.palettes[color].tone(90)
      )};
      --${color}-light-on-disabled: ${hexFromArgb(
        themes.palettes[color].tone(90)
      )};
      ;
      
      `;
    })
    .reduce((a, b) => a + b, "");
}

export function f2() {
  return schemeColors
    .map((color) => {
      return `
      --${color}-default: ${hexFromArgb(themes.palettes[color].tone(80))};
      --${color}-hover: ${hexFromArgb(themes.palettes[color].tone(90))};
      --${color}-active: ${hexFromArgb(themes.palettes[color].tone(95))};
      --${color}-disabled: ${hexFromArgb(themes.palettes[color].tone(40))};
      --${color}-on-default: ${hexFromArgb(themes.palettes[color].tone(5))};
      --${color}-on-disabled: ${hexFromArgb(themes.palettes[color].tone(60))};
           
      --${color}-light: ${hexFromArgb(themes.palettes[color].tone(10))};
      --${color}-light-hover: ${hexFromArgb(themes.palettes[color].tone(20))};
      --${color}-light-active: ${hexFromArgb(themes.palettes[color].tone(30))};
      --${color}-light-disabled: ${hexFromArgb(themes.palettes[color].tone(10))}
      --${color}-light-contrast: ${hexFromArgb(
        themes.palettes[color].tone(90)
      )};
      ;
      
      `;
    })
    .reduce((a, b) => a + b, "");
}
