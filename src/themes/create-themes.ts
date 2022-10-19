import { hexFromArgb } from "@material/material-color-utilities";

export function createCssVariables(
  themeObj: any,
  prefix = "--scheme",
  transform = hexFromArgb
) {
  let output = "";
  Object.keys(themeObj).forEach((key) => {
    if (typeof themeObj[key] === "object") {
      output += createCssVariables(themeObj[key], `${prefix}-${key}`, transform);
    } else {
      output += `${prefix}-${key}:${transform(themeObj[key])};\n`;
    }
  });

  return output;
}
