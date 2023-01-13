// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/styles/base.css',
  ],
  modules: [
    '@nuxtjs/i18n',
    '@unocss/nuxt',
  ],
  runtimeConfig: {
    public: {
      defaultTitle: process.env.TITLE_TEMPLATE,
    },
  },
  i18n: {
    baseUrl: process.env.BASE_URL,
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        file: 'en-US.yaml',
        name: 'English',
        iso: 'en-US',
      },
      {
        code: 'es',
        file: 'es-ES.yaml',
        name: 'Español',
        iso: 'es-ES',
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
