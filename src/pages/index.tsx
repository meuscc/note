import React, { useEffect, useRef } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Tet from "../contents/langs/cpp/cpp-cheat/cpp-cheat.mdx";
import createNavs from "/src/sections/topbar/create-navs";

export const HomePage: NextPage = () => {
  const domRef = useRef(null);
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    console.log("是剖也");
    const navs = {
      name: "",
      children: createNavs(),
    };

    // function createMenu(navs: typeof navs) {

    // }

    console.log(navs);
  }, []);
  return (
    <div>
      <Head>
        <title>c++ 概要</title>
        <meta name="description" content="c++ 简要笔记" />
      </Head>
      <div className={"book-page article heti heti--sans"}>
        <div ref={domRef}></div>
      </div>
    </div>
  );
};

export default HomePage;
