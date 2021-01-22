// import { pa11y } from 'pa11y'
import { description } from './package.json'

// only add `router.base = '/landing/'` if `DEPLOY_ENV` is `CUSTOM` -- use this if you're deployig to a subfolder called /custom/
// you can run a custom npm script to generate a static site with this as the `<base href="">`
const routerBase = process.env.DEPLOY_ENV === 'CUSTOM' ? '/custom/' : '/'
const currentHostname = 'http://localhost:3000'
console.log('base', routerBase)

export default {
  mode: 'universal',
  router: {
    base: routerBase
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { name: 'msapplication-TileColor', content: '#FFFFFF' },
      { name: 'msapplication-TileImage', content: '/favicon-144.png' }
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.3/particles.min.js'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', sizes: '32x32', href: '/favicon-32.png' },
      { rel: 'icon', href: '/favicon-57.png', sizes: '57x57' },
      { rel: 'icon', href: '/favicon-76.png', sizes: '76x76' },
      { rel: 'icon', href: '/favicon-96.png', sizes: '96x96' },
      { rel: 'icon', href: '/favicon-128.png', sizes: '128x128' },
      { rel: 'icon', href: '/favicon-196.png', sizes: '196x196' },
      { rel: 'icon', href: '/favicon-228.png', sizes: '228x228' },
      { rel: 'shortcut icon', href: '/favicon-196.png', sizes: '196x196' },
      { rel: 'apple-touch-icon', href: '/favicon-120.png', sizes: '120x120' },
      { rel: 'apple-touch-icon', href: '/favicon-152.png', sizes: '152x152' },
      { rel: 'apple-touch-icon', href: '/favicon-180.png', sizes: '180x180' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#ff0' },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~plugins/gtm.js', ssr: false },
    { src: '~plugins/particles.js', mode: 'client' }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/style-resources'
  ],
  /*
   ** Global CSS
   */
  css: [
    // SCSS file in the project
    '~/assets/scss/style.scss',
    'hooper/dist/hooper.css'
  ],
  styleResources: {
    // your settings here
    scss: ['./assets/scss/_mixins.scss', './assets/scss/_functions.scss', './assets/scss/_colors.scss', './assets/scss/_variables.scss', './assets/scss/vendor/_index.scss'],
  },
  sitemap: {
    hostname: currentHostname,
    gzip: true,
    exclude: []
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // Add exception
    transpile: [
      'vee-validate/dist/rules'
    ],
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      // the following makes the _nuxt path relative when deploying to production or generating a static site
      if (!ctx.isDev) {
        config.output.publicPath = './_nuxt/'
      }
      // SVG Loader
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))

      svgRule.test = /\.(png|jpe?g|gif|webp)$/

      config.module.rules.push({
        test: /\.svg$/,
        use: ['babel-loader', 'vue-svg-loader'],
      })
      // end svg loader
    }
  }
}
