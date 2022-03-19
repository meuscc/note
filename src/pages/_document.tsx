import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang={"zh-CN"}>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/katex/dist/katex.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/prismjs/themes/prism.min.css"
          rel="stylesheet"
        />
        <script src="https://cdn.jsdelivr.net/npm/marked/lib/marked.umd.min.js"></script>{" "}
        <script src="https://cdn.jsdelivr.net/npm/katex/dist/katex.min.js"></script>{" "}
        <script src="https://cdn.jsdelivr.net/npm/prismjs/prism.min.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
