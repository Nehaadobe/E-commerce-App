const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

const DIST_DIR = path.resolve(__dirname, 'build')
const SRC_DIR = path.resolve(__dirname, 'App')

const config = {
  entry: SRC_DIR + '/index.js',
  output: {
    path: DIST_DIR + '/',
    filename: 'bundle.js',
    publicPath: '/'
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
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './images/',
              publicPath: './images/',
              name: '[name].[ext]'
            }
          }
        ]
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
        from: './App/index.html',
        to: './'
      }
    ])
  ]
}
module.exports = config
