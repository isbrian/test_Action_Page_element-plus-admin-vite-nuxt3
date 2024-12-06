import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "admin" | "default" | "doc"
declare module "/Volumes/Data2TB/Web/study-element-plus-admin-vite-nuxt3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}