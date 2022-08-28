import icons from "/src/components/icons";

export interface TreeData {
  name: string;
  link?: string;
  description?: string;
  icon?: string;
  children?: TreeData[];
}

const navs: TreeData = {
  name: "我的导航",
  link: "",
  children: [
    {
      name: "计算机",
      children: [
        {
          name: "通识",
          link: "",
          children: [
            {
              name: "github 博客",
              link: "https://github.blog/",
              description: "github 博客",
              icon: "https://github.githubassets.com/favicon.ico",
            },
            {
              name: "github 榜单",
              link: "https://github.com/GrowingGit/GitHub-Chinese-Top-Charts",
              description: "github 榜单",
              icon: "https://github.githubassets.com/favicon.ico",
            },
            {
              name: "Build your own x",
              link: "https://github.com/codecrafters-io/build-your-own-x",
              description: "",
              icon: "",
            },
            {
              name: "你好 GitHub",
              link: "https://hellogithub.com/",
              description:
                "分享 GitHub 上有趣、入门级的开源项目。Share interesting, entry-level open source projects on GitHub.",
              icon: "https://img.hellogithub.com/favicon/favicon.ico",
            },
            {
              name: "What every programmer should know about memory",
              link: "https://lwn.net/Articles/250967/",
              description: "What every programmer should know about memory",
              icon: "https://static.lwn.net/images/favicon.png",
            },
            {
              name: "计算机体系结构基础",
              link: "https://foxsen.github.io/archbase/",
              description: "计算机体系结构基础",
              icon: "https://foxsen.github.io/favicon.ico",
            },
            {
              name: "健康学习到150岁",
              link: "https://github.com/zijie0/HumanSystemOptimization",
              description: "人体系统调优不完全指南",
              icon: "",
            },
            {
              name: "程序员延寿指南",
              link: "https://github.com/geekan/HowToLiveLonger",
              description: "程序员延寿指南",
              icon: "",
            },
            {
              name: "简历制作",
              link: "https://rxresu.me/",
              description: "简历制作",
              icon: "https://rxresu.me/favicon.ico",
            },
            {
              name: "CS 自学指南",
              link: "https://csdiy.wiki/",
              description: "CS 自学指南",
              icon: "https://csdiy.wiki/assets/images/favicon.png",
            },
            {
              name: "GAMES在线课程",
              link: "https://games-cn.org/gamescoursescollection/",
              description: "GAMES在线课程",
              icon: "https://games-cn.org/wp-content/uploads/2021/11/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20211123170725__1_-removebg-preview-150x150.png",
            },
            {
              name: "Free for Dev",
              link: "https://free-for.dev/",
              description:
                "A list of SaaS, PaaS and IaaS offerings that have free tiers of interest to devops and infradev",
              icon: "https://free-for.dev/logo.webp",
            },
            {
              name: "what-happens-when",
              link: "https://github.com/alex/what-happens-when",
              description:
                'An attempt to answer the age old interview question "What happens when you type google.com into your browser and press enter?"',
            },
            {
              name: "程序员做饭指南",
              link: "https://cook.aiurs.co/",
              description: "程序员做饭指南",
              icon: "https://cook.aiurs.co/assets/images/favicon.png",
            },
            {
              name: "论文写作小技巧",
              link: "https://github.com/MLNLP-World/Paper-Writing-Tips",
              description: "论文写作小技巧",
              icon: "",
            },
            {
              name: "Modern Unix Commands",
              link: "https://github.com/ibraheemdev/modern-unix",
              description:
                "A collection of modern/faster/saner alternatives to common unix commands.",
            },
            {
              name: "Unlock Music",
              link: "https://github.com/unlock-music/unlock-music",
              description: "在浏览器中解锁加密的音乐文件",
            },
            {
              name: "Hacker-Laws-zh",
              link: "https://github.com/nusr/hacker-laws-zh",
              description: "对开发人员有用的定律、理论、原则和模式",
            },
            {
              name: "红队笔记",
              link: "https://github.com/biggerduck/RedTeamNotes",
              description: "红队笔记",
            },
            {
              name: "开发内功修炼",
              link: "https://github.com/yanfeizhang/coder-kung-fu",
            },
            {
              name: "Awesome Metaverse",
              link: "https://github.com/M3-org/awesome-metaverse",
            },
            {
              name: "游戏程序员生涯的读书笔记",
              link: "https://github.com/QianMo/Game-Programmer-Study-Notes",
            },
            {
              name: "Stat Rethinking 2022",
              link: "https://github.com/rmcelreath/stat_rethinking_2022",
            },
            {
              name: "2022年开源操作系统训练营",
              link: "https://learningos.github.io/rust-based-os-comp2022/",
              description:
                "本教程展示了如何 从零开始 用 Rust 语言写一个基于 RISC-V 架构的 类 Unix 内核 。用于 2022年开源操作系统训练营。",
            },
            {
              name: "vim-cheatsheet",
              link: "https://www.cnblogs.com/chloneda/p/vim-cheatsheet.html",
            },
            {
              name: "滴水逆向课程笔记",
              link: "https://gh0st.cn/Binary-Learning/Binary-Learning.html",
            },
            {
              name: "Halfrost-Field 冰霜之地",
              link: "https://github.com/halfrost/Halfrost-Field",
              description: "这里是写博客的地方 —— Halfrost-Field 冰霜之地",
            },
            {
              name: "品读 Linux 0.11 核心代码",
              link: "https://github.com/sunym1993/flash-linux0.11-talk",
              description: "品读 Linux 0.11 核心代码",
            },
            {
              name: "分布式系统模式",
              link: "https://github.com/dreamhead/patterns-of-distributed-systems",
            },
            {
              name: "The Art of Command Line",
              link: "https://github.com/jlevy/the-art-of-command-line",
              description: "Master the command line, in one page",
            },
            {
              name: "Every programmer should know",
              link: "https://github.com/mtdvio/every-programmer-should-know",
              description: "Master the command line, in one page",
            },
            {
              name: "Google Research",
              link: "https://research.google/",
              description: "Google Research",
              icon: "https://research.google/static/images/favicon-6da5620880159634213e197fafca1dde0272153be3e4590818533fab8d040770.ico",
            },
            {
              name: "DDIA中文翻译",
              link: "https://github.com/Vonng/ddia",
              description: "Designing Data-Intensive Application",
            },
            {
              name: "极客时间",
              link: "https://time.geekbang.org/",
              description: "极客时间-轻松学习，高效学习-极客邦",
              icon: "https://static001.geekbang.org/static/time/icon/favicon-32x32.jpg",
            },
            {
              name: "Hackingtool",
              link: "https://github.com/Z4nzu/hackingtool",
              description: "ALL IN ONE Hacking Tool For Hackers",
            },
            {
              name: "Hacksplaining",
              link: "https://www.hacksplaining.com/",
              description: "SECURITY TRAINING FOR DEVELOPERS",
              icon: "https://www.hacksplaining.com/touch-icon-ipad-retina.png",
            },
          ],
        },
        {
          name: "Rust",
          children: [
            {
              name: "文档",
              children: [
                {
                  name: "Rust语言圣经",
                  link: "https://course.rs/",
                  description: "",
                  icon: "",
                },
                {
                  name: "Rust语言实战",
                  link: "https://zh.practice.rs/",
                  description: "",
                  icon: "",
                },
                {
                  name: "Rust Language Cheat Sheet",
                  link: "https://cheats.rs/",
                  description: "",
                  icon: "",
                },
                {
                  name: "The Rustonomicon",
                  link: "https://doc.rust-lang.org/nomicon/",
                  description: "",
                  icon: "",
                },
                {
                  name: "Asynchronous Programming in Rust",
                  link: "https://rust-lang.github.io/async-book/",
                  description: "",
                  icon: "",
                },
                {
                  name: "Async programming in Rust with async-std",
                  link: "https://book.async.rs/",
                  description: "",
                  icon: "",
                },
                {
                  name: "Offensive Rust",
                  link: "https://github.com/trickster0/OffensiveRust",
                  description: "",
                  icon: "",
                },
                {
                  name: "Rust Data Structures book",
                  link: "https://github.com/QMHTMY/RustBook",
                  description:
                    "A book about Rust Data Structures and Algorithms.",
                },
              ],
            },
            {
              name: "生态",
              children: [
                {
                  name: "Web GPU",
                  link: "https://wgpu.rs/",
                  icon: "https://wgpu.rs/logo.min.svg",
                },
                {
                  name: "Fleet",
                  link: "https://fleet.rs/",
                  description: "he blazing fast build tool for Rust.",
                  icon: "https://fleet.rs/assets/fire.d8a79711.svg",
                },
                {
                  name: "Polars",
                  link: "https://www.pola.rs/",
                  description:
                    "Lightning-fast DataFrame library for Rust and Python",
                  icon: "https://fleet.rs/assets/fire.d8a79711.svg",
                },
              ],
            },
          ],
        },
        {
          name: "C(++)",
          children: [
            {
              name: "文档",
              children: [
                {
                  name: "C C++ 中文网",
                  link: "https://c-cpp.com/",
                  description: "c(++) 中文网",
                  icon: "https://c-cpp.com/icon.png",
                },
                {
                  name: "C 语言教程",
                  link: "https://wangdoc.com/clang/",
                  description: "C 语言教程",
                  icon: "https://wangdoc.com/clang/assets/icons/favicon-96x96.png",
                },
                {
                  name: "C++ 那些事",
                  link: "https://github.com/Light-City/CPlusPlusThings",
                  description: "C++ 那些事",
                  icon: "",
                },
                {
                  name: "现代 C++ 教程",
                  link: "https://changkun.de/modern-cpp",
                  description: "现代 C++ 教程",
                  icon: "",
                },
                {
                  name: "C++ 面试",
                  link: "https://github.com/huihut/interview",
                  description: "C++ 面试",
                  icon: "",
                },
                {
                  name: "C++ 学习资料",
                  link: "https://github.com/0voice/cpp_new_features",
                  description: "C++ 学习资料",
                  icon: "",
                },
                {
                  name: "现代 c++ 特性",
                  link: "https://github.com/AnthonyCalandra/modern-cpp-features",
                  description:
                    "A cheatsheet of modern C++ language and library features.",
                  icon: "",
                },
                {
                  name: "高性能并行编程与优化 - 课件",
                  link: "https://github.com/parallel101/course",
                },
                {
                  name: "CMake Cookbook",
                  link: "https://www.bookstack.cn/read/CMake-Cookbook/",
                  description: "CMake菜谱（CMake Cookbook中文版）",
                },
                {
                  name: "Cpp Core Guidelines",
                  link: "https://github.com/isocpp/CppCoreGuidelines",
                  description:
                    "he C++ Core Guidelines are a set of tried-and-true guidelines, rules, and best practices about coding in C++",
                },
                {
                  name: "30天自制C++服务器",
                  link: "https://github.com/yuesong-feng/30dayMakeCppServer",
                  description: "30天自制C++服务器，包含教程和源代码",
                },
              ],
            },
            {
              name: "生态",
              children: [
                {
                  name: "Nlohmann Json",
                  link: "https://github.com/nlohmann/json",
                  description: "",
                },
                {
                  name: "Spdlog",
                  link: "https://github.com/gabime/spdlog",
                  description: "",
                },
                {
                  name: "Abseil",
                  link: "https://abseil.io/",
                  description: "https://abseil.io/favicons/favicon.ico",
                },
                {
                  name: "Boost",
                  link: "https://www.boost.org/",
                  description: "Boost C++ 库",
                  icon: "https://www.boost.org/favicon.ico",
                },
                {
                  name: "Folly",
                  link: "https://github.com/facebook/folly",
                },
                {
                  name: "Poco",
                  link: "https://pocoproject.org/",
                },
                {
                  name: "Stb libraries",
                  link: "https://github.com/nothings/stb",
                  description: "Stb single-file public domain libraries",
                  icon: "https://www.boost.org/favicon.ico",
                },
                {
                  name: "Skia",
                  link: "https://skia.org/",
                  description: "2d 渲染引擎",
                },
                {
                  name: "Halide",
                  link: "https://halide-lang.org/",
                  description:
                    "A language for fast, portable computation on images and tensors",
                  icon: "",
                },
                {
                  name: "Behavior Tree",
                  link: "https://www.behaviortree.dev/",
                  description: "Behavior Tree",
                  icon: "https://www.behaviortree.dev/assets/images/favicon.png",
                },
                {
                  name: "Open GPU Data Science",
                  link: "https://rapids.ai/",
                  description: "Open GPU Data Science",
                  icon: "https://rapids.ai/assets/favicon.ico",
                },
                {
                  name: "Moose Framework",
                  link: "https://mooseframework.inl.gov/",
                  description:
                    "An open-source, parallel finite element framework",
                  icon: "https://mooseframework.inl.gov/media/moose.ico",
                },
                {
                  name: "Apache Arrow",
                  link: "https://arrow.apache.org/",
                  icon: "https://arrow.apache.org/img/favicon-32x32.png",
                },
                {
                  name: "Filament",
                  link: "https://github.com/google/filament",
                  description:
                    "Filament is a real-time physically based rendering engine",
                },
                {
                  name: "Tink",
                  link: "https://github.com/google/tink",
                  description: "Open-source cryptography library",
                },
                {
                  name: "Z3Prover",
                  link: "https://github.com/Z3Prover/z3",
                  description: "The Z3 Theorem Prover",
                },
                {
                  name: "TCMalloc",
                  link: "https://github.com/google/tcmalloc",
                  description: "TCMalloc",
                },
                {
                  name: "Concurrentqueue",
                  link: "https://github.com/cameron314/concurrentqueue",
                },
              ],
            },
          ],
        },
        {
          name: "Zig",
          children: [
            {
              name: "文档",
              children: [],
            },
            {
              name: "生态",
              children: [],
            },
          ],
        },
        {
          name: "Go",
          children: [
            {
              name: "文档",
              children: [
                {
                  name: "Go 入门指南",
                  link: "https://github.com/Unknwon/the-way-to-go_ZH_CN",
                },
                {
                  name: "Go 圣经",
                  link: "https://book.itsfun.top/gopl-zh/",
                },
                {
                  name: "Go 高级编程",
                  link: "https://chai2010.cn/advanced-go-programming-book/",
                },
                {
                  name: "Go 简明教程",
                  link: "https://geektutu.com/post/quick-golang.html",
                },
                {
                  name: "Go 高性能",
                  link: "https://geektutu.com/post/high-performance-go.html",
                },
                {
                  name: "Go 修养之路",
                  link: "https://www.yuque.com/aceld/golang/ithv8f",
                },
              ],
            },
            {
              name: "生态",
              children: [
                {
                  name: "Lodash-style Go library",
                  link: "https://github.com/samber/lo",
                  description: `A Lodash-style Go library based on Go 1.18+ Generics (map, filter, contains, find...)`,
                },
              ],
            },
          ],
        },
        {
          name: "C#",
          children: [
            {
              name: "文档",
              children: [
                {
                  name: "Maui Workshop ",
                  link: "https://github.com/dotnet-presentations/dotnet-maui-workshop",
                },
                {
                  name: "Csharp ",
                  link: "https://docs.microsoft.com/zh-cn/dotnet/csharp/",
                  icon: "https://docs.microsoft.com/favicon.ico",
                },
              ],
            },
            {
              name: "生态",
              children: [
                {
                  name: "MediatR",
                  link: "https://github.com/jbogard/MediatR",
                },
              ],
            },
          ],
        },
        {
          name: "JS",
          children: [
            {
              name: "文档",
              children: [
                {
                  name: "Wtf Js",
                  link: "https://github.com/denysdovhan/wtfjs",
                  description: "",
                  icon: "",
                },
                {
                  name: "YDKJS",
                  link: "https://github.com/getify/You-Dont-Know-JS",
                  description: "",
                  icon: "",
                },
                {
                  name: "33 Js Concepts",
                  link: "https://github.com/stephentian/33-js-concepts",
                  description: "",
                  icon: "",
                },
                {
                  name: "33 Seconds of Code",
                  link: "https://github.com/30-seconds/30-seconds-of-code",
                  description: "",
                  icon: "",
                },
                {
                  name: "The Modern JavaScript Tutorial",
                  link: "https://javascript.info/",
                  description: "",
                  icon: "https://javascript.info/img/favicon/favicon.png",
                },
                {
                  name: "React 技术揭秘",
                  link: "https://react.iamkasong.com/",
                  icon: "https://react.iamkasong.com/favicon.ico",
                },
                {
                  name: "Web Attack Cheat Sheet",
                  link: "https://github.com/riramar/Web-Attack-Cheat-Sheet",
                  description: "",
                  icon: "",
                },
                {
                  name: "木易杨前端进阶",
                  link: "https://muyiy.cn/blog/",
                  description: "",
                  icon: "",
                },
                {
                  name: "前端瓶子君",
                  link: "https://www.pzijun.cn/blog/",
                  description: "",
                  icon: "",
                },
                {
                  name: "前端进阶之道",
                  link: "https://yuchengkai.cn/docs/frontend/",
                  description: "",
                  icon: "https://yuchengkai.cn/icon.png",
                },
                {
                  name: "前端周报",
                  link: "https://github.com/ascoders/weekly",
                  description: "",
                  icon: "",
                },
                {
                  name: "Learn Web",
                  link: "https://web.dev/learn/",
                  description: "Learn Web",
                  icon: "https://web.dev/images/favicon.ico",
                },
                {
                  name: "冴羽博客",
                  link: "https://github.com/mqyqingfeng/Blog",
                  description:
                    "JavaScript深入系列、JavaScript专题系列、ES6系列、React系列。",
                },
              ],
            },
            {
              name: "生态",
              children: [
                {
                  name: "Nextjs",
                  link: "https://nextjs.org/",
                },
                {
                  name: "Bunjs",
                  link: "https://bun.sh/",
                },
                {
                  name: "Deno",
                  link: "https://deno.land/",
                },
                {
                  name: "PIXI",
                  icon: "https://pixijs.com/images/favicon.png",
                  link: "https://pixijs.com/",
                  description: "PIXI 2D Canvas Library",
                },
                {
                  name: "p5js",
                  link: "https://p5js.org/",
                  description: "p5js",
                  icon: "https://p5js.org/assets/img/favicon.ico",
                },
                {
                  name: "Threejs",
                  icon: "https://threejs.org/files/favicon.ico",
                  link: "https://threejs.org/",
                  description: "JS 3d Library",
                },
                {
                  name: "D3",
                  icon: "https://d3js.org/favicon.png",
                  link: "https://d3js.org/",
                  description: "D3 Drawing Library",
                },
                {
                  name: "Tradingview Lightweight Charts",
                  icon: "https://www.tradingview.com/static/images/favicon.ico",
                  link: "https://github.com/tradingview/lightweight-charts",
                  description: "Tradingview Lightweight Charts",
                },
                {
                  name: "Chartjs",
                  icon: "https://www.chartjs.org/favicon.ico",
                  link: "https://www.chartjs.org/",
                  description: "Chartjs",
                },
                {
                  name: "Apline",
                  icon: "https://alpinejs.dev/favicon.png",
                  link: "https://alpinejs.dev/",
                  description: "Apline Js",
                },
                {
                  name: "Honojs",
                  icon: "https://honojs.dev/favicon.ico",
                  link: "https://honojs.dev/",
                  description: "Honojs web framework",
                },
                {
                  name: "Swiperjs",
                  icon: "https://swiperjs.com/images/favicon.png",
                  link: "https://swiperjs.com/",
                  description: "Swiperjs",
                },
                {
                  name: "Frejs",
                  icon: "https://swiperjs.com/images/favicon.png",
                  link: "https://github.com/frejs/fre",
                  description: "React 简单版",
                },
                {
                  name: "Millionjs",
                  link: "https://github.com/aidenybai/million",
                  description: "Virtual DOM into the future",
                },
                {
                  name: "Use Gesture",
                  link: "https://github.com/pmndrs/use-gesture",
                  description: "手势事件库",
                  icon: "https://use-gesture.netlify.app/favicon-32x32.png?v=a2ec2f9235e6aa90a4403808b4f24dab",
                },
                {
                  name: "Fuite",
                  link: "https://github.com/nolanlawson/fuite",
                  description: "A tool for finding memory leaks in web apps",
                  icon: "",
                },
                {
                  name: "Floating UI",
                  link: "https://floating-ui.com/",
                  description: "Floating UI",
                  icon: "https://floating-ui.com/favicon.ico",
                },
                {
                  name: "Zod",
                  link: "https://zod.dev/",
                  description: "Zod 是一个以 TypeScript 为首的模式声明和验证库",
                  icon: "https://zod.dev/static/favicon-32x32.png",
                },
                {
                  name: "Mermaid",
                  link: "https://github.com/mermaid-js/mermaid",
                  description:
                    "Generation of diagram and flowchart from text in a similar manner as markdown",
                },
                {
                  name: "XState",
                  link: "https://xstate.js.org/",
                  description: "",
                  icon: "https://xstate.js.org/favicon.ico",
                },
                {
                  name: "BlurHash",
                  link: "https://blurha.sh/",
                  description:
                    "BlurHash is a compact representation of a placeholder for an image",
                },
                {
                  name: "Sqip",
                  link: "https://github.com/axe312ger/sqip",
                  description: "Sqip is a SVG-based LQIP technique.",
                },
                {
                  name: "Nanostores",
                  link: "https://github.com/nanostores/nanostores",
                },
                {
                  name: "Little State Machine",
                  link: "https://github.com/bluebill1049/little-state-machine",
                },
                {
                  name: "Lexical",
                  link: "https://lexical.dev/",
                  description: "An extensible text editor from facebook",
                  icon: "https://lexical.dev/img/favicon.ico",
                },
                {
                  name: "perspective",
                  link: "https://perspective.finos.org/",
                  description: "A data visualization and analytics component",
                  icon: "https://www.finos.org/hubfs/FINOS/finos-logo/favicon.ico",
                },
                {
                  name: "Ethereum JavaScript API",
                  link: "https://github.com/ChainSafe/web3.js",
                  description: "Ethereum JavaScript API",
                },
                {
                  name: "Lib phonenumber",
                  link: "https://github.com/google/libphonenumber",
                  description:
                    "Formatting, and validating international phone numbers.",
                },
                {
                  name: "Driver JS",
                  link: "https://kamranahmed.info/driver.js/",
                  description: "Drive user's focus across the page",
                },
                {
                  name: "Intro JS",
                  link: "https://github.com/usablica/intro.js",
                  description:
                    "Lightweight, user-friendly onboarding tour library",
                },
                {
                  name: "Headlessui",
                  link: "https://headlessui.com/",
                },
                {
                  name: "Mantine js",
                  link: "https://mantine.dev/",
                },
                {
                  name: "Radix UI",
                  link: "https://www.radix-ui.com/",
                },
                {
                  name: "iCSS",
                  link: "https://github.com/chokcoco/iCSS",
                  description: "不止于 CSS",
                },
              ],
            },
          ],
        },
        {
          name: "其他语言",
          children: [
            {
              name: "文档",
              children: [
                {
                  name: "Quick Ref",
                  link: "https://quickref.me/",
                  description:
                    "Quick Reference CheatSheet - share quick reference and cheat sheet for developers",
                  icon: "https://quickref.me/images/favicon.png?v=1",
                },
              ],
            },
            {
              name: "生态",
              children: [],
            },
          ],
        },
        {
          name: "算法",
          children: [
            {
              name: "文档",
              children: [
                {
                  name: "小浩算法",
                  link: "https://www.geekxh.com/",
                  icon: "https://www.geekxh.com/logo.png",
                },
                {
                  name: "程序厨算法基础",
                  link: "https://www.chengxuchu.com/",
                  description:
                    "一位酷爱做饭的程序员，立志用动画将算法说的通俗易懂",
                },
                {
                  name: "代码随想录",
                  link: "https://programmercarl.com/",
                  icon: "https://img-blog.csdnimg.cn/20210614201246512.png",
                },
                {
                  name: "算法通关手册",
                  link: "https://algo.itcharge.cn/",
                  icon: "https://algo.itcharge.cn/favicon.png",
                },
                {
                  name: "Path Planning",
                  link: "https://github.com/zhm-real/PathPlanning",
                  description:
                    "Common used path planning algorithms with animations.",
                },
                {
                  name: "高频 Leetcode",
                  link: "https://github.com/afatcoder/LeetcodeTop",
                  description: "汇总各大互联网公司容易考察的高频leetcode题🔥",
                },
                {
                  name: "Leetcode Cookbook",
                  link: "https://books.halfrost.com/leetcode/",
                  description: "Leetcode Go 语言解题",
                },
                {
                  name: "Labuladong 算法小抄",
                  link: "https://labuladong.gitee.io/algo/",
                  description: "刷算法全靠套路，认准 labuladong 就够了",
                  icon: "https://labuladong.gitee.io/algo/images/avatar.png",
                },
                {
                  name: "Leetcode 多语言解题",
                  link: "https://doocs.github.io/leetcode/",
                  description:
                    "多种编程语言实现 LeetCode、《剑指 Offer（第 2 版）》、《程序员面试金典（第 6 版）》题解",
                  icon: "https://doocs.github.io/leetcode/images/favicon-32x32.png",
                },
                {
                  name: "TheAlgorithms - Rust",
                  link: "https://github.com/TheAlgorithms/Rust",
                  description: "All Algorithms implemented in Rust",
                },
                {
                  name: "TheAlgorithms - C++",
                  link: "https://github.com/TheAlgorithms/C-Plus-Plus",
                  description: "All Algorithms implemented in C++",
                },
                {
                  name: "Algorithm Visualizer",
                  link: "https://algorithm-visualizer.org/",
                  description: "Algorithm Visualizer",
                  icon: "https://algorithm-visualizer.org/favicon.png",
                },
              ],
            },
            {
              name: "生态",
              children: [],
            },
          ],
        },
        {
          name: "网络",
          children: [
            {
              name: "文档",
              children: [
                {
                  name: "音视频流媒体权威资料整理，500+份文章，论文，视频，实践项目，协议，业界大神名单。",
                  link: "https://github.com/0voice/audio_video_streaming",
                  description:
                    "音视频流媒体权威资料整理，500+份文章，论文，视频，实践项目，协议，业界大神名单。",
                  icon: "",
                },
              ],
            },
            {
              name: "生态",
              children: [
                {
                  name: "LiveKit",
                  link: "https://livekit.io/",
                  description: "Open source WebRTC infrastructure",
                  icon: "https://livekit.io/favicon.ico",
                },
                {
                  name: "Mediasoup",
                  link: "https://mediasoup.org/",
                  description: "Cutting Edge WebRTC Video Conferencing",
                  icon: "https://mediasoup.org/favicons/favicon.ico?v=baz3",
                },
                {
                  name: "Berty",
                  link: "https://github.com/berty/berty",
                  description: `About Berty is a secure peer-to-peer messaging app that works with or without internet access, cellular data or trust in the network`,
                  icon: "https://berty.tech/favicon/favicon.ico",
                },
                {
                  name: "webrtc",
                  link: "https://webrtc.rs/",
                  description: "A pure Rust implementation of WebRTC",
                  icon: "https://webrtc.rs/res/webrtc.rs.ico",
                },
                {
                  name: "Pion",
                  link: "https://pion.ly/",
                  description:
                    "The Modern Stack for Web Real-Time Communication.",
                  icon: "https://pion.ly/img/pion-logo.svg",
                },
                {
                  name: "Peercalls",
                  link: "https://peercalls.com/",
                  description:
                    "Group peer to peer video calls for everyone written in Go and TypeScript",
                  icon: "https://peercalls.com/res/icon.png",
                },
              ],
            },
          ],
        },
        {
          name: "数据库",
          children: [
            {
              name: "文档",
              children: [
                {
                  name: "数据库教程",
                  link: "https://turnon.gitee.io/db-tutorial/",
                  icon: "https://turnon.gitee.io/db-tutorial/img/favicon.ico",
                },
              ],
            },
            {
              name: "生态",
              children: [
                {
                  name: "SqlC",
                  link: "https://sqlc.dev/",
                  description: "Generate type-safe code from SQL",
                },
              ],
            },
            {
              name: "产品",
              children: [
                {
                  name: "Shardingsphere",
                  link: "https://github.com/apache/shardingsphere",
                  description:
                    "Transform any database into a distributed database system",
                },
                {
                  name: "vitess",
                  link: "https://vitess.io/",
                  description: "Horizontal scaling of MySQL",
                  icon: "https://vitess.io/favicon.png",
                },
                {
                  name: "Dgraph",
                  link: "https://dgraph.io/",
                  description: "Native GraphQL Database with graph backend",
                  icon: "https://dgraph.io/wp-content/uploads/2021/06/dgraph-favicon-32.png",
                },
                {
                  name: "Databend",
                  link: "https://databend.rs/",
                  description:
                    "A modern Elasticity and Performance cloud data warehouse",
                  icon: "https://databend.rs/zh-CN/img/logo/logo-no-text.svg",
                },
                {
                  name: "ClickHouse",
                  link: "https://clickhouse.com/",
                  description:
                    "ClickHouse® is a free analytics DBMS for big data",
                  icon: "https://clickhouse.com/favicon.ico",
                },
                {
                  name: "Nebula",
                  link: "https://nebula-graph.io/",
                  description:
                    "A distributed, fast open-source graph database featuring horizontal scalability and high availability",
                  icon: "https://uploads-ssl.webflow.com/61e61f2af052b36cbf0cf94b/6269f3cd35f052217ca15cf1_icon_32_32.png",
                },
                {
                  name: "Cockroach",
                  link: "https://www.cockroachlabs.com/",
                  description:
                    "The open source, cloud-native distributed SQL database.",
                  icon: "https://crl2020.imgix.net/img/crl-32x32.png",
                },
                {
                  name: "Tikv",
                  link: "https://tikv.org/",
                  description:
                    "TiKV is a highly scalable, low latency, and easy to use key-value database",
                  icon: "https://pingcap.com/zh/favicons/favicon.ico",
                },
                {
                  name: "TiDB",
                  link: "https://pingcap.com/zh/",
                  description: "MySQL-Compatible database",
                  icon: "https://tikv.org/favicon.png",
                },
                {
                  name: "Influx",
                  link: "https://www.influxdata.com/",
                  description:
                    "InfluxDB is an open source time series platform",
                  icon: "https://www.influxdata.com/wp-content/uploads/cubo.svg",
                },
                {
                  name: "YDB",
                  link: "https://ydb.tech/",
                  description: "YDB server",
                  icon: "https://storage.yandexcloud.net/ydb-www-prod-site-assets/favicon/favicon.ico",
                },
                {
                  name: "TDengine",
                  link: "https://www.taosdata.com/",
                  description: "An open-source time-series database",
                  icon: "https://www.taosdata.com/wp-content/uploads/2021/12/favicon.ico",
                },
                {
                  name: "Neon",
                  link: "https://neon.tech/",
                  description: "Serverless Postgres",
                  icon: "https://neon.tech/favicon-32x32.png?v=7edfb4e59568029a30df63c907deb893",
                },
                {
                  name: "scylladb",
                  link: "https://www.scylladb.com/",
                  description: "Cassandra alternative",
                  icon: "https://www.scylladb.com/wp-content/themes/scylladb/favicon.ico",
                },
                {
                  name: "Dragonflydb",
                  link: "https://dragonflydb.io/",
                  description: "A modern Redis",
                  icon: "https://dragonflydb.io/img/favicon.ico",
                },
                {
                  name: "Milvus",
                  link: "https://milvus.io/",
                  description:
                    "Vector database for scalable similarity search and AI applications",
                  icon: "https://milvus.io/favicon-32x32.png?v=587ea7d315fa8ebc198a8c112e054ef6",
                },
                {
                  name: "Qdrant",
                  link: "https://qdrant.tech/",
                  description:
                    "Vector Search Engine for the next generation of AI applications",
                  icon: "https://qdrant.tech/images/favicon-32x32.png",
                },
                {
                  name: "Faiss",
                  link: "https://github.com/facebookresearch/faiss",
                  description:
                    "A library for efficient similarity search and clustering of dense vectors.",
                },
                {
                  name: "Gorse",
                  link: "https://gorse.io/",
                  description:
                    "Gorse is an open source recommendation system written in Go.",
                },
                {
                  name: "CeresDB",
                  link: "https://github.com/CeresDB/ceresdb",
                  description:
                    "CeresDB is a high-performance, distributed, schema-less, cloud native time-series database that can handle both time-series and analytics workloads",
                },
                {
                  name: "Surrealdb",
                  link: "https://surrealdb.com/",
                  icon: "https://surrealdb.com/static/webapp/favicon-a997a66737547e8ad3cac2ab9805ce13.png",
                  description:
                    "SurrealDB is the ultimate database for tomorrow's serverless, jamstack, single-page, and traditional applications.",
                },
              ],
            },
          ],
        },
        {
          name: "服务器开发",
          children: [
            {
              name: "GoFiber",
              link: "https://gofiber.io/",
              description: "Go 语言服务器亏昂加",
              icon: "https://gofiber.io/assets/images/icon.png",
            },
            {
              name: "Dapr",
              link: "https://dapr.io/",
              description:
                "Dapr is a portable, event-driven, runtime for building distributed applications across cloud and edge",
              icon: "https://dapr.io/images/favicon.ico",
            },
            {
              name: "NSQ",
              link: "https://nsq.io/",
              description: "A realtime distributed messaging platform",
              icon: "https://nsq.io/static/img/nsq_favicon.png",
            },
            {
              name: "Nats Server",
              link: "https://nats.io/",
              description: "The cloud and edge native messaging system",
              icon: "https://nats.io/favicon.ico",
            },
            {
              name: "MQTT",
              link: "https://mqtt.org/",
              description: "The Standard for IoT Messaging",
              icon: "https://mqtt.org/favicon-32x32.png",
            },
            {
              name: "DTM",
              link: "https://www.dtm.pub/",
              description: "GO语言分布式事务管理服务",
              icon: "https://www.dtm.pub/dtm.svg",
            },
            {
              name: "Redpanda",
              link: "https://redpanda.com/",
              description:
                "Redpanda is a streaming data platform for developers. Kafka API compatible.",
              icon: "https://redpanda.com/favicon.ico",
            },
            {
              name: "Pulsar",
              link: "https://pulsar.apache.org/",
              description: "Cloud-Native, Distributed Messaging and Streaming",
              icon: "https://pulsar.apache.org/img/favicon.ico",
            },
            {
              name: "Centrifugal",
              link: "https://centrifugal.dev/",
              description:
                "Scalable real-time messaging server in a language-agnostic way. Set up once and forever.",
              icon: "https://centrifugal.dev/img/favicon.png",
            },
            {
              name: "Seastar",
              link: "https://seastar.io/",
              description: "High performance server-side application framework",
              icon: "https://seastar.io/favicon.ico",
            },
            {
              name: "Oatpp",
              link: "https://oatpp.io/",
              description: "An Open Source C++ Web Framework",
              icon: "https://raw.githubusercontent.com/lganzzzo/oatpp-website-res/master/logo_x400.png",
            },
            {
              name: "Axum",
              link: "https://github.com/tokio-rs/axum",
            },
            {
              name: "Casbin",
              link: "https://casbin.org/",
              icon: "https://casbin.org/img/favicon.png",
            },
            {
              name: "Authelia",
              link: "https://www.authelia.com/",
              description:
                "The Single Sign-On Multi-Factor portal for web apps",
              icon: "https://www.authelia.com/favicon.ico",
            },
            {
              name: "Userver",
              link: "https://userver.tech/",
              description: "The C++ Asynchronous Framework",
              icon: "https://userver.tech/favicon.svg",
            },
          ],
        },
        {
          name: "运维",
          children: [
            {
              name: "云服务的开源 Alternatives",
              link: "https://github.com/RunaCapital/awesome-oss-alternatives",
              description: "云服务的开源 Alternatives",
            },
            {
              name: "Caddy",
              link: "https://caddyserver.com/",
              icon: "https://caddyserver.com/resources/images/favicon.png",
            },
            {
              name: "Traefik",
              link: "https://traefik.io/",
              icon: "https://traefik.io/favicon.svg",
            },
            {
              name: "sealos",
              link: "https://www.sealos.io/",
              description: "sealos 是以 kubernetes 为内核的云操作系统发行版",
              icon: "https://www.sealos.io/img/sealos.ico",
            },
            {
              name: "Tanzu Community Edition",
              link: "https://tanzucommunityedition.io/",
              description: "Kubernetes platform for learners and users",
              icon: "https://tanzucommunityedition.io/img/favicon.png",
            },
            {
              name: "MinIO",
              link: "https://min.io/",
              description: "Multi-Cloud Object Storage",
              icon: "https://min.io/resources/favs/apple-icon-180x180.png",
            },
          ],
        },
        {
          name: "搜索引擎",
          children: [
            {
              name: "GoFound ",
              link: "https://github.com/newpanjing/gofound",
              description: "GoFound 语言全文检索引擎",
            },
            {
              name: "Meilisearch ",
              link: "https://www.meilisearch.com/",
              description:
                "An open-source, lightning-fast, and hyper-relevant search engine",
              icon: "https://www.meilisearch.com/favicon-32x32.png",
            },
            {
              name: "Tantivy",
              link: "https://github.com/quickwit-oss/tantivy",
              description: "Rust Apache Lucene alternative",
              icon: "",
            },
            {
              name: "Sonic",
              link: "https://github.com/valeriansaliou/sonic",
              description: "An alternative to Elasticsearch",
              icon: "",
            },
          ],
        },
        {
          name: "逆向",
          children: [
            {
              name: "EdgeSecurityTeam Vulnerability",
              link: "https://github.com/EdgeSecurityTeam/Vulnerability",
              description: "此项目将不定期从棱角社区对外进行公布一些最新漏洞。",
            },
            {
              name: "Ffffffff0x 1earn",
              link: "https://github.com/ffffffff0x/1earn",
              description:
                "ffffffff0x 团队维护的安全知识框架,内容包括不仅限于 web安全、工控安全、取证、应急、蓝队设施部署、后渗透、Linux安全、各类靶机writup",
            },
          ],
        },
        {
          name: "Cheat",
          children: [
            {
              name: "Osiris",
              link: "https://github.com/danielkrupinski/Osiris",
            },
            {
              name: "Snap Genshin",
              link: "https://github.com/DGP-Studio/Snap.Genshin",
              description: "你想要的原神全家桶",
            },
            {
              name: "Waldo",
              link: "https://waldo.vision/",
              description:
                "This is a desktop application for the WALDO cheat detection software.",
              icon: "https://waldo.vision/assets/favicon.6702f20d.svg",
            },
          ],
        },
        {
          name: "游戏自动化",
          children: [
            {
              name: "GameAISDK",
              link: "https://github.com/Tencent/GameAISDK",
            },
            {
              name: "Ahk",
              link: "https://github.com/spyoungtech/ahk",
              description:
                "Python wrapper for AutoHotkey. Harness the automation power of AutoHotkey with the beauty of Python.",
            },
            {
              name: "Autohotkey",
              link: "https://www.autohotkey.com/",
              description:
                "The ultimate automation scripting language for Windows.",
            },
            {
              name: "Pine",
              link: "https://github.com/petercunha/Pine",
              description:
                "Aimbot powered by real-time object detection with neural networks, GPU accelerated with Nvidia. Optimized for use with CS:GO.",
            },
            {
              name: "Robotgo",
              link: "https://github.com/go-vgo/robotgo",
              description: "RobotGo, Go Native cross-platform GUI automation",
            },
          ],
        },
        {
          name: "推送",
          children: [
            {
              name: "Gorush",
              link: "https://github.com/appleboy/gorush",
              description: "A push notification server written in Go",
            },
          ],
        },
        {
          name: "数据集",
          children: [
            {
              name: "gopup",
              link: "https://github.com/justinzm/gopup",
            },
            {
              name: "Datasets for ML models",
              link: "https://github.com/huggingface/datasets",
            },
            {
              name: "免费接口服务",
              link: "https://github.com/fangzesheng/free-api",
              description: "收集免费的接口服务,做一个api的搬运工",
            },
            {
              name: "Public-apis",
              link: "https://github.com/public-apis/public-apis",
              description: "A collective list of free APIs",
            },
            {
              name: "行政区划API",
              link: "https://github.com/modood/Administrative-divisions-of-China",
              description:
                "中华人民共和国行政区划：省级（省份）、 地级（城市）、 县级（区县）、 乡级（乡镇街道）、 村级（村委会居委会） ，中国省市区镇村二级三级四级五级联动地址数据。",
            },
          ],
        },
      ],
    },
    {
      name: "图形视觉",
      children: [
        {
          name: "文档",
          children: [
            {
              name: "Tiny renderer",
              link: "A brief computer graphics / rendering course",
            },
          ],
        },
        {
          name: "应用开发",
          children: [
            {
              name: "Flutter",
              icon: "https://storage.googleapis.com/cms-storage-bucket/4fd0db61df0567c0f352.png",
              link: "https://flutter.dev/",
              description: "最流行的跨端应用开发",
            },
            {
              name: "Wails",
              icon: "https://wails.io/img/favicon.ico",
              link: "https://wails.io/",
              description: "Go + Web 语言开发桌面应用",
            },
            {
              name: "Tauri",
              icon: "https://tauri.app/meta/favicon-96x96.png",
              link: "https://tauri.app/",
              description: "Rust + Web 语言开发桌面应用",
            },
            {
              name: "Flet",
              icon: "https://flet.dev/img/favicon.ico",
              link: "https://flet.dev/",
              description: "Python 编译到 flutter",
            },
            {
              name: "Kraken",
              link: "https://openkraken.com/",
              description: "Web 编译到 flutter",
              icon: "https://img.alicdn.com/imgextra/i1/O1CN01u0y8XT25HxxAVpBQL_!!6000000007502-2-tps-109-103.png",
            },
            {
              name: "Node Serialport",
              link: "https://github.com/serialport/node-serialport",
              description:
                "Access serial ports with JavaScript. Linux, OSX and Windows. Welcome your robotic JavaScript overlords. Better yet, program them!",
              icon: "",
            },
          ],
        },
        {
          name: "UI",
          children: [
            {
              name: "Imgui",
              icon: "",
              link: "https://github.com/ocornut/imgui",
              description: "Imgui 即使渲染UI库",
            },
            {
              name: "Implot",
              icon: "",
              link: "https://github.com/epezent/implot",
              description: "Imgui 得 Implot 图标库",
            },
            {
              name: "Implot",
              link: "https://github.com/emilk/egui",
              description: "Rust immediate mode gui",
              icon: "",
            },
            {
              name: "GuiLite",
              link: "https://github.com/idea4good/GuiLite",
              description: "The smallest header-only GUI library",
            },
          ],
        },
        {
          name: "动画",
          children: [
            {
              name: "SFML",
              link: "https://www.sfml-dev.org/",
              description: "",
              icon: "https://www.sfml-dev.org/images/favicon.ico",
            },
            {
              name: "SDL",
              link: "https://www.libsdl.org/",
              description: "",
              icon: "https://www.libsdl.org/favicon.ico",
            },
            {
              name: "Openframeworks",
              link: "https://openframeworks.cc/",
              description: "",
              icon: "https://openframeworks.cc/favicon.ico",
            },
            {
              name: "Cinder",
              link: "https://libcinder.org/",
              description: "",
              icon: "https://libcinder.org/static/favicon.png",
            },
            {
              name: "Nannou",
              link: "https://nannou.cc/",
              description: "",
              icon: "https://nannou.cc/favicon-32x32.png?v=e38d1d2ae2be6e7a0b8843f71f391046",
            },
            {
              name: "Lottie",
              link: "https://lottiefiles.com/",
              description: "",
              icon: "https://lottiefiles.com/favicons-new/apple-icon-57x57.png",
            },
            {
              name: "Rive",
              link: "https://rive.app/",
              description: "",
              icon: "https://rive.app/favicon.ico",
            },
            {
              name: "Manim 数学动画",
              link: "https://www.manim.community/",
              description: "Manim 数学动画",
              icon: "https://www.manim.community/favicon-32x32.png",
            },
            {
              name: "Pag",
              link: "https://pag.io/",
              description: "AE 导出到各平台",
              icon: "https://pag.io/img/favicon.png",
            },
            {
              name: "Cascadeur",
              link: "https://cascadeur.com/",
              description:
                "3D animation software for physics-based character animation",
              icon: "https://cascadeur.com/favicon/favicon_32.png",
            },
            {
              name: "Learn OpenGL 中文版",
              link: "https://learnopengl-cn.github.io/",
              description: "Learn OpenGL 中文版",
              icon: "https://learnopengl-cn.github.io/img/favicon.ico",
            },
          ],
        },
        {
          name: "游戏",
          children: [
            {
              name: "Phaser",
              icon: "https://phaser.io/favicon.ico",
              link: "https://phaser.io/",
              description: "Phaser 2D Game engine",
            },
            {
              name: "Babylonjs",
              icon: "https://www.babylonjs.com/assets/favicon.ico",
              link: "https://www.babylonjs.com/",
              description: "JS 3d Game engine",
            },
            {
              name: "Cocos",
              link: "https://www.cocos.com/",
              icon: "https://www.cocos.com/wp-content/themes/cocos/image/favicon.ico",
              description: "",
            },
            {
              name: "Raylib",
              link: "https://www.raylib.com/",
              icon: "https://www.raylib.com/favicon.ico",
              description: "",
            },
            {
              name: "Godot",
              link: "https://godotengine.org/",
              description: "Godot 游戏引擎",
              icon: "https://godotengine.org/themes/godotengine/assets/favicon.png",
            },
            {
              name: "Bevy Engine",
              link: "https://bevyengine.org/",
              description: "Rust 游戏引擎",
              icon: "https://bevyengine.org/assets/favicon.png",
            },
            {
              name: "Unity",
              link: "https://unity.com/",
              description: "Unity 游戏引擎",
              icon: "https://unity.com/themes/contrib/unity_base/images/favicons/favicon.svg?v=4",
            },
            {
              name: "Unity Assets Store",
              link: "https://assetstore.unity.com/",
              description: "Unity 游戏引擎资源",
              icon: "https://unity-assetstorev2-prd.storage.googleapis.com/cdn-origin/images/favicons/favicon.ico",
            },
            {
              name: "虚幻引擎",
              link: "https://www.unrealengine.com/",
              description: "虚幻游戏引擎",
              icon: "https://www.unrealengine.com/favicon-32x32.png?v=5",
            },
            {
              name: "minetest",
              link: "https://www.minetest.net/",
              description: "An open source voxel game engine",
              icon: "https://www.minetest.net/media/favicon/96x96.png",
            },
            {
              name: "HybridCLR",
              link: "https://github.com/focus-creative-games/hybridclr",
              description:
                "一个特性完整、零成本、高性能、低内存的近乎完美的Unity全平台原生c#热更方案",
            },
            {
              name: "Unity3D Training",
              link: "https://github.com/XINCGer/Unity3DTraining",
              description: "Unity的练习项目",
            },
          ],
        },
        {
          name: "音效",
          children: [],
        },
        {
          name: "资源",
          children: [
            {
              name: "开发者设计资源",
              link: "https://github.com/bradtraversy/design-resources-for-developers",
            },
            {
              name: "Cocos Creator 游戏资源合集",
              link: "https://github.com/Leo501/awesome-CocosCreator",
              description: "Cocos Creator 游戏资源合集",
            },
            {
              name: "Cocos 资料大全",
              link: "https://github.com/fusijie/Cocos-Resource",
              description: "Cocos 资料大全",
            },
            {
              name: "方舟像素字体",
              link: "https://github.com/TakWolf/ark-pixel-font",
              description: "方舟像素字体",
            },
            {
              name: "赫蹏",
              link: "https://sivan.github.io/heti/",
              description: "中文排版",
              icon: "https://sivan.github.io/heti/favicon.svg",
            },
            {
              name: "Iconify",
              link: "https://iconify.design/",
            },
            {
              name: "Unsplash",
              link: "https://unsplash.com/",
              description:
                "Beautiful, free images and photos that you can download and use for any project.",
              icon: "https://unsplash.com/favicon-32x32.png",
            },
            {
              name: "Material Design",
              link: "https://m3.material.io/",
              description: "谷歌 Material Design",
              icon: "https://m3.material.io/static/assets/m3-favicon.svg",
            },
            {
              name: "Css Icon",
              link: "https://css.gg/",
              description: "Open-source CSS, SVG and Figma UI Icons",
              icon: "https://css.gg/fav/favicon-96x96.png",
            },
            {
              name: "Css Buttons",
              link: "https://ui-buttons.web.app/",
              description: "100 Modern CSS Buttons",
              icon: "https://ui-buttons.web.app/favicon.ico",
            },
            {
              name: "Undraw",
              link: "https://undraw.co/",
            },
          ],
        },
        {
          name: "CV",
          children: [
            {
              name: "Learn OpenCV",
              link: "https://learnopencv.com/",
              description: "Learn OpenCV",
              icon: "https://learnopencv.com/wp-content/uploads/2017/04/cropped-favicon-512x512-192x192.png",
            },
            {
              name: "OpenCV中文官方文档",
              link: "https://woshicver.com/",
              description: "OpenCV中文官方文档",
              icon: "https://woshicver.com/img/favicon.ico",
            },
          ],
        },
        {
          name: "OCR",
          children: [
            {
              name: "Chineseocr lite",
              link: "https://github.com/DayBreak-u/chineseocr_lite",
            },
            {
              name: "EasyOCR",
              link: "https://github.com/JaidedAI/EasyOCR",
            },
            {
              name: "PaddleOCR",
              link: "https://github.com/PaddlePaddle/PaddleOCR",
            },
          ],
        },
        {
          name: "模拟仿真",
          children: [
            {
              name: "ZENO",
              link: "https://zenustech.com/",
              description: "For the imagineer inside you",
              icon: "https://zenustech.com/favicon.ico",
            },
          ],
        },
      ],
    },
    {
      name: "机器学习",
      children: [
        {
          name: "深度学习",
          children: [
            {
              name: "文档",
              children: [
                {
                  name: "深度学习文论精读",
                  link: "https://github.com/mli/paper-reading",
                  description: "深度学习经典、新论文逐段精读",
                  icon: "",
                },
                {
                  name: "Machine Learning Cheat Sheet",
                  link: "https://github.com/soulmachine/machine-learning-cheat-sheet",
                },
                {
                  name: "PyTorch 中文教程 & 文档",
                  link: "https://pytorch.apachecn.org/",
                },
                {
                  name: "机器学习实战",
                  link: "https://cuijiahua.com/blog/ml/",
                  icon: "https://cuijiahua.com/wp-content/uploads/2018/01/favicon-1.ico",
                },
                {
                  name: "深度学习500问",
                  link: "https://github.com/scutan90/DeepLearning-500-questions",
                },
                {
                  name: "动手学深度学习",
                  link: "https://zh-v2.d2l.ai/",
                  icon: "https://zh-v2.d2l.ai/_static/favicon.png",
                },
                {
                  name: "Ai Edu",
                  link: "https://microsoft.github.io/ai-edu/",
                  icon: "https://microsoft.github.io/ai-edu/assets/images/favicon.png",
                },
                {
                  name: "计算机视觉实战演练：算法与应用",
                  link: "https://charmve.github.io/computer-vision-in-action/",
                  description: "UI Automation Framework for Games and Apps",
                  icon: "https://raw.githubusercontent.com/Charmve/computer-vision-in-action/main/res/ui/favicon.ico",
                },
                {
                  name: "机器学习系统：设计和实现",
                  link: "https://openmlsys.github.io/",
                  description: "机器学习系统：设计和实现",
                  icon: "https://openmlsys.github.io/_static/favicon.png",
                },
              ],
            },
            {
              name: "生态",
              children: [
                {
                  name: "Nvidia-triton-inference-server",
                  link: "https://developer.nvidia.com/nvidia-triton-inference-server",
                  description: "",
                  icon: "https://developer.nvidia.com/sites/all/themes/devzone_new/favicon.ico",
                },
                {
                  name: "A lite AI Toolkit",
                  link: "https://github.com/DefTruth/lite.ai.toolkit",
                  description:
                    "A lite C++ toolkit of awesome AI models with ONNXRuntime, NCNN, MNN and TNN. YOLOX, YOLOP, YOLOv6, YOLOR, MODNet, YOLOX, YOLOv7, YOLOv5. MNN, NCNN, TNN, ONNXRuntime, CPU/GPU.",
                },
                {
                  name: "oneflow",
                  link: "http://www.oneflow.org/a/chanpin/oneflow/",
                  icon: "http://www.oneflow.org/favicon.ico",
                },
                {
                  name: "LightGBM",
                  link: "https://github.com/microsoft/LightGBM",
                  description:
                    "A fast, distributed, high performance gradient boosting (GBT, GBDT, GBRT, GBM or MART) framework",
                },
                {
                  name: "Reshade",
                  link: "https://github.com/crosire/reshade",
                  description:
                    "A generic post-processing injector for games and video software.",
                },
              ],
            },
          ],
        },
        {
          name: "自然语言处理",
          children: [
            {
              name: "文档",
              children: [],
            },
            {
              name: "生态",
              children: [
                {
                  name: "spacy",
                  link: "https://spacy.io/",
                  description:
                    "Industrial-strength Natural Language Processing (NLP) in Python",
                  icon: "https://spacy.io/icons/icon-48x48.png",
                },
                {
                  name: "HanLP",
                  link: "https://hanlp.hankcs.com/",
                  description: "面向生产环境的前沿多语种自然语言处理技术",
                  icon: "https://hanlp.hankcs.com/favicon.ico",
                },
                {
                  name: "AI拟声",
                  link: "https://github.com/babysor/MockingBird",
                  description: "5秒内克隆您的声音并生成任意语音内容",
                  icon: "",
                },
              ],
            },
          ],
        },
        {
          name: "图像视频处理",
          children: [
            {
              name: "文档",
              children: [],
            },
            {
              name: "生态",
              children: [
                {
                  name: "Waifu2x",
                  link: "https://github.com/AaronFeng753/Waifu2x-Extension-GUI",
                  description:
                    "Photo/Video/GIF enlargement and Video frame interpolation using machine learning",
                  icon: "",
                },
                {
                  name: "Ailab",
                  link: "https://github.com/bilibili/ailab",
                  description: "图片放大",
                  icon: "",
                },
                {
                  name: "MMEditing",
                  link: "https://github.com/open-mmlab/mmediting",
                  description:
                    "MMEditing 是基于 PyTorch 的图像&视频编辑开源工具箱。",
                  icon: "",
                },
                {
                  name: "Lama",
                  link: "https://github.com/saic-mdal/lama",
                  description:
                    "LaMa Image Inpainting, Resolution-robust Large Mask Inpainting with Fourier Convolutions, WACV 2022",
                  icon: "",
                },
                {
                  name: "CogVideo",
                  link: "https://github.com/THUDM/CogVideo",
                  description: "Text-to-video generation.",
                  icon: "",
                },
                {
                  name: "Deepfake",
                  link: "https://github.com/sensity-ai/dot",
                  description: "The Deepfake Offensive Toolkit",
                  icon: "",
                },
                {
                  name: "Open3D",
                  link: "http://www.open3d.org/",
                  description: "A Modern Library for 3D Data Processing",
                  icon: "http://www.open3d.org/wordpress/wp-content/uploads/2018/10/open3d_logo_mini-1-150x150.png",
                },
                {
                  name: "Caire",
                  link: "https://github.com/esimov/caire",
                  description: "Golang Content aware image resize library",
                },
                {
                  name: "Animegan2 Pytorch",
                  link: "https://github.com/bryandlee/animegan2-pytorch",
                  description: "PyTorch implementation of AnimeGANv2",
                },
                {
                  name: "音轨分离库",
                  link: "https://research.deezer.com/projects/spleeter.html",
                  description:
                    "A Fast and Efficient Music Source Separation Tool with Pre-Trained Models",
                },
                {
                  name: "Noise Torch",
                  link: "https://github.com/noisetorch/NoiseTorch",
                  description:
                    "Real-time microphone noise suppression on Linux.",
                },
                {
                  name: "NUWA",
                  link: "https://github.com/microsoft/NUWA",
                  description:
                    "A unified 3D Transformer Pipeline for visual synthesis",
                },
                {
                  name: "Mediapipe",
                  link: "https://mediapipe.dev/",
                  description:
                    "MediaPipe offers open source cross-platform, customizable ML solutions for live and streaming media.",
                  icon: "https://mediapipe.dev/assets/img/favicon.svg",
                },
                {
                  name: "Instant ngp",
                  link: "https://github.com/NVlabs/instant-ngp",
                  description:
                    "Instant neural graphics primitives: lightning fast NeRF and more",
                  icon: "",
                },
                {
                  name: "Robust Video Matting",
                  link: "https://github.com/PeterL1n/RobustVideoMatting",
                  description:
                    "Robust Video Matting in PyTorch, TensorFlow, TensorFlow.js, ONNX, CoreML!",
                  icon: "",
                },
                {
                  name: "Mitsuba 3",
                  link: "https://www.mitsuba-renderer.org/",
                  description: "A Retargetable Forward and Inverse Renderer",
                  icon: "https://www.mitsuba-renderer.org/favicon.ico",
                },
              ],
            },
          ],
        },
        {
          name: "物体检查识别",
          children: [
            {
              name: "文档",
              children: [],
            },
            {
              name: "生态",
              children: [
                {
                  name: "Label Studio",
                  link: "https://labelstud.io/",
                  description: "Open Source Data Labeling Tool",
                  icon: "https://assets.website-files.com/612013f17754cb859455543d/612e022d890ad68ea8e9a53b_favicon.ico",
                },
                {
                  name: "LabelImg",
                  link: "https://github.com/heartexlabs/labelImg",
                  description:
                    "LabelImg is a graphical image annotation tool and label object bounding boxes in images",
                },
                {
                  name: "Openpose",
                  link: "https://github.com/CMU-Perceptual-Computing-Lab/openpose",
                },
                {
                  name: "MMdetection",
                  link: "https://github.com/open-mmlab/mmdetection",
                  description: "OpenMMLab Detection Toolbox and Benchmark",
                },
                {
                  name: "Paddle Detection",
                  link: "https://github.com/PaddlePaddle/PaddleDetection",
                  description:
                    "Object Detection toolkit based on PaddlePaddle. ",
                },
                {
                  name: "Airtest",
                  link: "https://github.com/AirtestProject/Airtest",
                  description: "UI Automation Framework for Games and Apps",
                },
                {
                  name: "Detectron2",
                  link: "https://github.com/facebookresearch/detectron2",
                  description:
                    "Detectron2 is a platform for object detection, segmentation and other visual recognition tasks.",
                },
              ],
            },
          ],
        },
        {
          name: "计算智能",
          children: [
            {
              name: "文档",
              children: [],
            },
            {
              name: "生态",
              children: [],
            },
          ],
        },
        {
          name: "强化学习",
          children: [
            {
              name: "文档",
              children: [
                {
                  name: "蘑菇书EasyRL",
                  link: "https://datawhalechina.github.io/easy-rl",
                  description: "",
                },
              ],
            },
            {
              name: "生态",
              children: [],
            },
          ],
        },
        {
          name: "自动驾驶",
          children: [
            {
              name: "Carla",
              link: "http://carla.org/",
              description:
                "Open-source simulator for autonomous driving research",
              icon: "http://carla.org/img/logo/favicon.png",
            },
            {
              name: "AirSim",
              link: "https://github.com/microsoft/AirSim",
            },
          ],
        },
        {
          name: "Python",
          children: [
            {
              name: "Comprehensive Python Cheatsheet",
              link: "https://github.com/gto76/python-cheatsheet",
              description: "Comprehensive Python Cheatsheet",
              icon: "",
            },
            {
              name: "Python sheets",
              link: "https://www.pythonsheets.com/",
              description: "Python sheets",
              icon: "",
            },
            {
              name: "Wtf Python",
              link: "https://github.com/leisurelicht/wtfpython-cn",
              description: "Wtf Python",
              icon: "",
            },
            {
              name: "Python Patterns",
              link: "https://github.com/faif/python-patterns",
              description: "Python Patterns",
              icon: "",
            },
            {
              name: "Gradio",
              link: "https://www.gradio.app/",
              description: "Build & Share Delightful Machine Learning Apps",
              icon: "https://www.gradio.app/assets/img/logo.png",
            },
          ],
        },
        {
          name: "Trading Bot",
          children: [
            {
              name: "Freqtrade",
              link: "https://www.freqtrade.io/",
              description: "Free, open source crypto trading bot",
              icon: "https://www.freqtrade.io/en/stable/images/logo.png",
            },
            {
              name: "FinRL",
              link: "https://github.com/AI4Finance-Foundation/FinRL",
              description:
                "he first open-source project for financial reinforcement learning. Please star.",
            },
            {
              name: "Openbb",
              link: "https://openbb.co/",
              description: "Investment Research for Everyone, Anywhere.",
              icon: "https://openbb.co/favicons/favicon-32x32.png",
            },
            {
              name: "Lean",
              link: "https://www.lean.io",
              description:
                "Lean Algorithmic Trading Engine by QuantConnect (Python, C#)",
              icon: "https://www.lean.io/lean-header-icon.ico",
            },
          ],
        },
      ],
    },
    {
      name: "工具",
      children: [
        {
          name: "桌面",
          children: [
            {
              name: "Deskreen",
              link: "https://deskreen.com/",
              description: "局域网桌面",
              icon: "https://deskreen.com/favicon.ico",
            },
            {
              name: "Rustdesk",
              link: "https://rustdesk.com/",
              description: "远程桌面",
              icon: "https://rustdesk.com/images/favicon.png",
            },
            {
              name: "ShareX",
              link: "https://getsharex.com/",
              description: "桌面截图",
              icon: "https://getsharex.com/favicon.ico",
            },
            {
              name: "Windows launcher",
              link: "https://github.com/Wox-launcher/Wox",
              description: "PC 启动器",
              icon: "",
            },
            {
              name: "Sonic pi",
              link: "https://sonic-pi.net/",
              description:
                "Sonic Pi is a code-based music creation and performance tool.",
              icon: "",
            },
            {
              name: "Aseprite",
              link: "https://www.aseprite.org/",
              description: "",
              icon: "https://www.aseprite.org/assets/images/favicon.png",
            },
            {
              name: "Open CAD",
              link: "https://openscad.org/",
              icon: "https://openscad.org/assets/img/logo.png",
            },
            {
              name: "Hitomi-Downloader 视频下载",
              link: "https://github.com/KurtBestor/Hitomi-Downloader",
            },
            {
              name: "Downkyi",
              link: "https://github.com/leiurayer/downkyi",
              description: "哔哩哔哩下载姬",
            },
            {
              name: "NextSSH",
              link: "https://codemutex.com/",
              description: "SSH 工具",
              icon: "https://codemutex.com/favicon.ico",
            },
            {
              name: "视频抖动平衡",
              link: "https://gyroflow.xyz/",
              description: "视频抖动平衡",
              icon: "https://gyroflow.xyz/favicon.ico",
            },
            {
              name: "QGIS",
              link: "https://qgis.org/",
              description:
                "A Free and Open Source Geographic Information System",
            },
            {
              name: "Warp Terminal",
              link: "https://github.com/warpdotdev/Warp",
              description: "Warp modern Terminal",
              icon: "https://assets-global.website-files.com/62176f9ffac2c484f913de2a/6228aef0377caa51b5764d94_favicon.png",
            },
            {
              name: "OBS",
              link: "https://obsproject.com/",
              icon: "https://obsproject.com/favicon-96x96.png",
            },
            {
              name: "Tooll",
              link: "https://github.com/still-scene/t3",
              description:
                "Tooll 3 is an open source software to create realtime motion graphics",
            },
            {
              name: "texstudio",
              link: "https://www.texstudio.org/",
              description: "LaTeX editor",
              icon: "https://www.texstudio.org/images/texstudio.ico",
            },
            {
              name: "Free vpn",
              link: "https://freevpn.win/",
              description: "Free vpn",
              icon: "https://freevpn.win/favicon.ico",
            },
            {
              name: "Cutter",
              link: "https://cutter.re/",
              description: "A powerful multi-platform reverse engineering tool",
              icon: "https://cutter.re/assets/images/favicon.png",
            },
            {
              name: "x64dbg",
              link: "https://x64dbg.com/",
              description: "An open-source binary debugger for Windows,",
              icon: "https://x64dbg.com/img/favicon.ico",
            },
            {
              name: "Rnote",
              link: "https://github.com/flxzt/rnote",
              description: "Sketch and take handwritten notes.",
              icon: "",
            },
            {
              name: "ImHex",
              link: "https://imhex.werwolv.net/",
              description: "A Hex Editor",
              icon: "https://imhex.werwolv.net/assets/icon.ico",
            },
            {
              name: "Material Maker",
              link: "https://www.materialmaker.org/",
              description:
                "Material Maker is a procedural PBR (Physically Based Rendering) materials authoring tool, based on the Godot Engine.",
              icon: "https://www.materialmaker.org/favicon.ico",
            },
            {
              name: "WindTerm",
              link: "https://github.com/kingToolbox/WindTerm",
              description:
                "A professional cross-platform SSH/Sftp/Shell/Telnet/Serial terminal.",
            },
          ],
        },
        {
          name: "线上",
          children: [
            {
              name: "Notion 笔记",
              link: "https://www.notion.so/",
              description: "",
              icon: "https://www.notion.so/images/favicon.ico",
            },
            {
              name: "Docsmall 文档压缩",
              link: "https://docsmall.com/",
              description: "",
              icon: "https://docsmall.com/favicon.png",
            },
            {
              name: "Penpot UI 设计工具",
              link: "https://penpot.app/",
              description: "",
              icon: "https://penpot.app/images/favicon.png",
            },
            {
              name: "3D 在线模型",
              link: "https://spline.design/",
              description: "",
              icon: "https://spline.design/images/icon_favicon32x32.png",
            },
            {
              name: "Web3 Files",
              link: "https://web3.storage/",
              description: "Store data on the decentralized web",
              icon: "https://web3.storage/favicon-32x32.png",
            },
            {
              name: "File Doge",
              link: "https://filedoge.com/",
              description: "File Doge",
              icon: "https://filedoge.com/favicon.png",
            },
            {
              name: "阿里云盘找资源",
              link: "https://zhaoziyuan.me/",
              icon: "https://zhaoziyuan.me/favicon.ico?v=35",
            },
            {
              name: "kalidoface",
              link: "https://kalidoface.com/",
              description: "Live2D face tracking",
              icon: "https://yeemachine.github.io/k2021/favicon/kalidoface/manifest-icon-192.png",
            },
            {
              name: "Nginx Config Tool",
              link: "https://www.digitalocean.com/community/tools/nginx",
              icon: "https://www.digitalocean.com/_next/static/media/favicon-32x32.b7ef9ede.png",
            },
            {
              name: "反向词典",
              link: "https://wantwords.net/",
              icon: "https://wantwords.net/static/image/zm2.ico",
            },
            {
              name: "Svgco",
              link: "https://svgco.de/",
              description: "Convert raster images to vector graphics",
              icon: "https://svgco.de/favicon.svg",
            },
            {
              name: "Diagrams",
              link: "https://app.diagrams.net/",
              description: "在线画流程图",
              icon: "https://app.diagrams.net/images/favicon-32x32.png",
            },
          ],
        },
        {
          name: "组件",
          children: [
            {
              name: "Croc",
              link: "https://github.com/schollz/croc",
              description:
                "Easily and securely send things from one computer to another",
              icon: "",
            },
            {
              name: "Fq",
              link: "https://github.com/wader/fq",
              description: "jq for binary formats",
              icon: "",
            },
            {
              name: "Wrk",
              link: "https://github.com/wg/wrk",
              description: "Modern HTTP benchmarking tool",
              icon: "",
            },
            {
              name: "k6",
              link: "https://k6.io/",
              description:
                "A modern load testing tool, using Go and JavaScript ",
              icon: "https://k6.io/favicon-32x32.png?v=b39a6f3e0dc925c8ec4f77e0a65490e9",
            },
            {
              name: "Mitmproxy HTTPS proxy.",
              link: "https://mitmproxy.org/",
              description:
                "Mitmproxy is a free and open source interactive HTTPS proxy.",
              icon: "https://mitmproxy.org/favicon.ico",
            },
            {
              name: "Z Command",
              link: "https://github.com/ajeetdsouza/zoxide",
              description: "A smarter cd command. Supports all major shells.",
              icon: "",
            },
            {
              name: "Frp",
              link: "https://github.com/fatedier/frp",
              description: "A fast reverse proxy",
            },
            {
              name: "Rathole",
              link: "https://github.com/rapiz1/rathole",
              description: "Rust alternative to frp and ngrok",
            },
            {
              name: "Jumpserver",
              link: "https://www.jumpserver.org/",
              description: "JumpServer 开源堡垒机",
              icon: "https://www.jumpserver.org/images/logo/favicon.ico",
            },
            {
              name: "Miniserve",
              link: "https://github.com/svenstaro/miniserve",
              description: "Serve some files over HTTP right now",
              icon: "",
            },
            {
              name: "Atuin",
              link: "https://atuin.sh/",
              description: "The same shell history everywhere!",
              icon: "https://atuin.sh/favicon-32x32.png",
            },
            {
              name: "Air",
              link: "https://github.com/cosmtrek/air",
              description: "Live reload for Go apps",
            },
            {
              name: "Trojan-gfw",
              link: "https://github.com/trojan-gfw/trojan",
              description:
                "An unidentifiable mechanism that helps you bypass GFW",
            },
            {
              name: "Bore",
              link: "https://github.com/ekzhang/bore",
              description:
                "Bore is a simple CLI tool for making tunnels to localhost",
            },
            {
              name: "Ngrok",
              link: "https://ngrok.com/",
              description:
                "Bore is a simple CLI tool for making tunnels to localhost",
            },
            {
              name: "Zeek",
              link: "https://zeek.org/",
              description: "An Open Source Network Security Monitoring Tool",
            },
          ],
        },
        {
          name: "商品",
          children: [
            {
              name: "Stereolabs",
              link: "https://www.stereolabs.com/",
              description: "Stereo Camera",
            },
            {
              name: "Coral AI device",
              link: "https://coral.ai/",
              description: "Stereo Camera",
            },
          ],
        },
      ],
    },
  ],
};

export default navs;
