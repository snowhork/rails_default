const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './app/assets/javascripts/index.jsx',
  },

  output: {
    path: path.join(__dirname, './app/assets/javascripts/webpack'),
    filename: '[name].js',
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    loaders: [
      { test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"],
        }
      },
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
}
