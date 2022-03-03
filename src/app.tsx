import type { Component } from "solid-js";
import { Link, useRoutes } from "solid-app-router";

import { routes } from "./routes";

const App: Component = () => {
  const Route = useRoutes(routes);

  return (
    <>
      <nav class="header">
        <ul class="header-left">
          <li>
            <Link href="/">Meus笔记</Link>
          </li>
          <li>
            <Link href="/about">数学</Link>
          </li>
          <li>
            <Link href="/error">计算机</Link>
          </li>
          <li>
            <Link href="/error">音声</Link>
          </li>
          <li>
            <Link href="/error">乐色</Link>
          </li>
          <li>
            <Link href="/error">美文</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Route />
      </main>
    </>
  );
};

export default App;
