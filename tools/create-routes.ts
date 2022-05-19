import fs from "node:fs";
// @ts-ignore
import glob from "glob";
// @ts-ignore
import toml from "toml";
// @ts-ignore
import prettier from "prettier";

const start_text = "/****";
const end_text = "****/";

function obj2Arr(obj: any) {
  try {
    if (!obj.childrens) obj.childrens = [];
    Object.keys(obj.children).forEach((key) => {
      obj2Arr(obj.children[key]);
      obj.childrens.push(obj.children[key]);
    });
    obj.children = obj.childrens;
    delete obj.childrens;
  } catch (e) {}
}

// 获得所有路由路径
function getRoutePaths() {
  const allPaths = glob.sync("src/routes/**/*.ts");

  const routePaths: string[] = [];
  for (let i = 0; i < allPaths.length; i++) {
    const path = allPaths[i];
    const content = fs.readFileSync(path).toString();
    if (content.includes(start_text) && content.includes(end_text)) {
      routePaths.push(allPaths[i]);
    }
  }

  return routePaths;
}

// 获得路由对象
function getRoutes() {
  const routes: any = {};
  const paths = getRoutePaths();
  for (let i = 0; i < paths.length; i++) {
    createNestedRoutes(
      paths[i].split("/").map((v: string) => v.replaceAll(".tsx", "")),
      routes
    );
  }
  return routes;
}

// 获得级联路径
function createNestedRoutes(filePaths: string[], obj: any, pathPrefix = "") {
  const filePath = filePaths.shift();
  if (!filePath) return;

  // 文件 import 路径
  const importPath = `${pathPrefix === "" ? "" : pathPrefix}/${filePath}`;

  // 解析路由参数
  const routePath = filePath.replace(/\[((.|\s)*?)]/g, function (_$1, $2) {
    return `:${$2}`;
  });

  console.log(importPath);

  if (!obj[filePath]) {
    let pageMeta = {};
    let haveComponent = true;
    try {
      const content = fs.readFileSync(filePath).toString();
      const metaStr = content.split(start_text)[1].split(end_text)[0].trim();
      pageMeta = toml.parse(metaStr);
    } catch (e) {
      haveComponent = false;
    }

    obj[filePath] = {
      name: filePath,
      path: removeIndexPrefix(encodeURI(routePath.replace("src/routes/", ""))),
      component: haveComponent
        ? `import('/src/routes${importPath}.tsx')`
        : undefined,
      ...pageMeta,
      children: {},
    };
    obj[filePath].path += obj[filePath].path.endsWith("/") ? "*" : "/*";
  }

  createNestedRoutes(filePaths, obj[filePath].children, importPath);
}

function removeIndexPrefix(route: string) {
  if (route === "index" || route === "/index") return "/";
  return route.replace("/index", "").replace("index", "");
}

const routes = getRoutes();

const router = {
  name: "root",
  children: routes,
};
obj2Arr(router);

fs.writeFileSync(
  "src/router/r.ts",
  prettier
    .format(
      `export default ${JSON.stringify(router)}`.replace(
        /\\\[((.|\s)*?)\\]/g,
        function (_$1, $2) {
          return "import(" + $2.trim() + "')";
        }
      ),
      {
        parser: "typescript",
      }
    )
    .replaceAll('"import(', "import(")
);
