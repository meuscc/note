const MarkdownIt = require("markdown-it");
const anchor = require("markdown-it-anchor");
const toc = require("markdown-it-table-of-contents");
const TOML = require("@ltd/j-toml");

const md = MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    return `<c-b l="${lang}">${str}</c-b>`;
  },
})
  .use(anchor)
  .use(toc);

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
        return "<m-b>" + $2.trim().replace(/\\/g, "\\\\\\\\") + "</m-b>";
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
function transformCode(text) {
  return text.replace(/```((.|\s)*?)```/g, function ($1, $2) {
    // return "<c-b>" + $2.trim().replace(/`/g, "") + "</c-b>";
    // return "<c-b>" + "" + "</c-b>";
    const f = `
    function add(a, b) {
      return a + b12;
    }
    `;
    return `<c-b lang={'javascript'} c={\`${f}\`}></c-b>`;
  });
  // 行级公式
}

function transform(text) {
  // const [doc, meta] = frontMatter(transformKatex(text));
  // return md.render(doc);
  // return transformCode(transformKatex(text));
  return transformKatex(text);
}

module.exports = (content, map, meta) => {
  const html = transform(content);
  console.log(html);
  return html;
  // lang=js
  // return `import React from "react";
  //   export default function () {
  //   return React.createElement("div", {dangerouslySetInnerHTML: {__html: \`${html}\`}});
  // }`;
};
