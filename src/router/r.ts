export default {
  name: "root",
  children: [
    {
      name: "src",
      path: "src/*",
      children: [
        {
          name: "routes",
          path: "routes/*",
          children: [
            { name: "index.ts", path: ".ts/*", children: [] },
            {
              name: "index",
              path: "/*",
              children: [
                {
                  name: "langs",
                  path: "langs/*",
                  children: [
                    {
                      name: "cpp",
                      path: "cpp/*",
                      children: [
                        {
                          name: "cpp-cheatsheet.ts",
                          path: "cpp-cheatsheet.ts/*",
                          children: [],
                        },
                      ],
                    },
                    {
                      name: "dart",
                      path: "dart/*",
                      children: [
                        {
                          name: "dart-cheatsheet.ts",
                          path: "dart-cheatsheet.ts/*",
                          children: [],
                        },
                      ],
                    },
                    {
                      name: "git",
                      path: "git/*",
                      children: [
                        {
                          name: "git-cheatsheet.ts",
                          path: "git-cheatsheet.ts/*",
                          children: [],
                        },
                      ],
                    },
                    {
                      name: "go",
                      path: "go/*",
                      children: [
                        {
                          name: "go-cheatsheet.ts",
                          path: "go-cheatsheet.ts/*",
                          children: [],
                        },
                      ],
                    },
                    {
                      name: "js",
                      path: "js/*",
                      children: [
                        {
                          name: "js-cheatsheet.ts",
                          path: "js-cheatsheet.ts/*",
                          children: [],
                        },
                      ],
                    },
                    {
                      name: "julia",
                      path: "julia/*",
                      children: [
                        {
                          name: "julia-cheatsheet.ts",
                          path: "julia-cheatsheet.ts/*",
                          children: [],
                        },
                      ],
                    },
                    {
                      name: "python",
                      path: "python/*",
                      children: [
                        {
                          name: "python-cheatsheet.ts",
                          path: "python-cheatsheet.ts/*",
                          children: [],
                        },
                      ],
                    },
                    {
                      name: "rust",
                      path: "rust/*",
                      children: [
                        {
                          name: "rust-cheatsheet.ts",
                          path: "rust-cheatsheet.ts/*",
                          children: [],
                        },
                      ],
                    },
                    {
                      name: "sql",
                      path: "sql/*",
                      children: [
                        {
                          name: "sql-cheatsheet.ts",
                          path: "sql-cheatsheet.ts/*",
                          children: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
