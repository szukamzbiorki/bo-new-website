// https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtModule } from 'nuxt'

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/sanity',
  'nuxt-swiper'],
  swiper: {
    styleLang: 'css'
  },
  sanity: {
    projectId: 'imrh2q1w',
    dataset: 'production',
  },
  css: [ '/public/assets/css/main.css',],
})
