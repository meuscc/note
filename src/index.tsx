// @ts-ignore
const Router = window.Vaadin.Router; // for vaadin-router.umd.js

const router = new Router(document.getElementById("root"));
router.setRoutes([
  {
    path: "/",
    component: "layout-main",
    children: [
      {
        path: "/",
        component: "page-index",
        action: async () => {
          await import("/src/routes/index");
        },
      },
      { path: "/:user", component: "x-user-profile" },
    ],
  },
]);
