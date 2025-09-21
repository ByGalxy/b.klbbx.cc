import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 基础配置
  lang: 'zh-CN',
  title: "ByGalxy Blog",
  description: "2223333",
  //开启纯净链接
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.webp' }],
  ],

  //appearance:true, //默认浅色且开启切换
  //启用深色模式
  appearance: 'dark',
  // appearance:false, // 关闭
  // appearance: "force-dark", // 强制深色主题

  ignoreDeadLinks: false, //关闭忽略死链，不配置即可，非常不建议设置为true

  themeConfig: {
    //侧边栏文字更改(移动端)
    sidebarMenuLabel: '目录',
    //返回顶部文字修改
    returnToTopLabel: '返回顶部',

    outline: { 
      level: [2,4], // 显示2-4级标题
      // level: 'deep', // 显示2-6级标题
      label: '当前页大纲' // 文字显示
    },
    // outline:false, // 关闭标题显示
    // outlineTitle:'当前页大纲', //老方式设置标题

    //自定义上下页名
    docFooter: { 
      prev: '上一页', 
      next: '下一页', 
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                },
              },
            },
          },
        },
      },
    },

    darkModeSwitchLabel: 'Appearance',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Navigation', link: '/Page/Navigation' },
      // {
      //   text: '指南',
      //   items: [
      //     { text: '前言', link: '/preface' },
      //     { text: '快速上手', link: '/getting-started' },
      //     { text: '配置', link: '/configuration' }
      //   ]
      // },
    ],

    // sidebar: [
    //   {
    //     //分组标题
    //     text: '指南',
    //     items: [
    //       { text: '前言', link: '/preface' },
    //       { text: '快速上手', link: '/getting-started' },
    //       { text: '配置', link: '/configuration' },
    //       { text: '页面', link: '/page' },
    //       { text: 'Frontmatter', link: '/frontmatter' },
    //       { text: 'Markdown', link: '/markdown' },
    //       { text: '静态部署', link: '/assets' },
    //     ],
    //   },
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ByGalxy' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/1587850254' }
    ]
  },

  sitemap: {
    hostname: 'https://b.klbbx.cc',
  },

  markdown: {
    image: {
      // 开启图片懒加载
      lazyLoading: true
    },
    toc: {level: [1,2,3,4,5,6]},
  },
})
