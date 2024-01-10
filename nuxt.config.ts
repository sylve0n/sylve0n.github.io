// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {

    }
  },
  modules: [
    'nuxt-particles',
    '@nuxtjs/google-fonts'
  ],
  css: ['~/assets/styles/index.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/utilities" as *;'
        }
      }
    }
  },
  googleFonts: {
    families: {
      'Righteous': [400]
    }
  },
})
