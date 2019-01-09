const path = require('path');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { ReactLoadablePlugin } = require('react-loadable/webpack');

module.exports = {
  optimization: {
    minimizer: [new uglifyJsPlugin()],
    mergeDuplicateChunks: true
  },
  entry: {
    index: './src/client/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new ReactLoadablePlugin({
      filename: './dist/react-loadable.json'
    })
  ]
};
