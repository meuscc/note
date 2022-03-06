import type { Component } from "solid-js";
import { useRoutes } from "solid-app-router";
import createNavs from "/src/sections/header/header_navs";

const App: Component = () => {
  const Route = useRoutes(createNavs());

  return <Route />;
};

export default App;
