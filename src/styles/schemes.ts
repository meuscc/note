import { hexFromArgb } from "@material/material-color-utilities";
import { css, unsafeCSS } from "lit";
import themes from "/src/themes/themes";
import { createCssVariables } from "/src/themes/create-themes";

export default function createSchemes() {
  return css`
    :root {
      ${unsafeCSS(createCssVariables(themes.schemes.light))}
      ${unsafeCSS(createCssVariables(themes.variables, "--var", (v) => v + "px"))}
    }
    .dark {
      ${unsafeCSS(createCssVariables(themes.schemes.dark))}
    }
  `;
}
