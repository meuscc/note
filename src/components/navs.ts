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
              name: "计算机体系结构基础\n",
              link: "https://foxsen.github.io/archbase/",
              description: "计算机体系结构基础",
              icon: "https://foxsen.github.io/favicon.ico",
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
                  link: "https://github.com/changkun/modern-cpp-tutorial",
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
                  name: "Learn OpenGL 中文版",
                  link: "https://learnopengl-cn.github.io/",
                  description: "Learn OpenGL 中文版",
                  icon: "https://learnopengl-cn.github.io/img/favicon.ico",
                },
              ],
            },
            {
              name: "生态",
              children: [
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
              children: [],
            },
          ],
        },
        {
          name: "C#",
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
              children: [],
            },
          ],
        },
        {
          name: "数据库",
          children: [
            {
              name: "文档",
              children: [],
            },
            {
              name: "生态",
              children: [
                {
                  name: "Shardingsphere",
                  link: "https://github.com/apache/shardingsphere",
                  description:
                    "Transform any database into a distributed database system",
                },
              ],
            },
          ],
        },
        {
          name: "服务器开发",
          children: [
            {
              name: "LiveKit",
              link: "https://livekit.io/",
              description: "Open source WebRTC infrastructure",
              icon: "https://livekit.io/favicon.ico",
            },
            {
              name: "GoFiber",
              link: "https://gofiber.io/",
              description: "Go 语言服务器亏昂加",
              icon: "https://gofiber.io/assets/images/icon.png",
            },
            {
              name: "Berty",
              link: "https://github.com/berty/berty",
              description: `About Berty is a secure peer-to-peer messaging app that works with or without internet access, cellular data or trust in the network`,
              icon: "https://berty.tech/favicon/favicon.ico",
            },
          ],
        },
        {
          name: "运维",
          children: [],
        },
      ],
    },
    {
      name: "图形视觉",
      children: [
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
              name: "Material Design",
              icon: "https://m3.material.io/static/assets/m3-favicon.svg",
              link: "https://m3.material.io/",
              description: "谷歌 Material Design",
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
          ],
        },
        {
          name: "CV",
          children: [],
        },
        {
          name: "OCR",
          children: [],
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
              ],
            },
            {
              name: "生态",
              children: [],
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
              children: [],
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
              children: [],
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
              children: [],
            },
            {
              name: "生态",
              children: [],
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
          ],
        },
      ],
    },
  ],
};

export default navs;
