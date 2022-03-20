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
        <script src="https://cdn.jsdelivr.net/npm/katex/dist/katex.min.js"></script>
        {/*<script src="https://cdn.jsdelivr.net/npm/prismjs/prism.min.js"></script>*/}
        {/*<script src="https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-typescript.min.js"></script>*/}
        {/*<script src="https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-c.min.js"></script>*/}
        {/*<script src="https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-cpp.min.js"></script>*/}
        {/*<script src="https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-rust.min.js"></script>*/}
        {/*<script src="https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-swift.min.js"></script>*/}
        {/*<script src="https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-csharp.min.js"></script>*/}
        {/*<script src="https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-julia.min.js"></script>*/}
        {/*<script src="https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-python.min.js"></script>*/}
        <script src="https://cdn.jsdelivr.net/npm/@iconify/iconify@2.1.2/dist/iconify.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/heti@0.9.2/umd/heti-addon.min.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
