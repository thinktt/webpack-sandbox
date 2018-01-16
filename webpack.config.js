const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const fs = require('fs');

const plugins = [
  new CleanWebpackPlugin(['static/*', 'static/**/*']),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './src/index.html',
    inject: 'body',
  }),
];

fs.readdirSync(path.resolve('./src')).forEach(file => {
  if ( /\.(html)$/.test(file) && file !== 'index.html' ) { 
    const name = file.substring(0, file.lastIndexOf('.'));
    console.log('Creating html-webpack-plugin for ' + file);
    plugins.push(
      new HtmlWebpackPlugin({
        filename: name + '/index.html',
        template: './src/' +  file,
        inject: 'body',
      })
    );
  }
});

//console.log(plugins);

module.exports = {
  entry: './src/main.js',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'bundle.js',
  },
  plugins: plugins,
}

