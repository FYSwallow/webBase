module.exports = {
    devServer: {
        port: '10001',
        headers:{
          'Access-Control-Allow-Origin':'*'
        }
    },
    configureWebpack:{
          output:{
          library:'factory',
          libraryTarget:'umd'
      }
    }
  }
  