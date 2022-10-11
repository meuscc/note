import fs from "node:fs";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import prettier from "prettier";
import vars from "./vars.js";
import themes from "./themes.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

export function createStyle(themeObj, prefix = "-") {
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

const light = themes.schemes.light;
const dark = themes.schemes.dark;

fs.writeFileSync(
  path.resolve(__dirname, "../../src/themes/css-themes.scss"),
  prettier.format(
    `:root{${createStyle(light, "--s")}${createStyle(vars, "--v")}}.dark{${createStyle(
      dark,
      "--s"
    )}}`,
    { parser: "scss" }
  )
);

fs.writeFileSync(
  path.resolve(__dirname, "../../src/themes/scss-themes.scss"),
  prettier.format(
    `${createStyle(vars, "$var")}${createStyle(light, "$light")}${createStyle(dark, "$dark")}`,
    { parser: "scss" }
  )
);
