const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(html)$/, 
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name]/index.[ext]',
          },
        }],
        exclude: path.resolve(__dirname, 'src/index.html')
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['static/*', 'static/**/*']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: 'body',
    }),
  ],
}

