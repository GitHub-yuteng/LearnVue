const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// webpack ./src/main.js ./dist/bundle.js
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    // publicPath: 'dist/'//文件超过限制 则要打包进 dist目录，此配置是在前端访问链接之前加上该文件夹路径
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        //npm install wabpack@3.6.0 --save-dev
        //npm install style-loader --save-dev
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader"
            //npm install less-loader@4.1.0 --save-dev less@3.9.0
          },
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //当加载的图片 小于 limit 会用base64字符串形式 大于 limit 则会使用 file-loader
              limit: 130000,
              name: 'img/[name].[hash:8].[ext]',
            },
          }
        ]
      },
      {
        //npm install --save-dev babel-loader@7 babel-core babel-preset-es2015  //转换语法
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        //npm install vue-loader vue-template-compiler --save-dev
        test: /\.vue$/,
        use: ['vue-loader'],
      }

    ]
  },
  resolve: {
    //npm install vue --save
    extensions: ['.js', '.css', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.BannerPlugin('余腾'),
    //npm install html-webpack-plugin --save-dev
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}