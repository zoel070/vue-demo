const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: false,
  configureWebpack: {
    resolve: {
      fallback: {
        timers: require.resolve("timers-browserify")
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        }
      }
    }
  }
})
