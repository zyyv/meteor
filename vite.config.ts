import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'


const r = (src: string) => resolve(__dirname, src)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({ reactivityTransform: true, include: [/\.vue$/, /\.md$/] }),
    Unocss(),
    Pages({ extensions: ['vue'] }),
    Layouts(),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core', 'vue-i18n'],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables', 'src/store'],
      vueTemplate: true,
    }),
    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts',
    }),
    VueSetupExtend(),
  ],
  resolve: {
    alias: {
      '~': r('src'),
    },
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/core'],
  },
})
