// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: [
    'nuxt-windicss',
    '@pinia/nuxt',
  ],

  css: ['~/assets/styles/reset.scss'],

  compatibilityDate: '2025-02-01',
})
