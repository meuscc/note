import createThemes from "/src/themes/create-themes";
import createReboot from "/src/styles/reboot";

// @ts-ignore
document.adoptedStyleSheets = [
  createThemes().styleSheet,
  createReboot().styleSheet,
];

export default {};
