// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/styles/base.css',
  ],
  modules: [
    '@nuxtjs/i18n',
    '@unocss/nuxt',
  ],
  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        file: 'en-US.yaml',
        name: 'English',
      },
      {
        code: 'es',
        file: 'es-ES.yaml',
        name: 'Español',
      },
    ],
    lazy: true,
    langDir: 'lang',
    vueI18n: {
      legacy: false,
    },
  },
  typescript: {
    shim: false,
  },
})
