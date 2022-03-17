import fs from "node:fs";
import { resolve } from "node:path";
import TOML from "@ltd/j-toml";

function frontMatter(text: string): [string, any?] {
  const split = text.split("---");
  return text.slice(0, 3) === "---" ? [split[2], TOML.parse(split[1])] : [text];
}

const tpl = fs
  .readFileSync(resolve(__dirname, "../src/layouts/main.html"), "utf-8")
  .toString();

export function viteHtmlPlugin() {
  return {
    name: "html-transform",
    // @ts-ignore
    transformIndexHtml(html: any, id: any) {
      const meta = frontMatter(html);
      console.log(meta[1]);
      return tpl.replace(/<slot>(.*?)<\/slot>/, meta[0]);
    },
  };
}
