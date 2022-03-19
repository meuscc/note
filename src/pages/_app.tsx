import "../styles/index.scss";
import type { AppProps } from "next/app";
import Layout from "../layouts/MainLayout";
import Head from "next/head";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href={"https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css"}
          rel={"stylesheet"}
        />
        <link
          href={
            "https://cdn.jsdelivr.net/npm/highlight.js@11.5.0/styles/intellij-light.css"
          }
          rel={"stylesheet"}
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
