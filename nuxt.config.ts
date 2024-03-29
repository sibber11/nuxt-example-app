// https://nuxt.com/docs/api/configuration/nuxt-config
import form from "@tailwindcss/forms"
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  tailwindcss: {
    editorSupport: true,
    viewer: false,
    exposeConfig: true,
    config:{
      plugins: [form],
      safelist:[
        'bg-gray-100'
      ]
    }
  },
  app:{
    head:{
      bodyAttrs:{
        class: 'bg-gray-100'
      }
    }
  }
})