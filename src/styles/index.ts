import createThemes from "/src/themes/create-themes";
import createReboot from "/src/styles/reboot";
import * as themes from "/src/styles/themes";

console.log(themes);

// @ts-ignore
document.adoptedStyleSheets = [
  createThemes().styleSheet,
  createReboot().styleSheet,
];

export default {};
