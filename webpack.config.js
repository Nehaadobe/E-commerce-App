const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const DIST_DIR = path.resolve(__dirname, 'build')
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
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
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
  },
  performance: {
    hints: false
  },
  plugins: [
    new CopyPlugin([
      {
        from: './App/images',
        to: './images',
        toType: 'dir'
      },
      {
        from: './App/index.html',
        to: './'
      }
    ])
  ]
}
module.exports = config
