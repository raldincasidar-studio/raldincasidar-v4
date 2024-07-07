// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-06',
  devtools: { enabled: true },
  css: ['~/assets/css/icon.css', '~/assets/css/global.scss'],
  modules: ['@nuxtjs/tailwindcss', 'nuxt-swiper', 'nuxt-particles'],
  
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: '#1E1E1E',
            secondary: '#FFD118'
          }
        }
      }
    }
  }
})