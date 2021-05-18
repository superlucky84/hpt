const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: ['webpack-hot-middleware/client?reload=true', './src/index.ts'],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle[hash].js',
    path: path.resolve(__dirname, '.dist'),
    publicPath: '/.dist',
  },
  devServer: {
    hot: true,
    watchContentBase: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacementjj',
      template: './src/index.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
      template: 'src/views/layout.hbs',
      filename: './views/layout.hbs',
      chunks: [],
    }),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
      template: 'src/views/index.hbs',
      filename: './views/index.hbs',
      scriptLoading: 'blocking',
    }),
  ],
};
