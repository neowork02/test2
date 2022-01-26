const outDir = '../src/main/resources/static'
const path = require('path')

let proxy = {
  '/login': {
    target: 'http://dev-api.ekmtc.com/auth'
  },
  '/auth': {
    target: 'http://dev-api.ekmtc.com/auth'
  },
  '/common': {
    target: 'http://dev-api.ekmtc.com/common'
  },
  '/trans': {
    target: 'http://dev-api.ekmtc.com/trans'
  }
}

if (process.env.SERVE_MODE === 'LOCAL' || process.env.VUE_APP_MODE === 'DEV') {
  proxy = {
    '/login': {
      target: process.env.VUE_APP_AUTH_URL
    },
    '/auth': {
      target: process.env.VUE_APP_AUTH_URL
    },
    '/user': {
      target: process.env.VUE_APP_USER_URL
    },
    '/cp': {
      target: process.env.VUE_APP_CP_URL
    },
    '/common': {
      target: process.env.VUE_APP_COMMON_URL
    },
    '/trans': {
      target: process.env.VUE_APP_TRANS_URL
    },
    '/schedule': {
      target: process.env.VUE_APP_SCHEDULE_URL
    },
    '/sales': {
      target: process.env.VUE_APP_SALES_URL
    },
    '/batch': {
      target: process.env.VUE_APP_BATCH_URL
    },
    '/sample': {
      target: process.env.VUE_APP_SAMPLE_URL
    },
    '/settle': {
      target: process.env.VUE_APP_SETTLE_URL
    }
  }
}

console.log('------------ devServer.proxy ---------------')
console.log(proxy)

module.exports = {
  outputDir: outDir,
  devServer: {
    // proxy: 'http://localhost:8080'
    proxy: proxy
  },
  pages: {
    index: {
        entry: 'src/main.js',
        template: 'public/index.html',
        filename: 'index.html',
    },
    admin: {
        entry: 'src/admin.js',
        template: 'public/admin.html',
        filename: 'admin.html',
    },
  },  
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set(
      'vue$',
      // If using the runtime only build
      path.resolve(__dirname, 'node_modules/vue/dist/vue.esm.js')
      // Or if using full build of Vue (runtime + compiler)
      // path.resolve(__dirname, 'node_modules/vue/dist/vue.esm.js')
    )
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use('i18n')
      .loader('@kazupon/vue-i18n-loader')
      .end()
  }
}
