var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './main.js',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.template.html',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      filename: 'greeting/index.html',
      template: './greeting.template.html',
      inject: 'body',
    }),
  ],
}