import { hexFromArgb } from "@material/material-color-utilities";

export function createCssVariables(themeObj: any, prefix = "--scheme") {
  let output = "";
  Object.keys(themeObj).forEach((key) => {
    if (typeof themeObj[key] === "object") {
      output += createCssVariables(themeObj[key], `${prefix}-${key}`);
    } else {
      output += `${prefix}-${key}:${hexFromArgb(themeObj[key])};\n`;
    }
  });

  return output;
}
