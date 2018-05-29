module.exports = {
  entry: './src/app.js',
  output: {
    filename: './dist/app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        // include: APP_DIR,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}
