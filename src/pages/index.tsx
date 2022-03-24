import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Tet from "../contents/langs/cpp/cpp_cheat/cpp_cheat.mdx";

export const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>c++ 概要</title>
        <meta name="description" content="c++ 简要笔记" />
      </Head>
      <div className={"book-page article heti heti--sans"}>
        <Tet></Tet>
      </div>
    </div>
  );
};

export default HomePage;
