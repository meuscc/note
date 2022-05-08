import fs from "node:fs";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createTheme } from "@mui/material";
// @ts-ignore
import prettier from "prettier";

const __dirname = dirname(fileURLToPath(import.meta.url));

const { palette: light, ...variables } = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#d4237a",
    },
  },
});

const { palette: dark } = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#d4237a",
    },
  },
});

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

// @ts-ignore
variables.mixins = {};
// @ts-ignore
variables.breakpoints = {};

fs.writeFileSync(
  path.resolve(__dirname, "../src/themes/variables.ts"),
  prettier.format(`export default ${JSON.stringify(variables)}`, {
    parser: "typescript",
  })
);

fs.writeFileSync(
  path.resolve(__dirname, "../src/themes/themes.ts"),
  prettier.format(`export default ${JSON.stringify({ light, dark })}`, {
    parser: "typescript",
  })
);

fs.writeFileSync(
  path.resolve(__dirname, "../src/themes/css-themes.scss"),
  prettier.format(
    `:root{${createStyle(light)}${createStyle(variables)}}.dark{${createStyle(
      dark
    )}}`,
    { parser: "scss" }
  )
);

fs.writeFileSync(
  path.resolve(__dirname, "../src/themes/scss-themes.scss"),
  prettier.format(
    `${createStyle(variables, "$var")}${createStyle(
      light,
      "$light"
    )}${createStyle(dark, "$dark")}`,
    { parser: "scss" }
  )
);
