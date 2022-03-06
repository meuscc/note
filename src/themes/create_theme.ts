export default function createTheme(
  themeObj: any,
  output: any = {},
  prefix = "--"
) {
  Object.keys(themeObj).forEach((key) => {
    if (typeof themeObj[key] === "object") {
      createTheme(themeObj[key], output, `${prefix}-${key}`);
    } else {
      output[`${prefix}-${key}`] = themeObj[key];
    }
  });

  return output;
}

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
        output += `${prefix}-${key}:${themeObj[key]}${appendPx ? "px" : ""};`;
      } else if (appendMs) {
        output += `${prefix}-${key}:${themeObj[key]}${appendMs ? "ms" : ""};`;
      } else {
        output += `${prefix}-${key}:${themeObj[key]};`;
      }
    }
  });

  return output;
}
