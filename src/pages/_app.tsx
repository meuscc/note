import "../styles/index.scss";
// @ts-ignore
import qs from "qs";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import React, { useEffect } from "react";

import Layout from "../layouts/MainLayout";

function App({ Component, pageProps }: AppProps) {
  const components = {
    code: function Code(props: any) {
      const split = props.className.split("?");
      const lang = split[0].replace("language-", "");
      const meta = qs.parse(split[1]);
      if (meta.src) {
        const rPath = meta.src.split("contents")[1];
        const codeContent = require(`!!raw-loader!/src/contents` +
          rPath.replaceAll("\\", "/")).default;
        return <c-b l={lang} c={codeContent}></c-b>;
      }
      return <c-b l={lang} c={props.children}></c-b>;
    },
    pre: function Pre(props: any) {
      return props.children;
    },
  };

  useEffect(() => {
    // import("/src/styles/index");
    import("/src/elements/index");
  }, []);

  return (
    <MDXProvider components={components}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  );
}

export default App;
