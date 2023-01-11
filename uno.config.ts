import { defineConfig, presetAttributify, presetIcons, presetTypography, presetWebFonts, presetWind } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetAttributify(),
    presetTypography(),
    presetIcons({
      scale: 1.5,
    }),
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
