import "./index.scss";
import themes from "../themes/themes";
import { createStyle } from "../themes/create_theme";

const style = document.getElementById("themes")!;

style.innerText = `:root{${createStyle(themes.light)}}`;
