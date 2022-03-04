export function viteHtmlPlugin() {
  return {
    name: "html-transform",
    transformIndexHtml(html: any) {
      return html.replace(
        /<title>(.*?)<\/title>/,
        `<title>Title replaced!</title>`
      );
    },
  };
}
