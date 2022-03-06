export default function createNavs() {
  return [
    {
      path: "/",
      component: <div></div>,
      children: [
        {
          path: "/",
          name: "首页",
          component: <div></div>,
        },
        {
          path: "/math",
          name: "数学",
          icon: (
            <span className="iconify-inline icon" data-icon="bi:box"></span>
          ),
          component: <div></div>,
          children: [
            {
              path: "/",
              name: "集合论",
              component: <div></div>,
              children: [
                {
                  path: "/",
                  name: "集合论概览",
                  component: <div></div>,
                },
              ],
            },
            {
              path: "/set_topology",
              name: "点集拓扑",
              component: <div></div>,
              children: [
                {
                  path: "/",
                  name: "点集拓扑概览",
                  component: <div></div>,
                },
              ],
            },
            {
              path: "/real_analysis",
              name: "实分析",
              component: <div></div>,
              children: [
                {
                  path: "/",
                  name: "实分析概览",
                  component: <div></div>,
                },
              ],
            },
            {
              path: "/complex_analysis",
              name: "复分析",
              component: <div></div>,
              children: [
                {
                  path: "/",
                  name: "复分析概览",
                  component: <div></div>,
                },
              ],
            },
            {
              path: "/linear_algebra",
              name: "线性代数",
              component: <div></div>,
              children: [
                {
                  path: "/",
                  name: "线性代数概览",
                  component: <div></div>,
                },
              ],
            },
            {
              path: "/abstract_algebra",
              name: "抽象代数",
              component: <div></div>,
              children: [
                {
                  path: "/",
                  name: "抽象代数概览",
                  component: <div></div>,
                },
              ],
            },
            {
              path: "/probability_theory",
              name: "概率论",
              component: <div></div>,
              children: [
                {
                  path: "/",
                  name: "概率论概览",
                  component: <div></div>,
                },
              ],
            },
            {
              path: "/statistics",
              name: "统计",
              component: <div></div>,
              children: [
                {
                  path: "/",
                  name: "统计概览",
                  component: <div></div>,
                },
              ],
            },
          ],
        },
        {
          path: "/langs",
          name: "计算机",
          icon: (
            <span
              className="iconify-inline icon"
              data-icon="bi:code-square"
            ></span>
          ),
          component: <div></div>,
          children: [
            {
              path: "/",
              name: "C语言",
              component: <div></div>,
              children: [
                {
                  path: "/",
                  name: "C语言概览",
                  component: <div></div>,
                },
              ],
            },
            {
              path: "/cpp",
              name: "C++",
              component: <div></div>,
              children: [
                {
                  path: "/",
                  name: "C++概览",
                  component: <div></div>,
                },
              ],
            },
            {
              path: "/rust",
              name: "Rust语言",
              component: <div></div>,
              children: [
                {
                  path: "/",
                  name: "Rust概览",
                  component: <div></div>,
                },
              ],
            },
            {
              path: "/csharp",
              name: "C#语言",
              component: <div></div>,
              children: [
                {
                  path: "/",
                  name: "C#概览",
                  component: <div></div>,
                },
              ],
            },
            {
              path: "/go",
              name: "Go语言",
              component: <div></div>,
              children: [
                {
                  path: "/",
                  name: "Go语言概览",
                  component: <div></div>,
                },
              ],
            },
            {
              path: "/swift",
              name: "Swift语言",
              component: <div></div>,
              children: [
                {
                  path: "/",
                  name: "Swift概览",
                  component: <div></div>,
                },
              ],
            },
            {
              path: "/julia",
              name: "Julia语言",
              component: <div></div>,
              children: [
                {
                  path: "/",
                  name: "Julia概览",
                  component: <div></div>,
                },
              ],
            },
            {
              path: "/js",
              name: "Js语言",
              component: <div></div>,
              children: [
                {
                  path: "/",
                  name: "Js概览",
                  component: <div></div>,
                },
              ],
            },
            {
              path: "/python",
              name: "Python语言",
              component: <div></div>,
              children: [
                {
                  path: "/",
                  name: "Python概览",
                  component: <div></div>,
                },
              ],
            },
            {
              path: "/sql",
              name: "SQL语言",
              component: <div></div>,
              children: [
                {
                  path: "/",
                  name: "SQL概览",
                  component: <div></div>,
                },
              ],
            },
            {
              path: "/script",
              name: "其他脚本语言",
              component: <div></div>,
              children: [
                {
                  path: "/",
                  name: "其他脚本概览",
                  component: <div></div>,
                },
              ],
            },
          ],
        },
        {
          path: "/videos",
          name: "动视",
          icon: (
            <span
              className="iconify-inline icon"
              data-icon="bi:play-btn"
            ></span>
          ),

          component: <div></div>,
        },
        {
          path: "/sounds",
          name: "音声",
          icon: (
            <span
              className="iconify-inline icon"
              data-icon="bi:music-note-beamed"
            ></span>
          ),
          component: <div></div>,
        },
        {
          path: "/color",
          name: "乐色",
          icon: (
            <span className="iconify-inline icon" data-icon="bi:image"></span>
          ),
          component: <div></div>,
        },
        {
          path: "/articles",
          name: "美文",
          icon: (
            <span className="iconify-inline icon" data-icon="bi:book"></span>
          ),
          component: <div></div>,
        },
      ],
    },
  ];
}
