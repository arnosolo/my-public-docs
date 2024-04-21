import { defaultTheme, defineUserConfig } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import path from 'path'

export default defineUserConfig({
  base: `/blog/`,
  head: [
    [
      'link', { rel: 'icon', href: '/blog/logo.svg'}
    ]
  ],
  theme: defaultTheme({
    logo: 'logo.svg',
    logoDark: 'logo-dark.svg',
    locales: {
      '/': {
        selectLanguageName: 'English',
      },
    },
  }),
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Arno\'s blog',
      description: '#Web #iOS #Ionic',
    },
    '/zh-TW': {
      lang: 'zh-TW',
      title: 'Arno的博客',
      description: '#Web #iOS #Ionic',
    },
  },
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    })
  ],
})
