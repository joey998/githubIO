module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/assets/images/naruto.jpg' }],
  ],
  title: "铭铭可可",
  themeConfig: {
    logo: "/assets/images/naruto.jpg",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "前端",
        items: [
          { text: "html", link: "/html/" },
          { text: "css", link: "/css/" },
          { text: "javascript", link: "/javascript/" }
        ]
      },
      {
        text: "后端",
        items: [
          { text: "node", link: "/node/" },
          { text: "python", link: "/python/" }
        ]
      },
      {
        text: "运维",
        items: [
          { text: "linux", link: "/linux/" }
        ]
      },
      { text: "GitHub", link: "https://github.com/joey998" }
    ],
    sidebar: {
      "/html/": [
        "",
        "autocapitalize"
      ],
      "/css/": [
        "",
        "flex",
        "grid"
      ],
      "/javascript/": [
        "",
        "this指向",
        "原型链说明",
        "遍历里面使用async"
      ],
      "/node/": [
        "",
        {
          title: "webpack",
          children: [
            "webpack使用说明",
            "webpack-wds",
          ]
        },
        {
          title: 'eslint',
          children: [
            "eslint使用说明"
          ]
        }
      ],
      "/python/": [
        ""
      ],
      "/linux/": [
        "",
        "linux终端打印文本颜色",
        "windows10免密登录",
        {
          title: "git合集",
          children: [
            ["git-ssh连接", "ssh连接"],
            ["git-搭建一个git服务器", "搭建一个git服务器"],
            ["git-免密推送", "免密推送"]
          ]
        }
      ],
    }
  }
}