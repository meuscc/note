import { ViteSSG } from "vite-ssg";
import routes from "~pages";
import App from "./App.vue";

// import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import "./styles/index.scss";

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {}
);
