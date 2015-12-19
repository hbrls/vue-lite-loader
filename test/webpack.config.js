var webpack = require('webpack');


module.exports = {
  entry: {
    spec: './spec.jsx',
  },

  output: {
    path: './',
    filename: 'spec.build.js',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  module: {
    preLoaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'eslint!../index.js' },
    ],

    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel!../index.js' },
    ],
  },
};
