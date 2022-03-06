import "./index.scss";
import themes from "../themes/themes";
import { createStyle } from "../themes/create_theme";

const style = document.getElementById("themes")!;

// @ts-ignore
themes.light.mixins = {};
// @ts-ignore
themes.light.breakpoints = {};
// @ts-ignore
themes.dark.mixins = {};
// @ts-ignore
themes.dark.breakpoints = {};

style.innerText = `:root{${createStyle(themes.light)}}.dark{${createStyle(
  themes.dark
)}}`;
