module.exports = {
  title: 'ZY blog',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: './img/logoBlog.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  serviceWorker: true, // 是否开启 PWA
  plugins: [
    "vuepress-plugin-cat",
  ],
  themeConfig: {
    nav:[ // 导航栏配置
      {text: 'GitHub', link: 'https://github.com/ZY19960516'}      
    ],
    sidebar: [
      ['/','Home'],
      {
        title: 'css',
        collapsable: false,
        children: [
          ['/cssModel/','css']
        ]
      },
      {
        title: 'js',
        collapsable: true,
        children: [
          ['/jsModel/','js']
        ]
      },
      {
        title: 'vue',
        collapsable: true,
        children: [
          ['/vueModel/','vue']
        ]
      }
    ],
    sidebarDepth: 2, // 侧边栏显示2级
  }
};