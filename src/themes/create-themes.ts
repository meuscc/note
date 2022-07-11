import { hexFromArgb, TonalPalette } from "@material/material-color-utilities";
import { themes } from "/src/themes/themes";

const tones = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100];

export function createPalettes(themeObj: typeof themes.palettes, prefix = "-") {
  let output = "";
  Object.keys(themeObj).forEach((key) => {
    const p: TonalPalette = (themeObj as any)[key as any];
    tones.forEach((v) => {
      output += `--palette-${key}-${v}: ${hexFromArgb(p.tone(v))};\n`;
    });
  });

  return output;
}

export function createScheme(scheme: typeof themes.schemes.light) {
  let output = "";
  const props = Object.keys(scheme);
  props.forEach((v: any) => {
    // @ts-ignore
    output += `--scheme-${v}: ${hexFromArgb(scheme[v])};\n`;
  });
  return output;
}
