import MainLayout from "/src/layouts/main_layout/MainLayout";
import { lazy } from "solid-js";
import Home from "/src/pages/home/Home";

export default function createNavs() {
  return [
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "/",
          name: "首页",
          component: Home,
        },
        {
          path: "/math",
          name: "数学",
          icon: <span class="iconify-inline icon" data-icon="bi:box"></span>,
          component: lazy(() => import("/src/pages/math/Math")),
          children: [
            {
              path: "/",
              name: "集合论",
              component: lazy(
                () => import("/src/pages/math/set_theory/SetTheory")
              ),
              children: [
                {
                  path: "/",
                  name: "集合论概览",
                  component: lazy(
                    () =>
                      import(
                        "/src/pages/math/set_theory/set_theory_cheat/SetTheoryCheat"
                      )
                  ),
                },
              ],
            },
            {
              path: "/set_topology",
              name: "点集拓扑",
              component: lazy(
                () => import("/src/pages/math/set_topology/SetTopology")
              ),
              children: [
                {
                  path: "/",
                  name: "点集拓扑概览",
                  component: lazy(
                    () =>
                      import(
                        "/src/pages/math/set_topology/set_topology_cheat/SetTopologyCheat"
                      )
                  ),
                },
              ],
            },
            {
              path: "/real_analysis",
              name: "实分析",
              component: lazy(
                () => import("/src/pages/math/real_analysis/RealAnalysis")
              ),
              children: [
                {
                  path: "/",
                  name: "实分析概览",
                  component: lazy(
                    () =>
                      import(
                        "/src/pages/math/real_analysis/real_analysis_cheat/RealAnalysisCheat"
                      )
                  ),
                },
              ],
            },
            {
              path: "/complex_analysis",
              name: "复分析",
              component: lazy(
                () => import("/src/pages/math/complex_analysis/ComplexAnalysis")
              ),
              children: [
                {
                  path: "/",
                  name: "复分析概览",
                  component: lazy(
                    () =>
                      import(
                        "/src/pages/math/complex_analysis/complex_analysis_cheat/ComplexAnalysisCheat"
                      )
                  ),
                },
              ],
            },
            {
              path: "/linear_algebra",
              name: "线性代数",
              component: lazy(
                () => import("/src/pages/math/linear_algebra/LinearAlgebra")
              ),
              children: [
                {
                  path: "/",
                  name: "线性代数概览",
                  component: lazy(
                    () =>
                      import(
                        "/src/pages/math/linear_algebra/linear_algebra_cheat/LinearAlgebraCheat"
                      )
                  ),
                },
              ],
            },
            {
              path: "/abstract_algebra",
              name: "抽象代数",
              component: lazy(
                () => import("/src/pages/math/abstract_algebra/AbstractAlgebra")
              ),
              children: [
                {
                  path: "/",
                  name: "抽象代数概览",
                  component: lazy(
                    () =>
                      import(
                        "/src/pages/math/abstract_algebra/abstract_algebra_cheat/AbstractAlgebraCheat"
                      )
                  ),
                },
              ],
            },
            {
              path: "/probability_theory",
              name: "概率论",
              component: lazy(
                () =>
                  import("/src/pages/math/probability_theory/ProbabilityTheory")
              ),
              children: [
                {
                  path: "/",
                  name: "概率论概览",
                  component: lazy(
                    () =>
                      import(
                        "/src/pages/math/probability_theory/probability_theory/ProbabilityTheoryCheat"
                      )
                  ),
                },
              ],
            },
            {
              path: "/statistics",
              name: "统计",
              component: lazy(
                () => import("/src/pages/math/statistics/Statistics")
              ),
              children: [
                {
                  path: "/",
                  name: "统计概览",
                  component: lazy(
                    () =>
                      import(
                        "/src/pages/math/statistics/statistics_cheat/StatisticsCheat"
                      )
                  ),
                },
              ],
            },
          ],
        },
        {
          path: "/langs",
          name: "计算机",
          icon: (
            <span class="iconify-inline icon" data-icon="bi:code-square"></span>
          ),
          component: lazy(() => import("/src/pages/langs/Langs")),
          children: [
            {
              path: "/",
              name: "C语言",
              component: lazy(() => import("/src/pages/langs/c/C")),
              children: [
                {
                  path: "/",
                  name: "C语言概览",
                  component: lazy(
                    () => import("/src/pages/langs/c/c_cheat/CCheat")
                  ),
                },
              ],
            },
            {
              path: "/cpp",
              name: "C++",
              component: lazy(() => import("/src/pages/langs/cpp/Cpp")),
              children: [
                {
                  path: "/",
                  name: "C++概览",
                  component: lazy(
                    () => import("/src/pages/langs/cpp/cpp_cheat/CppCheat")
                  ),
                },
              ],
            },
            {
              path: "/rust",
              name: "Rust语言",
              component: lazy(() => import("/src/pages/langs/rust/Rust")),
              children: [
                {
                  path: "/",
                  name: "Rust概览",
                  component: lazy(
                    () => import("/src/pages/langs/rust/rust_cheat/RustCheat")
                  ),
                },
              ],
            },
            {
              path: "/csharp",
              name: "C#语言",
              component: lazy(() => import("/src/pages/langs/csharp/Csharp")),
              children: [
                {
                  path: "/",
                  name: "C#概览",
                  component: lazy(
                    () =>
                      import("/src/pages/langs/csharp/csharp_cheat/CsharpCheat")
                  ),
                },
              ],
            },
            {
              path: "/go",
              name: "Go语言",
              component: lazy(() => import("/src/pages/langs/go/Go")),
              children: [
                {
                  path: "/",
                  name: "Go语言概览",
                  component: lazy(
                    () => import("/src/pages/langs/go/go_cheat/GoCheat")
                  ),
                },
              ],
            },
            {
              path: "/swift",
              name: "Swift语言",
              component: lazy(() => import("/src/pages/langs/swift/Swift")),
              children: [
                {
                  path: "/",
                  name: "Swift概览",
                  component: lazy(
                    () =>
                      import("/src/pages/langs/swift/swift_cheat/SwiftCheat")
                  ),
                },
              ],
            },
            {
              path: "/julia",
              name: "Julia语言",
              component: lazy(() => import("/src/pages/langs/julia/Julia")),
              children: [
                {
                  path: "/",
                  name: "Julia概览",
                  component: lazy(
                    () =>
                      import("/src/pages/langs/julia/julia_cheat/JuliaCheat")
                  ),
                },
              ],
            },
            {
              path: "/js",
              name: "Js语言",
              component: lazy(() => import("/src/pages/langs/js/Js")),
              children: [
                {
                  path: "/",
                  name: "Js概览",
                  component: lazy(
                    () => import("/src/pages/langs/js/js_cheat/JsCheat")
                  ),
                },
              ],
            },
            {
              path: "/python",
              name: "Python语言",
              component: lazy(() => import("/src/pages/langs/python/Python")),
              children: [
                {
                  path: "/",
                  name: "Python概览",
                  component: lazy(
                    () =>
                      import("/src/pages/langs/python/python_cheat/PythonCheat")
                  ),
                },
              ],
            },
            {
              path: "/sql",
              name: "SQL语言",
              component: lazy(() => import("/src/pages/langs/sql/Sql")),
              children: [
                {
                  path: "/",
                  name: "SQL概览",
                  component: lazy(
                    () => import("/src/pages/langs/sql/sql_cheat/SqlCheat")
                  ),
                },
              ],
            },
            {
              path: "/script",
              name: "其他脚本语言",
              component: lazy(() => import("/src/pages/langs/script/Script")),
              children: [
                {
                  path: "/",
                  name: "其他脚本概览",
                  component: lazy(
                    () =>
                      import("/src/pages/langs/script/script_cheat/ScriptCheat")
                  ),
                },
              ],
            },
          ],
        },
        {
          path: "/videos",
          name: "动视",
          icon: (
            <span class="iconify-inline icon" data-icon="bi:play-btn"></span>
          ),

          component: lazy(() => import("/src/pages/videos/Videos")),
        },
        {
          path: "/sounds",
          name: "音声",
          icon: (
            <span
              class="iconify-inline icon"
              data-icon="bi:music-note-beamed"
            ></span>
          ),
          component: lazy(() => import("/src/pages/sounds/Sounds")),
        },
        {
          path: "/color",
          name: "乐色",
          icon: <span class="iconify-inline icon" data-icon="bi:image"></span>,
          component: lazy(() => import("/src/pages/color/Color")),
        },
        {
          path: "/articles",
          name: "美文",
          icon: <span class="iconify-inline icon" data-icon="bi:book"></span>,
          component: lazy(() => import("/src/pages/articles/Articles")),
        },
      ],
    },
  ];
}
