import React, { useEffect, useState } from "react";

declare const marked: any;

export default function Md({
  children,
  c,
  l = "javascript",
}: React.PropsWithChildren<{ c?: string; l?: string }>) {
  const [content, setContent] = useState("");

  useEffect(() => {
    let trimmed = c ?? children?.toString() ?? "";

    const renderer = new marked.Renderer();

    // 读取文档 Meta
    function frontMatter(text: string): [string, any?] {
      const split = text.split("---");
      return text.slice(0, 3) === "---" ? [split[2], {}] : [text];
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
              "<m-i>" +
              $2.replace(/\$/g, "").replace(/\\/g, "\\\\\\\\") +
              "</m-i>"
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
      return marked.parse(doc, { renderer });
    }

    setContent(transform(c ?? ""));
  }, [c, children]);
  return <span dangerouslySetInnerHTML={{ __html: content }} />;
}
