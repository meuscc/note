const TOML = require("@ltd/j-toml");
const qs = require("qs");
const path = require("node:path");

// 读取文档 Meta
function frontMatter(text) {
  const split = text.split("---");
  return text.slice(0, 3) === "---" ? [split[2], TOML.parse(split[1])] : [text];
}

// 读取文档 Katex
function transformKatex(text) {
  return (
    text
      .replace(/\\\[((.|\s)*?)\\]/g, function ($1, $2) {
        return `<m-b m='${$2.trim().replace(/\\/g, "\\\\\\\\")}'></m-b>`;
      })
      // 行级公式
      .replace(/\\\(((.|\s)*?)\\\)/g, function ($1, $2) {
        return (
          "<m-i>" + $2.replace(/\$/g, "").replace(/\\/g, "\\\\\\\\") + "</m-i>"
        );
      })
  );
}

// 读取文档 Code
function transformCode(text, base) {
  return text.replace(/```((.|\s)*?)```/g, function ($1, $2) {
    const f = $2.trim();
    const meta = f.split("\n")[0];
    const metaList = meta.split("?");
    const lang = metaList[0];
    const query = metaList[1];
    const queryObj = qs.parse(query);

    if (queryObj.src) {
      queryObj.src = path.isAbsolute(queryObj.src)
        ? queryObj.src
        : path.resolve(path.dirname(base), queryObj.src);
    }

    const res = `${lang}?${qs.stringify(queryObj)}`;
    return `\`${$1.replace(meta, res)}\``;
  });
}

module.exports = function (content) {
  return transformKatex(transformCode(content, this.resourcePath));
};
