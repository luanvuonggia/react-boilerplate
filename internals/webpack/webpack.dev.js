process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const env = require('../config/env');
const paths = require('../config/paths');

const common = require('./webpack.common.js');
const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';

module.exports = common({
  mode: 'development',
  entry: `${paths.src}/index.js`,
  output: {
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: '/',
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    compress: true,
    hot: true,
    port: 3000,
    https: protocol === 'https',
    static: {
      directory: paths.public,
      publicPath: env.publicPath,
      watch: true,
    },
    historyApiFallback: {
      disableDotRule: true,
      index: env.publicPath,
    },
  },
  babelRuleOption: {
    plugins: [require.resolve('react-refresh/babel')],
  },
  styleRuleOption: [require.resolve('style-loader')],
  hasStyleSourceMap: true,
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: `${paths.public}/index.html`,
      templateParameters: {
        PUBLIC_URL: env.raw.PUBLIC_URL,
      },
    }),
    new webpack.EnvironmentPlugin(env.raw),
    new ReactRefreshWebpackPlugin(),
  ],
});
