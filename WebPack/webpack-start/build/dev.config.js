const WebpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = WebpackMerge(baseConfig, {
  devServer: {
    //npm install --save-dev webpack-dev-server@2.9.1
    contentBase: './dist',
    inline: true,
  }
})