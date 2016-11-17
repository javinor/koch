'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: ['./app/main.jsx'],
  output: {
    path: `${__dirname}/docs`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader'] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/app/index.template.html`,
      filename: 'index.html',
      inject: 'body'
    })
  ]
}
