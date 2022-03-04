import fs from "node:fs";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createTheme } from "@mui/material";

const __dirname = dirname(fileURLToPath(import.meta.url));

const light = createTheme({
  palette: {
    mode: "light",
  },
});

const dark = createTheme({
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
  path.resolve(__dirname, "../src/themes/md_themes.ts"),
  `export const themes = ${JSON.stringify(themes)}`
);
