import bs from "/src/icons/bs";

export default function createNavs() {
  return [
    {
      path: "/",
      name: "首页",
      icon: bs.house,
    },
    {
      path: "/math",
      icon: bs.meta,
      name: "数学",
      children: [
        {
          path: "/set-theory",
          name: "集合论",

          children: [
            {
              path: "/set-theory-cheat/set-theory-cheat",
              name: "集合论概览",
            },
          ],
        },
        {
          path: "/set-topology",
          name: "点集拓扑",
          children: [
            {
              path: "/set-topology-cheat/set-topology-cheat",
              name: "点集拓扑概览",
            },
          ],
        },
        {
          path: "/real-analysis",
          name: "实分析",
          children: [
            {
              path: "/real-analysis-cheat/real-analysis-cheat",
              name: "实分析概览",
            },
          ],
        },
        {
          path: "/complex-analysis",
          name: "复分析",
          children: [
            {
              path: "/complex-analysis-cheat/complex-analysis-cheat",
              name: "复分析概览",
            },
          ],
        },
        {
          path: "/linear-algebra",
          name: "线性代数",
          children: [
            {
              path: "/linear-algebra-cheat/linear-algebra-cheat",
              name: "线性代数概览",
            },
          ],
        },
        {
          path: "/abstract-algebra",
          name: "抽象代数",
          children: [
            {
              path: "/abstract-algebra-cheat/abstract-algebra-cheat",
              name: "抽象代数概览",
            },
          ],
        },
        {
          path: "/probability-theory",
          name: "概率论",
          children: [
            {
              path: "/probability-theory-cheat/probability-theory-cheat",
              name: "概率论概览",
            },
          ],
        },
        {
          path: "/statistics",
          name: "统计",
          children: [
            {
              path: "/statistics-cheat/statistics-cheat",
              name: "统计概览",
            },
          ],
        },
      ],
    },
    {
      path: "/langs",
      name: "计算机",
      icon: bs.code_square,
      children: [
        {
          path: "/clang",
          name: "C语言",
          children: [
            {
              path: "/clang-cheat/clang-cheat",
              name: "C语言概览",
            },
          ],
        },
        {
          path: "/cpp",
          name: "C++",
          children: [
            {
              path: "/cpp-cheat/cpp-cheat",
              name: "C++概览",
            },
          ],
        },
        {
          path: "/rust",
          name: "Rust语言",
          children: [
            {
              path: "/rust-cheat/rust-cheat",
              name: "Rust概览",
            },
          ],
        },
        {
          path: "/csharp",
          name: "C#语言",
          children: [
            {
              path: "/csharp-cheat/csharp-cheat",
              name: "C#概览",
            },
          ],
        },
        {
          path: "/go",
          name: "Go语言",
          children: [
            {
              path: "/go-cheat/go-cheat",
              name: "Go语言概览",
            },
          ],
        },
        {
          path: "/swift",
          name: "Swift语言",
          children: [
            {
              path: "/swift-cheat/swift-cheat",
              name: "Swift概览",
            },
          ],
        },
        {
          path: "/julia",
          name: "Julia语言",
          children: [
            {
              path: "/julia-cheat/julia-cheat",
              name: "Julia概览",
            },
          ],
        },
        {
          path: "/js",
          name: "Js语言",
          children: [
            {
              path: "/js-cheat/js-cheat",
              name: "Js概览",
            },
          ],
        },
        {
          path: "/python",
          name: "Python语言",
          children: [
            {
              path: "/python-cheat/python-cheat",
              name: "Python概览",
            },
          ],
        },
        {
          path: "/sql",
          name: "SQL语言",
          children: [
            {
              path: "/sql-cheat/sql-cheat",
              name: "SQL概览",
            },
          ],
        },
        {
          path: "/scripts",
          name: "其他脚本语言",
          children: [
            {
              path: "/lua-cheat/lua-cheat",
              name: "Lua概览",
            },
          ],
        },
      ],
    },
    {
      path: "/videos/videos",
      name: "动视",
      icon: bs.play_circle,
    },
    {
      path: "/sounds/sounds",
      name: "音声",
      icon: bs.music_note_beamed,
    },
    {
      path: "/color/color",
      name: "乐色",
      icon: bs.palette,
    },
    {
      path: "/articles/articles",
      name: "美文",
      icon: bs.book,
    },
  ];
}
