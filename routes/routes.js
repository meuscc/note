export default [
  {
    name: "首页",
    path: "/",
    element: "<page-index></page-index>",
    action: () => import("/pages/index.js"),
  },
  {
    name: "关于",
    path: "/about",
    element: "<page-about></page-about>",
    action: () => import("/pages/about.js"),
  },
];
