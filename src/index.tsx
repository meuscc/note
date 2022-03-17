import "./styles/index";
import a from "../test.md";

console.log(a);

export interface Nav {
  name: string;
  path: string;
  icon?: any;
  component?: any;
  children?: Nav[];
  id?: string;
}

import createNavs from "./create_navs";

const navs = createNavs()[0].children;

console.log(navs);

let _navs: Nav[] = [];

function flatNavs(navs: Nav[], parentPath: string = "") {
  navs.forEach((nav) => {
    const path = parentPath ? `${parentPath}${nav.path}` : nav.path;
    _navs.push({ name: nav.name, path });
    if (nav.children?.length) {
      flatNavs(nav.children, path);
    }
  });
}

flatNavs(navs);

console.log(_navs);

const root = document.getElementById("root");
function create() {
  const menu = document.createElement("ul");
  navs
    .map((nav) => {
      return createMenuItem(nav);
    })
    .forEach((nav) => {
      menu.appendChild(nav);
    });
  root?.appendChild(menu);
}

function createMenuItem(nav: Nav, parentPath: string = "", level = 1) {
  const hasChildren = nav.children?.length;
  const path = parentPath ? `${parentPath}${nav.path}` : nav.path;

  const el = document.createElement("li");
  el.dataset["level"] = `${level}`;
  const menuNavi = document.createElement("div");
  const link = hasChildren
    ? document.createElement("span")
    : document.createElement("a");

  let dropdown: any = null;
  if (!hasChildren) {
    // @ts-ignore
    link.href = path;
  } else {
    //
    menuNavi.addEventListener("pointerup", (e) => {
      console.log(e);
      console.log(el.dataset["show"]);
      if (!el.dataset["show"]) {
        el.dataset["show"] = "show";
        el.appendChild(dropdown);

        const a = dropdown.animate(
          [{ height: "0px" }, { height: `${nav.children!.length * 32}px` }],
          {
            duration: 125,
          }
        );
        a.finished.then();
      } else {
        delete el.dataset["show"];
        const a = dropdown.animate(
          [{ height: `${nav.children!.length * 32}px` }, { height: "0px" }],
          {
            duration: 125,
          }
        );
        a.finished.then(() => {
          el.removeChild(dropdown);
        });
      }
    });
  }
  link.innerHTML = nav.name;
  menuNavi.appendChild(link);
  el.appendChild(menuNavi);
  if (hasChildren) {
    dropdown = document.createElement("ul");
    nav.children!.forEach((_nav) => {
      dropdown.appendChild(createMenuItem(_nav, path, level + 1));
    });
  }
  return el;
}

create();
