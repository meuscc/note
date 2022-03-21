import { createStyle } from "../themes/create_theme_variables";
import { variables } from "../themes/variables";
import { themes } from "../themes/themes";
import createYtbBg from "/src/styles/create-ytbbg";

const style = document.createElement("style")!;

// @ts-ignore
variables.mixins = {};
// @ts-ignore
variables.breakpoints = {};

style.innerText = `:root{${createStyle(variables)}${createStyle(
  themes.light,
  "--palette"
)}}.dark{${createStyle(themes.dark, "--palette")}}`;

document.head.appendChild(style);
createYtbBg();
