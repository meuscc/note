// @ts-ignore
import glob from "glob";
import fs from "node:fs";

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

// 获得所有路由文件
glob("src/routes/**/*.tsx", {}, async function (_: any, files: any) {
  const paths = files.map((v: any) => v.replace("src/routes/", ""));
  const routes = await createRoutes(paths);

  const router = {
    name: "root",
    children: routes,
  };
  obj2Arr(router);
  fs.writeFileSync("a.json", JSON.stringify(router));
});

// 遍历所有文件
async function createRoutes(paths: any[]) {
  const routes: any = {};

  for (let i = 0; i < paths.length; i++) {
    await createNestedRoutes(paths[i].split("/"), routes);
  }
  return routes;
}

// 根据每个文件创建嵌套路由
async function createNestedRoutes(
  pathSections: string[],
  obj: any,
  pathPrefix = ""
) {
  const pathSection = pathSections.shift();
  if (!pathSection) return;

  const trimmedPathSections = pathSection.replace(".tsx", "");

  // 文件 import 路径
  const modulePath = `${
    pathPrefix === "" ? "" : pathPrefix
  }/${encodeURIComponent(trimmedPathSections)}`;

  let path =
    modulePath === "/index" ? "/" : encodeURIComponent(trimmedPathSections);

  // 有子路由啦
  if (pathSections.length > 0) {
    console.log(pathSections.length);
    path += "/*";
    console.log(path);
  }

  // 设置路由详情
  if (!obj[trimmedPathSections]) {
    const { pageMeta } = await import(`../src/routes/${modulePath}.tsx`);
    obj[trimmedPathSections] = {
      name: trimmedPathSections,
      path,
      modulePath,
      fullPath:
        modulePath === "/index" ? "/" : modulePath.replace("/index", ""),
      element: pathSection,
      ...pageMeta,
      children: {},
    };
  }

  await createNestedRoutes(
    pathSections,
    obj[trimmedPathSections].children,
    modulePath
  );
}
