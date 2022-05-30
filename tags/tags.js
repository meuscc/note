export function html(strings, ...params) {
  let result = "";
  for (let i = 0; i < strings.length; i++) {
    result += strings[i] + (params[i] ?? "");
  }

  return result;
}

export function svg(strings, ...params) {
  let result = "";
  for (let i = 0; i < strings.length; i++) {
    result += strings[i] + (params[i] ?? "");
  }

  return result;
}

export function css(strings, ...params) {
  let result = "";
  for (let i = 0; i < strings.length; i++) {
    result += strings[i] + (params[i] ?? "");
  }

  return result;
}
