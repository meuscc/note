import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "custom"
declare module "D:/Wss/meuscc/notes/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}