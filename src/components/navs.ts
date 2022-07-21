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
                {
                  name: "Fleet",
                  link: "https://fleet.rs/",
                  description: "he blazing fast build tool for Rust.",
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
                  name: "Nlohmann Json",
                  link: "https://github.com/nlohmann/json",
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
              name: "Sealyun",
              link: "https://www.sealyun.com/",
              description: "sealos 是以 kubernetes 为内核的云操作系统发行版",
              icon: "https://www.sealyun.com/img/sealos.ico",
            },
            {
              name: "Tanzu Community Edition",
              link: "https://tanzucommunityedition.io/",
              description: "Kubernetes platform for learners and users",
              icon: "https://tanzucommunityedition.io/img/favicon.png",
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
          ],
        },
        {
          name: "逆向",
          children: [
            {
              name: "Osiris",
              link: "https://github.com/danielkrupinski/Osiris",
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
              children: [
                {
                  name: "spacy",
                  link: "https://spacy.io/",
                  description:
                    "Industrial-strength Natural Language Processing (NLP) in Python",
                  icon: "https://spacy.io/icons/icon-48x48.png",
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
          ],
        },
      ],
    },
  ],
};

export default navs;
