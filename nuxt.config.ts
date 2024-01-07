// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    preset: 'cloudflare',
    compressPublicAssets: {
      brotli: true
    },
  },

  typescript: {
    strict: true
  },

  vite: {
    server: {
      fs: {
        allow: ['C:/Users/stefd/Documenten/Code/Dartroom/dart-signer/dist']
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/scss/variables.scss";
            @import "@/assets/scss/default-tags.scss";
            @import "@/assets/scss/forms.scss";
            @import "@/assets/scss/table.scss";
            @import "@/assets/scss/color-styles.scss";
            @import "@/assets/scss/overlay.scss";
            @import "@/assets/scss/helvetica-neue.scss";
          `
        }
      }
    },
    optimizeDeps: {
      esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
          global: 'globalThis'
        }
      }
    },
    build: {
      target: "es2020",
    },
  },

  runtimeConfig: {
    public: {
      version: '0.3.4',
      ledger: 'TestNet',
      api: 'https://api-v2.dartroom.xyz',
      dartroomApi: process.env.NODE_ENV === 'production' ? process.env.DARTROOM_API : process.env.DEV_DARTROOM_API,
      fileroomApi: process.env.NODE_ENV === 'production' ? process.env.FILEROOM_API : process.env.DEV_FILEROOM_API,
      queue: process.env.NODE_ENV === 'production' ? process.env.QUEUE_SYSTEM : process.env.DEV_QUEUE_SYSTEM,
    },
  },

  modules: [
    '@nuxt/devtools',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@nuxt/content',
    // '@nuxtjs/i18n',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ]
  ],

  imports: {
    dirs: [
      'stores/**/*'
    ]
  },

  googleFonts: {
    download: true,
    base64: false,
    // overwrite: true,
    // outputDir: '.output/public/_nuxt/',
    fontsDir: 'fonts',
    fontsPath: '../fonts',
    display: 'swap',
    families: {
      'IBM Plex Sans': {
        wght: [100, 200, 300, 400, 500, 600, 700],
        // ital: [100, 200, 300, 400, 500, 600, 700],
      },
      'IBM Plex Mono': {
        wght: [100, 200, 300, 400, 500, 600, 700],
        // ital: [100, 200, 300, 400, 500, 600, 700],
      },
    }
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1",
      title: "rxlems",
      titleTemplate: "rxlems",
      meta: [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "name": "http-equiv",
          "content": "Content-Security-Polic"
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg'
        }
      ]
    }
  },

  components: {
    global: true,
    dirs: ['~/components']
  },

  // i18n: {
  //   defaultLocale: 'en',
  //   strategy: 'prefix_except_default',
  //   locales: [
  //     {
  //       code: 'en',
  //       iso: 'en-US',
  //       name: 'English'
  //     },
  //     {
  //       code: 'pt',
  //       iso: 'pt-PT',
  //       name: 'Português'
  //     },
  //     {
  //       code: 'nl',
  //       iso: 'nl-NL',
  //       name: 'Nederlands'
  //     }
  //   ],
  // },

  content: {
    defaultLocale: 'en',
    locales: ['en', 'pt', 'nl'],
    // sources: {
    //   github: {
    //     prefix: '/smart-NFT',
    //     driver: 'github',
    //     repo: 'dartroom/smart-nft',
    //     branch: "main",
    //     dir: "/",
    //     token: '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'
    //   }
    // },
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'github-light',
        // Theme used if `html.dark`
        dark: 'github-dark'
      }
    }
  }
})
