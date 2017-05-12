'use strict';
var webpack = require('webpack');

const filename = 'uikit.jsx';


module.exports = {
  // devtool: 'eval',
  entry: `./src/${filename}`,
  // externals: {
  //   react: 'React'
  // },
  node: {
    fs  : 'empty'
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  output: {
    path      : './lib/',
    filename  : `${filename}`,
    publicPath: '/'
  },
  eslint: {
    configFile: './.eslintrc'
  }
};
