import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Doc from "/src/contents/langs/rust/rust-cheat/rust-cheat.mdx";

export const RustCheat: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rust 概要</title>
        <meta name="description" content="Rust 简要笔记" />
      </Head>
      <div className={"book-page heti"}>
        <Doc></Doc>
      </div>
    </div>
  );
};

export default RustCheat;
