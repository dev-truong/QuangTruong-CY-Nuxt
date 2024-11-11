// https://nuxt.com/docs/api/configuration/nuxt-config
import {routes} from "./routes";
export default defineNuxtConfig({
  css: ["~/assets/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      title: "CY Page"
    }
  },
  hooks: {
    'pages:extend' (pages) {
      // add a route
      // pages.push({
      //   name: 'Product__Index',
      //   path: '/product',
      //   file: '~/custom-pages/products/index.vue'
      // })
      routes.forEach(route => {
        pages.push(route);
      });

      // remove routes
      function removePagesMatching (pattern: RegExp, pages: NuxtPage[] = []) {
        const pagesToRemove: NuxtPage[] = []
        for (const page of pages) {
          if (page.file && pattern.test(page.file)) {
            pagesToRemove.push(page)
          } else {
            removePagesMatching(pattern, page.children)
          }
        }
        for (const page of pagesToRemove) {
          pages.splice(pages.indexOf(page), 1)
        }
      }
      removePagesMatching(/\.ts$/, pages)
    }
  }
})

