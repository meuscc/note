import "./router/router";

import {
  argbFromHex,
  themeFromSourceColor,
  applyTheme,
  Hct,
} from "@material/material-color-utilities";

// Get the theme from a hex color
const theme = themeFromSourceColor(argbFromHex("#ffffdbcf"), [
  {
    name: "info",
    value: argbFromHex("#ffff1493"),
    blend: true,
  },
  {
    name: "success",
    value: argbFromHex("#ffff1493"),
    blend: true,
  },
  {
    name: "warning",
    value: argbFromHex("#ffff1493"),
    blend: true,
  },
]);

console.log(theme.schemes.light.primary);
const color = Hct.fromInt(theme.schemes.light.primary);
console.log(color.toInt());

// Print out the theme as JSON
console.log(JSON.stringify(theme, null, 2));

// Check if the user has dark mode turned on
const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Apply the theme to the body by updating custom properties for material tokens
applyTheme(theme, { target: document.body, dark: systemDark });
