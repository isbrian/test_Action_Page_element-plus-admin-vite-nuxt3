import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Volumes/Data2TB/Web/study-element-plus-admin-vite-nuxt3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}