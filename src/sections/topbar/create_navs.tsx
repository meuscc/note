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
          path: "/set_theory",
          name: "集合论",

          children: [
            {
              path: "/set_theory_cheat",
              name: "集合论概览",
            },
          ],
        },
        {
          path: "/set_topology",
          name: "点集拓扑",
          children: [
            {
              path: "/set_topology_cheat",
              name: "点集拓扑概览",
            },
          ],
        },
        {
          path: "/real_analysis",
          name: "实分析",
          children: [
            {
              path: "/real_analysis_cheat",
              name: "实分析概览",
            },
          ],
        },
        {
          path: "/complex_analysis",
          name: "复分析",
          children: [
            {
              path: "/complex_analysis_cheat",
              name: "复分析概览",
            },
          ],
        },
        {
          path: "/linear_algebra",
          name: "线性代数",
          children: [
            {
              path: "/linear_algebra_cheat",
              name: "线性代数概览",
            },
          ],
        },
        {
          path: "/abstract_algebra",
          name: "抽象代数",
          children: [
            {
              path: "/abstract_algebra_cheat",
              name: "抽象代数概览",
            },
          ],
        },
        {
          path: "/probability_theory",
          name: "概率论",
          children: [
            {
              path: "/probability_theory",
              name: "概率论概览",
            },
          ],
        },
        {
          path: "/statistics",
          name: "统计",
          children: [
            {
              path: "/statistics_cheat",
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
              path: "/c_cheat",
              name: "C语言概览",
            },
          ],
        },
        {
          path: "/cpp",
          name: "C++",
          children: [
            {
              path: "/cpp_cheat",
              name: "C++概览",
            },
          ],
        },
        {
          path: "/rust",
          name: "Rust语言",
          children: [
            {
              path: "/rust_cheat",
              name: "Rust概览",
            },
          ],
        },
        {
          path: "/csharp",
          name: "C#语言",
          children: [
            {
              path: "/csharp_cheat",
              name: "C#概览",
            },
          ],
        },
        {
          path: "/go",
          name: "Go语言",
          children: [
            {
              path: "/go_cheat",
              name: "Go语言概览",
            },
          ],
        },
        {
          path: "/swift",
          name: "Swift语言",
          children: [
            {
              path: "/swift_cheat",
              name: "Swift概览",
            },
          ],
        },
        {
          path: "/julia",
          name: "Julia语言",
          children: [
            {
              path: "/JuliaCheat",
              name: "Julia概览",
            },
          ],
        },
        {
          path: "/js",
          name: "Js语言",
          children: [
            {
              path: "/js_cheat",
              name: "Js概览",
            },
          ],
        },
        {
          path: "/python",
          name: "Python语言",
          children: [
            {
              path: "/python_cheat",
              name: "Python概览",
            },
          ],
        },
        {
          path: "/sql",
          name: "SQL语言",
          children: [
            {
              path: "/sql_cheat",
              name: "SQL概览",
            },
          ],
        },
        {
          path: "/script",
          name: "其他脚本语言",
          children: [
            {
              path: "/ScriptCheat",
              name: "其他脚本概览",
            },
          ],
        },
      ],
    },
    {
      path: "/videos",
      name: "动视",
      icon: bs.play_circle,
    },
    {
      path: "/sounds",
      name: "音声",
      icon: bs.music_note_beamed,
    },
    {
      path: "/color",
      name: "乐色",
      icon: bs.palette,
    },
    {
      path: "/articles",
      name: "美文",
      icon: bs.book,
    },
  ];
}
