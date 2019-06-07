var webpack = require('webpack');
var path = require('path');

var DIST_DIR = path.resolve(__dirname, 'public');
var SRC_DIR = path.resolve(__dirname, 'App');

var config = {
    entry: SRC_DIR + "/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                options: {
                    cacheDirectory: true, // To improve performance by caching compiled files.
                    presets: ['@babel/react']
                }
            }
        ]
    }
}
module.exports = config;