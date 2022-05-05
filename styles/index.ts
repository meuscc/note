import "./index.scss";

import { createStyle } from "../themes/create_theme_variables";
import { variables } from "../themes/variables";
import { themes } from "../themes/themes";

export function createStyles() {
  console.log(3333333333);
  const style = document.createElement("style")!;

  // @ts-ignore
  variables.mixins = {};
  // @ts-ignore
  variables.breakpoints = {};

  style.innerText = `:root{${createStyle(variables)}${createStyle(
    themes.light,
    "--palette"
  )}}.dark{${createStyle(themes.dark, "--palette")}}`;

  console.log(style);
  // document.body.classList.add("dark");

  document.head.append(style);
}
