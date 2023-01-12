import { defineConfig, presetAttributify, presetIcons, presetTypography, presetWebFonts, presetWind, transformerDirectives } from 'unocss'

export default defineConfig({
  transformers: [transformerDirectives()],
  presets: [
    presetWind(),
    presetAttributify(),
    presetTypography(),
    presetIcons(),
    presetWebFonts({
      fonts: {
        inter: [
          {
            name: 'Inter',
            weights: ['400', '600', '700'],
          },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
      },
    }),
  ],
})
