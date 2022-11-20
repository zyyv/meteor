import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts, transformerDirectives } from 'unocss'
import { presetUseful } from 'unocss-preset-useful'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      // cdn: 'https://esm.sh/',
    }),
    presetWebFonts({
      fonts: {
        lobster: 'Lobster',
      },
    }),
    presetUseful(),
  ],
  transformers: [
    transformerDirectives(),
  ],
})
