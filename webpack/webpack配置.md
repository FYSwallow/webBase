## 初始化项目
- 项目初始化
```
npm init
```
- 安装webpack和webpack-cli包
```
npm instal webpack webpack-cli -g
```

- 创建main.js
```
console.log('webpack打包')
```
- 在build文件加下配置webpack.config.js
```
// webpack.config.js

const path = require('path');
module.exports = {
    mode:'development', // 开发模式
    entry: path.resolve(__dirname,'../src/main.js'),    // 入口文件
    output: {
        filename: 'output.js',      // 打包后的文件名称
        path: path.resolve(__dirname,'../dist')  // 打包后的目录
    }
}
```
- 修改打包命令
```
"build": "webpack --config build/webpack.config.js"
```
- 查看打包结果,现在已进出现dist文件夹


## 配置html模板 

一般来说,模块打包后的文件名不是固定的,一般用以下的写法
```
// filename: 'output.js',      
filename: '[name].[hash:8].js',
```
这样的问题就会出现html引入文件时找不到正确的文件名,因此引出html模板问题,需要引入一个插件

### 插件安装步骤:
- 导包
```
npm i -D html-webpack-plugin
```
- 在public文件夹下新建html文件
-配置webpack.config.js文件
```
const HtmlWebpackPlugin = require('html-webpack-plugin');
plugins: [
    new HtmlWebpackPlugin({
        template:path.resolve(__dirname,'../public/index.html')
        })
]
```
### 多入口文件开发
- 配置webpack.config.js
```
entry: {
+      header:path.resolve(__dirname,'../src/header.js')
}, 
plugins:[
    new HtmlWebpackPlugin({
        template:path.resolve(__dirname,'../public/index.html'),
        filename:'index.html',
        chunks:['main'] // 与入口文件对应的模块名
    }),
    new HtmlWebpackPlugin({
        template:path.resolve(__dirname,'../public/index.html'),
        filename:'header.html',
        chunks:['header'] // 与入口文件对应的模块名
    }),

```
### 每次打包删除之前的文件
- 使用clean-webpack-plugin插件
```
npm install -d clean-webpack-plugin
```
- 配置webpack.config.js
```
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); // 清除之前的打包的js

plugins: [
+    new CleanWebpackPlugin()
]
```

## 引入CSS样式

### 在主入口中引入css文件
- 在main.js中引入css文件
```
import './assets/css/main.css';
```
- 下载loader包解析css文件
```
npm i -D style-loader css-loader //解析 css样式
npm i -D less less-loader // 解析less

style-loader 的功能就一个，在 DOM 里插入一个 <style> 标签，并且将 CSS 写入这个标签内
```
- 配置webpack.config.js
```
module: {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'] // 从右向左解析
        }
    ]
},
```
### 添加css浏览器前缀
- 下载插件
```
npm i -D postcss-loader autoprefixer // postcss-loader 依赖于autoprefixer
```
- 配置webpack.config.js
```
 rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 
                {
                    loader:'postcss-loader',
                    options:{
                        plugins:[require('autoprefixer')]
                    }
                }] // 从右向左解析
            }
        ]
```

    以上的方法是以style的方式引入css,对于大型项目我们需要以link外链的形式一如

### 拆分css
- 下载包
```
npm i -D mini-css-extract-plugin
```
- 配置webpack.config.js
```
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 拆分css

 rules: [
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
]

plugins: [
    new MiniCssExtractPlugin({
        filename: "[name].[hash].css",
        chunkFilename: "[id].css",
    })
]
```

以上操作后css变为link引入,由于上述插件只能将所有css合并在一起,我们还需要用到extract-text-webpack-plugin插件
- 安装插件
```
npm i -D extract-text-webpack-plugin@next
```
- 配置webpack.config.js
```
let indexCss = new ExtractTextWebpackPlugin('index.css');

rules: [
    {
        test: /\.css$/,
        use: indexCss.extract({
            use: ['css-loader']
        })
    },
]

plugins: [
   indexCss,
]
```

### 打包图片、字体、媒体、等文件

file-loader就是将文件中的路经加工处理,并将需要的文件移动到需要输出的目录

url-loader会将小于限制的文件转换为base64编码,否则使用file-loader移动

配置
```
test: /\.(jpe?g|png|gif)$/i, //图片文件
use: [
    {
        loader: 'url-loader',
        options: {
            limit: 10240,
            fallback: {
            loader: 'file-loader',
            options: {
                name: 'img/[name].[hash:8].[ext]'
            }
            }
        }
    }
]
```
babel 转义js
```
npm i babel-loader @babel/preset-env @babel/core
```
babel-loader只会将 ES6/7/8语法转换为ES5语法，但是对新api并不会转换 例如(promise、Generator、Set、Maps、Proxy等)

此时我们需要借助babel-polyfill来帮助我们转换
```
    entry: ["@babel/polyfill,path.resolve(__dirname,'../src/index.js')"],    // 入口文件
```