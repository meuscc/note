// @ts-ignore
import { marked } from "marked";
import TOML from "@ltd/j-toml";

const renderer = new marked.Renderer();

// 读取文档 Meta
function frontMatter(text: string): [string, any?] {
  const split = text.split("---");
  return text.slice(0, 3) === "---" ? [split[2], TOML.parse(split[1])] : [text];
}

// 读取文档 Katex
function transformKatex(text: string) {
  return (
    text
      .replace(/\\\[((.|\s)*?)\\]/g, function (_$1, $2) {
        return "<m-b>" + $2.trim().replace(/\\/g, "\\\\\\\\") + "</m-b>";
      })
      // 行级公式
      .replace(/\\\(((.|\s)*?)\\\)/g, function (_$1, $2) {
        return (
          "<m-i>" + $2.replace(/\$/g, "").replace(/\\/g, "\\\\\\\\") + "</m-i>"
        );
      })
  );
}

// 转换编程语言块级代码
renderer.code = function (text: string, lang: string) {
  return `<c-b l="${lang}">${text}</c-b>`;
};

marked.use({
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
});

function transform(text: string) {
  const [doc, meta] = frontMatter(transformKatex(text));
  renderer.meta = meta;
  return marked(doc, { renderer });
}

export default function viteMarkdownPlugin() {
  return {
    name: "transform-markdown",
    transform(src: string, id: string) {
      if (id.endsWith(".md")) {
        return {
          code: `export default \`${transform(src)}\``,
          map: null,
        };
      }
      return src;
    },
  };
}
