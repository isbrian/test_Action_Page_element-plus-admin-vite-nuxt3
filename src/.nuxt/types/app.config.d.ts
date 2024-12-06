
import type { Defu } from 'defu'
import cfg0 from "/Volumes/Data2TB/Web/study-element-plus-admin-vite-nuxt3/app.config"

declare const inlineConfig = {}
type ResolvedAppConfig = Defu<typeof inlineConfig, [typeof cfg0]>

declare module '@nuxt/schema' {
  interface AppConfig extends ResolvedAppConfig { }
}
