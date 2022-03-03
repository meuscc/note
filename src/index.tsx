/* @refresh reload */
// import 'windi.css';
import "uno.css";
import "./styles/index";

import { render } from "solid-js/web";
import { Router } from "solid-app-router";
import App from "./app";

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
