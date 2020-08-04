module.exports = {
  title: '码出高薪 —— 刘佳',
  description: '我的博客',
  // 最后一次 git 提交的 UNIX 时间戳
  lastUpdated: 'Last Updated', 
  // 添加浏览器图标
  head: [
    ['link', { rel: 'icon', href: `/images/favicon.ico` }],
    [
      "script",
      {},
      ` var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?83a07094178e7c85aab8d4db45acadf5";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(hm, s);
        })();
      `
    ]
  ],
  logo: '/images/mape.png',
  sidebarDepth: 2,
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '编程语言',
        ariaLabel: 'dev language Menu',
        items: [{
            text: 'Java',
            link: '/dev/Java/'
          },
          {
            text: 'Python',
            link: '/dev/Python/'
          }
        ]
      },
      {
        text: 'UI自动化测试',
        ariaLabel: 'automation test',
        items: [{
            text: 'Selenium',
            link: '/selenium/'
          },
          {
            text: 'Appium',
            link: '/appium/'
          }
        ]
      },
      {
        text: '性能测试',
        ariaLabel: 'performance Menu',
        items: [{
            text: 'Jmeter',
            link: '/jmeter/'
          },
          {
            text: 'LoadRunner',
            link: '/loadRunner/'
          }
        ]
      },
      {
        text: 'DevOps',
        ariaLabel: 'devOps Menu',
        items: [{
            text: 'Docker',
            link: '/docker/'
          },
          {
            text: 'K8S',
            link: '/k8s/'
          },
          {
            text: 'Jenkins',
            link: '/jenkins/'
          }
        ]
      },
      {
        text: '算法',
        link: '/algorithm'
      },
      {
        text: '加入我',
        link: 'http://www.9coding.com'
      }
    ],
    sidebar:
      [
        {
          title: 'Java',   // 必要的
          path: '/dev/Java',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/dev/Java/Java基础-面向对象的特征.md',
            '/dev/Java/Java基础-final, finally, finalize 的区别.md',
            '/dev/Java/Java进阶.md',
            '/dev/Java/Java精讲.md'
          ]
        },
      ]
  }
}