const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  target: 'web',
  // entry: ['./src/index.ts', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'],
  entry: ['./src/index.ts'],
  // entry: ['./src/index.ts'],
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, {loader: 'css-loader'}, {loader: 'postcss-loader'}, {loader: 'sass-loader'}],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle[fullhash].js',
    path: path.resolve(__dirname, '.dist'),
    publicPath: '/.dist',
  },
  plugins: [
    new CleanWebpackPlugin(),
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
    new MiniCssExtractPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new LiveReloadPlugin({
      appendScriptTag: true,
    }),
    new ESLintPlugin({
      files: 'src/**/*.ts',
    }),
  ],
};
