import routes from "./routes.ts";

// @ts-ignore
const Router = window.Vaadin.Router;

export function run() {
  const router = new Router(document.getElementById("root"));

  router.setRoutes(routes.children);
}
