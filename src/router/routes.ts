export default {
  name: "root",
  children: [
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
  ],
};
