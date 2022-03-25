import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  return (
    <Html lang={"zh-CN"}>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/heti/umd/heti.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/katex/dist/katex.min.js" />
        <script
          src="https://cdn.jsdelivr.net/npm/prismjs/prism.min.js"
          data-manual
        />
        <script src="https://cdn.jsdelivr.net/npm/prismjs/components/prism-typescript.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/prismjs/components/prism-c.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/prismjs/components/prism-cpp.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/prismjs/components/prism-rust.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/prismjs/components/prism-swift.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/prismjs/components/prism-csharp.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/prismjs/components/prism-julia.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/prismjs/components/prism-python.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/heti/umd/heti-addon.min.js" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
