import createReboot from "/src/styles/reboot";
import themes from "/src/themes/themes";
import { hexFromArgb } from "@material/material-color-utilities";
import { css, unsafeCSS } from "lit";

export default {};

let themesCss = ``;

const scheme = themes.schemes.light;
const tonal = themes.tonal.light;

console.log(themes);

Object.keys(scheme).forEach((key: any) => {
  // @ts-ignore
  const v = scheme[key];

  const main = v.main;
  const lite = v.lite;

  Object.keys(main).forEach((v) => {
    themesCss += `--scheme-${key}-main-${v}: ${hexFromArgb(main[v])};\n`;
  });

  Object.keys(lite).forEach((v) => {
    themesCss += `--scheme-${key}-lite-${v}: ${hexFromArgb(lite[v])};\n`;
  });
});

Object.keys(tonal).forEach((key: any) => {
  // @ts-ignore
  const v = tonal[key];

  console.log(v);

  Object.keys(v).forEach((u) => {
    themesCss += `--tonal-${key}-v-${u}: ${hexFromArgb(v[u])};\n`;
  });
  // themesCss += `--scheme-${key}-lite-${v}: ${hexFromArgb(lite[v])};\n`;
});

console.log(`:root${themesCss}`);

// @ts-ignore
document.adoptedStyleSheets = [
  css`
    ${unsafeCSS(`:root{${themesCss}}`)}
  `.styleSheet,
  createReboot().styleSheet,
];
