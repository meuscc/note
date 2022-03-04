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

export function createStyle(themeObj: any, prefix = "--") {
  let output = "";
  Object.keys(themeObj).forEach((key) => {
    if (typeof themeObj[key] === "object") {
      output += createStyle(themeObj[key], `${prefix}-${key}`);
    } else if (typeof themeObj[key] !== "function") {
      output += `${prefix}-${key}:${themeObj[key]};`;
    }
  });

  return output;
}
