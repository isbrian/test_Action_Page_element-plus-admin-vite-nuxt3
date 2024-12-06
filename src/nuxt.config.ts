import { serverQueryContent } from '#content/server'
import { NuxtConfig } from 'nuxt/config'
import pkg from './package.json'

// env
// const { NODE_ENV, VUE_APP_API, VUE_APP_API_PROXY_PREFIX, VUE_APP_URL, VUE_APP_VERSION } = process.env

console.log('###### process.env', process.env)
console.log('###### process.env.npm_node_execpath', process.env.npm_node_execpath)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true, //啟用服務端渲染
  app: {
    keepalive: true
  },
  runtimeConfig: {
    public: {
      iconifyProvider: 'https://api.iconify.design',

      // useRuntimeConfig().public['APP_MODE']
      APP_VERSION: pkg.version,
      APP_NAME: pkg.name,
      APP_TEST: pkg.tt,
      APP_MODE: process.env?.NODE_ENV,
      APP_API: process.env?.VUE_APP_API,
      APP_AUTH: process.env?.VUE_APP_AUTH,
      APP_API_PROXY_PREFIX: process.env?.VUE_APP_API_PROXY_PREFIX
    },
    private: {
      secretKey: 'secret'
    }
  },
  hooks: {
    ready: nuxt => {
      console.log('###### VUE_APP_API:', process.env?.VUE_APP_API)
      console.log('###### VUE_APP_API_PROXY_PREFIX:', process.env?.VUE_APP_API_PROXY_PREFIX)
    }
  },
  nitro: {
    devStorage: {
      db: {
        driver: 'fs',
        base: 'server/db'
      }
    }
  },
  css: ['element-plus/dist/index.css', 'element-plus/theme-chalk/dark/css-vars.css', '@/assets/css/main.css'],

  /** full-Static mode payload extraction option:
   *  see: https://github.com/nuxt/framework/discussions/7691?sort=new */
  experimental: {
    payloadExtraction: false
  },
  proxy: {
    proxies: {
      [process.env?.VUE_APP_API_PROXY_PREFIX || '/admin/api/v1/']: {
        target: process.env?.VUE_APP_API,
        changeOrigin: true // 允許cors跨域
        // rewrite: (path: string) => path.replace('/admin/api/v1/' || '', '')
        // secure: true, // 是否https接口
        // ws: true, // 是否代理websockets
      }
    }
  },
  modules: ['@nuxt/content', '@unocss/nuxt', '@vueuse/nuxt', ['@pinia/nuxt', { autoImports: ['defineStore'] }], '@nuxt-alt/proxy'],
  content: {
    documentDriven: {
      injectPage: false
    },
    highlight: {
      theme: 'one-dark-pro',
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini']
    }
  }
})
