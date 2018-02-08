const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry:  './src/main.js',
  devtool: 'inline-source-map',
  devServer: { historyApiFallback: true },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      components: path.resolve(__dirname, 'src/components/'),
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {loaders: {}}
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: 'body',
    }),
    new CopyWebpackPlugin([{from: 'src/css', to: 'css'}]),
    new CopyWebpackPlugin([{from: 'src/img', to: 'img'}]),
    new CopyWebpackPlugin([{from: 'src/fonts', to: 'fonts'}]),
    new CopyWebpackPlugin([{from: 'src/js', to: 'js'}]),
  ],
}

// this modifies the webpack settings for production builds 
if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  module.exports.plugins = (module.exports.plugins || []).concat([
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
  ])

  module.exports.module.rules = (module.exports.module.rules || []).concat([
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }
  ]);
};
