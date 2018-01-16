const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const fs = require('fs');


module.exports = {
  entry: './src/main.js',
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
    ]
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

// creates static routes out of html files in src folder  
// and allows these pages to update automatically on dev server
fs.readdirSync(path.resolve('./src')).forEach(file => {
  if ( /\.(html)$/.test(file) && file !== 'index.html' ) { 
    const name = file.substring(0, file.lastIndexOf('.'));
    console.log('Creating html-webpack-plugin for ' + file);
    module.exports.plugins.push(
      new HtmlWebpackPlugin({
        filename: name + '/index.html',
        template: './src/' +  file,
        inject: 'body',
      })
    );
  }
});



/* Still need for dev 
dev
  vue loader
  better folder structure
  copy assets

production
  separate dev and prod build 
  babel 
  uglifyjs
*/
