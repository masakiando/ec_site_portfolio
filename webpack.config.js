let webpack = require('webpack');
let path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');

let BUILD_DIR = path.join(__dirname, 'dist');
let APP_DIR = path.join(__dirname, 'src');

let config = {
  entry: APP_DIR + '/app.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // include: APP_DIR,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html'
    })
  ]
}

module.exports = config;
