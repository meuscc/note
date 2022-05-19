import routes from "/routes/routes.js";

const root = document.getElementById("root");

const route = routes.find((r) => r.path === location.pathname);

route.action();

root.innerHTML = route.element;
