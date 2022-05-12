// @ts-ignore
import glob from "glob";
import fs from "node:fs";
// @ts-ignore
import prettier from "prettier";

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

// get all routes files
glob("src/routes/**/*.tsx", {}, async function (er: any, files: any) {
  const allPaths = files.map((v: any) => v.replace("src/routes/", ""));
  const paths: string[] = [];
  for (let i = 0; i < allPaths.length; i++) {
    const { pageMeta } = await import(`../src/routes/${allPaths[i]}`);

    if (pageMeta) {
      paths.push(allPaths[i]);
    }
  }

  const routes = await createRoutes(paths);

  const router = {
    name: "root",
    children: routes,
  };
  obj2Arr(router);
  fs.writeFileSync(
    "src/router/routes.tsx",
    prettier
      .format(
        `import React from 'react';\n export const routes = ${JSON.stringify(
          router
        )}`.replace(/\\\[((.|\s)*?)\\]/g, function (_$1, $2) {
          return "import(" + $2.trim() + "')";
        }),
        {
          parser: "typescript",
        }
      )
      .replaceAll('"import(', "import(")
      .replaceAll(".tsx')\"", "')")
  );
});

// walk through all routes
async function createRoutes(paths: any[]) {
  const routes: any = {};

  for (let i = 0; i < paths.length; i++) {
    await createNestedRoutes(
      paths[i].split("/").map((v: string) => v.replaceAll(".tsx", "")),
      routes
    );
  }
  return routes;
}

// create nested routes
async function createNestedRoutes(
  filePaths: string[],
  obj: any,
  pathPrefix = ""
) {
  const filePath = filePaths.shift();
  if (!filePath) return;

  // file import path
  const importPath = `${pathPrefix === "" ? "" : pathPrefix}/${filePath}`;

  // resolve route params
  const routePath = filePath.replace(/\[((.|\s)*?)]/g, function (_$1, $2) {
    return `:${$2}`;
  });

  if (!obj[filePath]) {
    let pageMeta = {};
    let haveComponent = true;
    try {
      const { pageMeta: page_meta } = await import(
        `../src/routes${importPath}.tsx`
      );
      pageMeta = page_meta;
    } catch (e) {
      haveComponent = false;
      // console.log(e);
    }

    obj[filePath] = {
      name: filePath,
      fullName: removeIndexPrefix(importPath).replace("/", ""),
      path: removeIndexPrefix(encodeURI(routePath)),
      fullPath: removeIndexPrefix(encodeURI(importPath)),
      modulePath: `/src/routes${importPath}`,
      component: haveComponent
        ? `import('/src/routes${importPath}.tsx')`
        : undefined,
      ...pageMeta,
      children: {},
    };
    obj[filePath].path += obj[filePath].path.endsWith("/") ? "*" : "/*";
  }

  // add `*` if has children routes
  await createNestedRoutes(filePaths, obj[filePath].children, importPath);
}

function removeIndexPrefix(route: string) {
  if (route === "index" || route === "/index") return "/";
  return route.replace("/index", "").replace("index", "");
}
