const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const WebpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = WebpackMerge(baseConfig, {
  plugins: [
    //npm install uglifyjs-webpack-plugin@1.1.1 --save-dev
    new UglifyJsPlugin()
  ]
})