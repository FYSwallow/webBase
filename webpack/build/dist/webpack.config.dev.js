"use strict";

var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin'); // 配置html模板


var _require = require('clean-webpack-plugin'),
    CleanWebpackPlugin = _require.CleanWebpackPlugin; // 清除之前的打包的js


var MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 拆分css


var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

var indexCss = new ExtractTextWebpackPlugin('index.css');
module.exports = {
  mode: 'development',
  // 开发模式
  entry: {
    main: path.resolve(__dirname, '../src/main.js'),
    // 入口文件
    header: path.resolve(__dirname, '../src/header.js')
  },
  output: {
    // filename: 'output.js',      // 打包后的文件名称
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, '../dist') // 打包后的目录

  },
  module: {
    rules: [// 对css添加后缀

    /*
     {
        test: /\.css$/,
        use: [
            'style-loader', 'css-loader', 
            {
                loader:'postcss-loader',
                options:{
                    plugins:[require('autoprefixer')]
                }
            }
        ] // 从右向左解析
    },
    */
    // 使用link引入css8

    /*
        {
        test: /\.css$/,
        use: [
            
            MiniCssExtractPlugin.loader,
            'css-loader', 
            {
                loader:'postcss-loader',
                options:{
                    plugins:[require('autoprefixer')]
                }
            }
        ] // 从右向左解析
    }
    */
    {
      test: /\.css$/,
      use: indexCss.extract({
        use: ['css-loader']
      })
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../public/index.html'),
    filename: 'index.html',
    // 对应html的输出名称
    chunks: ['main'] // 与入口文件对应的模块名

  }), new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../public/index.html'),
    filename: 'header.html',
    chunks: ['header'] // 与入口文件对应的模块名

  }), new CleanWebpackPlugin(), // new MiniCssExtractPlugin({
  //     filename: "[name].[hash].css",
  //     chunkFilename: "[id].css",
  // })
  indexCss]
};