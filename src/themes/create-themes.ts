import variables from "./variables";
import themes from "./themes";
import { unsafeCSS } from "lit";

export function createStyle(themeObj: any, prefix = "-") {
  let output = "";
  Object.keys(themeObj).forEach((key) => {
    if (typeof themeObj[key] === "object") {
      output += createStyle(themeObj[key], `${prefix}-${key}`);
    } else if (typeof themeObj[key] !== "function") {
      const appendPx =
        (key.toLocaleLowerCase().indexOf("size") > -1 &&
          `${themeObj[key]}`.indexOf("rem") === -1) ||
        key.toLocaleLowerCase().indexOf("radius") > -1;
      const appendMs = `${prefix}-${key}`.indexOf("transitions-duration") > -1;
      if (appendPx) {
        output += `${prefix}-${key}:${themeObj[key]}${appendPx ? "px" : ""};\n`;
      } else if (appendMs) {
        output += `${prefix}-${key}:${themeObj[key]}${appendMs ? "ms" : ""};\n`;
      } else {
        output += `${prefix}-${key}:${themeObj[key]};\n`;
      }
    }
  });

  return output;
}

export default function createThemes() {
  return unsafeCSS(
    `:root{${createStyle(variables, "--var")}}.light{${createStyle(
      themes.light,
      "--plt"
    )}}.dark{${createStyle(themes.dark, "--plt")}}`
  );
}
