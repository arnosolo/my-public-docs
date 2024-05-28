import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/blog/',
  title: "Arno's blog",
  description: "#Web #iOS",
  head: [['link', { rel: 'icon', href: '/blog/big-yellow.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/big-yellow.svg',
    nav: [
      { text: 'Home', link: '/' },
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
