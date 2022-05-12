import React from "react";
export const routes = {
  name: "root",
  children: [
    {
      name: "index",
      fullName: "",
      path: "/*",
      fullPath: "/",
      modulePath: "/src/routes/index",
      component: import('/src/routes/index'),
      children: [
        {
          name: "langs",
          fullName: "langs",
          path: "langs/*",
          fullPath: "/langs",
          modulePath: "/src/routes/index/langs",
          children: [
            {
              name: "cpp",
              fullName: "langs/cpp",
              path: "cpp/*",
              fullPath: "/langs/cpp",
              modulePath: "/src/routes/index/langs/cpp",
              children: [
                {
                  name: "c++ 概览",
                  fullName: "langs/cpp/cpp-cheatsheet",
                  path: "cpp-cheatsheet/*",
                  fullPath: "/langs/cpp/cpp-cheatsheet",
                  modulePath: "/src/routes/index/langs/cpp/cpp-cheatsheet",
                  component:
                    import('/src/routes/index/langs/cpp/cpp-cheatsheet'),
                  children: [],
                },
              ],
            },
            {
              name: "dart",
              fullName: "langs/dart",
              path: "dart/*",
              fullPath: "/langs/dart",
              modulePath: "/src/routes/index/langs/dart",
              children: [
                {
                  name: "c++ 概览",
                  fullName: "langs/dart/dart-cheatsheet",
                  path: "dart-cheatsheet/*",
                  fullPath: "/langs/dart/dart-cheatsheet",
                  modulePath: "/src/routes/index/langs/dart/dart-cheatsheet",
                  component:
                    import('/src/routes/index/langs/dart/dart-cheatsheet'),
                  children: [],
                },
              ],
            },
            {
              name: "git",
              fullName: "langs/git",
              path: "git/*",
              fullPath: "/langs/git",
              modulePath: "/src/routes/index/langs/git",
              children: [
                {
                  name: "c++ 概览",
                  fullName: "langs/git/git-cheatsheet",
                  path: "git-cheatsheet/*",
                  fullPath: "/langs/git/git-cheatsheet",
                  modulePath: "/src/routes/index/langs/git/git-cheatsheet",
                  component:
                    import('/src/routes/index/langs/git/git-cheatsheet'),
                  children: [],
                },
              ],
            },
            {
              name: "go",
              fullName: "langs/go",
              path: "go/*",
              fullPath: "/langs/go",
              modulePath: "/src/routes/index/langs/go",
              children: [
                {
                  name: "c++ 概览",
                  fullName: "langs/go/go-cheatsheet",
                  path: "go-cheatsheet/*",
                  fullPath: "/langs/go/go-cheatsheet",
                  modulePath: "/src/routes/index/langs/go/go-cheatsheet",
                  component:
                    import('/src/routes/index/langs/go/go-cheatsheet'),
                  children: [],
                },
              ],
            },
            {
              name: "js",
              fullName: "langs/js",
              path: "js/*",
              fullPath: "/langs/js",
              modulePath: "/src/routes/index/langs/js",
              children: [
                {
                  name: "c++ 概览",
                  fullName: "langs/js/js-cheatsheet",
                  path: "js-cheatsheet/*",
                  fullPath: "/langs/js/js-cheatsheet",
                  modulePath: "/src/routes/index/langs/js/js-cheatsheet",
                  component:
                    import('/src/routes/index/langs/js/js-cheatsheet'),
                  children: [],
                },
              ],
            },
            {
              name: "julia",
              fullName: "langs/julia",
              path: "julia/*",
              fullPath: "/langs/julia",
              modulePath: "/src/routes/index/langs/julia",
              children: [
                {
                  name: "c++ 概览",
                  fullName: "langs/julia/julia-cheatsheet",
                  path: "julia-cheatsheet/*",
                  fullPath: "/langs/julia/julia-cheatsheet",
                  modulePath: "/src/routes/index/langs/julia/julia-cheatsheet",
                  component:
                    import('/src/routes/index/langs/julia/julia-cheatsheet'),
                  children: [],
                },
              ],
            },
            {
              name: "python",
              fullName: "langs/python",
              path: "python/*",
              fullPath: "/langs/python",
              modulePath: "/src/routes/index/langs/python",
              children: [
                {
                  name: "c++ 概览",
                  fullName: "langs/python/python-cheatsheet",
                  path: "python-cheatsheet/*",
                  fullPath: "/langs/python/python-cheatsheet",
                  modulePath:
                    "/src/routes/index/langs/python/python-cheatsheet",
                  component:
                    import('/src/routes/index/langs/python/python-cheatsheet'),
                  children: [],
                },
              ],
            },
            {
              name: "rust",
              fullName: "langs/rust",
              path: "rust/*",
              fullPath: "/langs/rust",
              modulePath: "/src/routes/index/langs/rust",
              children: [
                {
                  name: "c++ 概览",
                  fullName: "langs/rust/rust-cheatsheet",
                  path: "rust-cheatsheet/*",
                  fullPath: "/langs/rust/rust-cheatsheet",
                  modulePath: "/src/routes/index/langs/rust/rust-cheatsheet",
                  component:
                    import('/src/routes/index/langs/rust/rust-cheatsheet'),
                  children: [],
                },
              ],
            },
            {
              name: "sql",
              fullName: "langs/sql",
              path: "sql/*",
              fullPath: "/langs/sql",
              modulePath: "/src/routes/index/langs/sql",
              children: [
                {
                  name: "c++ 概览",
                  fullName: "langs/sql/sql-cheatsheet",
                  path: "sql-cheatsheet/*",
                  fullPath: "/langs/sql/sql-cheatsheet",
                  modulePath: "/src/routes/index/langs/sql/sql-cheatsheet",
                  component:
                    import('/src/routes/index/langs/sql/sql-cheatsheet'),
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
