// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts'
  ],
  i18n: {
    detectBrowserLanguage: false,
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en-US.ts",
        dir: "ltr",
        moment: "en",
      },
      {
        code: "km",
        iso: "kh-KH",
        file: "kh-KH.ts",
        dir: "ltr",
        moment: "km",
      },
    ],
    strategy: 'prefix_except_default',
    defaultLocale: 'km',
    lazy: true,
    langDir: "locales/"
    // vueI18n: './i18n.config.ts'
  },
  googleFonts: {
    families: {
      "Roboto": true,
      'Kantumruy Pro': true
    }
  }
})
