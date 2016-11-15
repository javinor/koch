'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['./app/main.js'],
  output: {
    path: __dirname + '/docs',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.template.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
}
