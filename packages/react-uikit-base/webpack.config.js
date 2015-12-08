'use strict';
var webpack = require('webpack');

const filename = 'uikit.jsx';


module.exports = {
  devtool: 'eval',
  entry: `./src/${filename}`,
  externals: {
    'react': 'react',
    'react-dom': 'react-dom'
  },
  resolve: {
    alias: {
      'react': 'react',
      'react-dom': 'react-dom'
    }
  },
  node: {
    fs  : 'empty'
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
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
  plugins: [
    new webpack.IgnorePlugin(/vertx/),
    new webpack.NoErrorsPlugin()
  ],
  eslint: {
    configFile: './.eslintrc'
  }
};
