import "./index.scss";

import { createStyle } from "../themes/create_theme_variables";
import { variables } from "../themes/variables";
import { themes } from "../themes/themes";

const style = document.getElementById("themes")!;

// @ts-ignore
variables.mixins = {};
// @ts-ignore
variables.breakpoints = {};

style.innerText = `:root{${createStyle(variables)}${createStyle(
  themes.light,
  "--palette"
)}}.dark{${createStyle(themes.dark, "--palette")}}`;
