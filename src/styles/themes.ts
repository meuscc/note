import {
  argbFromHex,
  themeFromSourceColor,
  applyTheme,
  Hct,
  Theme,
  TonalPalette,
  hexFromArgb,
} from "@material/material-color-utilities";
import { css } from "lit";

const tones = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100];

export const themes = themeFromSourceColor(argbFromHex("#fedbd0"), [
  {
    name: "info",
    value: argbFromHex("#00bcd4"),
    blend: true,
  },
  {
    name: "success",
    value: argbFromHex("#4caf50"),
    blend: true,
  },
  {
    name: "warning",
    value: argbFromHex("#ff9800"),
    blend: true,
  },
]);

export function createStyle(themeObj: typeof themes.palettes, prefix = "-") {
  // console.log(themeObj);
  let output = "";

  Object.keys(themeObj).forEach((key) => {
    const p: TonalPalette = (themeObj as any)[key as any];
    tones.forEach((v) => {
      output += `--palette-${key}-${v}: ${hexFromArgb(p.tone(v))};\n`;
    });
  });

  return output;
}

function createScheme(scheme: typeof themes.schemes.light) {
  let output = "";
  // @ts-ignore
  const props = Object.keys(scheme.props);

  props.forEach((v: any) => {
    // @ts-ignore
    output += `--scheme-${v}: ${hexFromArgb(scheme[v])};\n`;
  });
  return output;
}

const a = `
:root {
${createStyle(themes.palettes)}
${createScheme(themes.schemes.light)}
}
.dark {
${createScheme(themes.schemes.dark)}
}
`;

console.log(a);
