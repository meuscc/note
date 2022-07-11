import { createThemes } from "../themes/themes";
import createReboot from "/src/styles/reboot";
import createThemeStyle from "/src/styles/theme";
import { css, unsafeCSS } from "lit";

// @ts-ignore
document.adoptedStyleSheets = [
  css`
    ${unsafeCSS(createThemes())}
  `.styleSheet,
  createReboot().styleSheet,
  createThemeStyle().styleSheet,
];

export default {};
