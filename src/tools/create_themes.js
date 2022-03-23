import fs from "node:fs";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createTheme } from "@mui/material";

const __dirname = dirname(fileURLToPath(import.meta.url));

const { palette: light, ...variables } = createTheme({
  palette: {
    mode: "light",
  },
});

const { palette: dark } = createTheme({
  palette: {
    mode: "dark",
  },
});

const themes = { light, dark };

function createThemes(themeObj, output = {}, prefix = "--") {
  Object.keys(themeObj).forEach((key) => {
    if (typeof themeObj[key] === "object") {
      createThemes(themeObj[key], output, `${prefix}-${key}`);
    } else {
      output[`${prefix}-${key}`] = themeObj[key];
    }
  });

  return output;
}

fs.writeFileSync(
  path.resolve(__dirname, "../src/themes/variables.ts"),
  `export const variables = ${JSON.stringify(variables)}`
);

fs.writeFileSync(
  path.resolve(__dirname, "../src/themes/themes.ts"),
  `export const themes = ${JSON.stringify(themes)}`
);
