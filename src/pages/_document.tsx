import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang={"zh-CN"}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/heti/umd/heti.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/katex/dist/katex.min.js"></script>
        <script
          src="https://cdn.jsdelivr.net/npm/prismjs/prism.min.js"
          data-manual
        ></script>
        <script src="https://cdn.jsdelivr.net/npm/prismjs/components/prism-typescript.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/prismjs/components/prism-c.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/prismjs/components/prism-cpp.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/prismjs/components/prism-rust.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/prismjs/components/prism-swift.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/prismjs/components/prism-csharp.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/prismjs/components/prism-julia.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/prismjs/components/prism-python.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/heti/umd/heti-addon.min.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
