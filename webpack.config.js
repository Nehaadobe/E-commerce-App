const webpack = require('webpack')
const path = require('path')

const DIST_DIR = path.resolve(__dirname, 'public')
const SRC_DIR = path.resolve(__dirname, 'App')

const config = {
  entry: SRC_DIR + '/index.js',
  output: {
    path: DIST_DIR + '/app',
    filename: 'bundle.js',
    publicPath: '/app'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'App/components/'),
      Global: path.resolve(__dirname, 'App/global/'),
      Reducer: path.resolve(__dirname, 'App/reducer/'),
      Static: path.resolve(__dirname, 'App/static/'),
      Store: path.resolve(__dirname, 'App/store/'),
      Style: path.resolve(__dirname, 'App/style/')
    }
  }
}
module.exports = config
