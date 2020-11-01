const packageName = require('./package.json').name;

module.exports = {
    devServer: {
        port: 10000,
        // 允许被主应用跨域fetch请求到
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    configureWebpack: {
        output: {
            library: `${packageName}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${packageName}`,
        },
    }
}