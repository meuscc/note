import React, {useEffect, useRef} from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Tet from "../contents/langs/cpp/cpp-cheat/cpp-cheat.mdx";

export const HomePage: NextPage = () => {
  const socketRef = useRef<WebSocket>()
  useEffect(() => {

    let socket = new WebSocket("ws://localhost:8181");
    socket.onopen = function () { console.log("success");    };
    socket.onmessage = function (msg) { console.log(msg.data); };
    socket.onclose = function () { console.log("closed"); };
    socketRef.current = socket


  }, [])

  return (
    <div>
      <Head>
        <title>c++ 概要</title>
        <meta name="description" content="c++ 简要笔记" />
      </Head>
      <div className={"book-page article heti heti--sans"}>
        <button onClick={() => {

          socketRef.current?.send(`${Math.random()}`)
        }} className={'btn-success btn-fill'}>发送</button>
        <Tet />
      </div>
    </div>
  );
};

export default HomePage;
