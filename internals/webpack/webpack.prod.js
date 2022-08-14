process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const zlib = require('zlib');

const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const env = require('../config/env');
const paths = require('../config/paths');

const common = require('./webpack.common.js');
const isEnvProduction = process.env.TARGET_ENV === 'production';
const htmlMinify = {
  removeComments: true,
  collapseWhitespace: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  removeStyleLinkTypeAttributes: true,
  keepClosingSlash: true,
  minifyJS: true,
  minifyCSS: true,
  minifyURLs: true,
};
const imageSizes = [1920, 1024, 750, 500, 300, 150];
const squooshGenerateOptions = () =>
  imageSizes.map(width => ({
    preset: width.toString(),
    implementation: ImageMinimizerPlugin.squooshGenerate,
    options: {
      resize: typeof width === 'number' ? { enabled: true, width } : {},
      encodeOptions: {
        mozjpeg: {
          quality: 60,
        },
      },
    },
  }));

module.exports = agrv => {
  const withAnalyze = agrv.withAnalyze === 'true';
  return common({
    mode: 'production',
    bail: true,
    entry: `${paths.src}/index.js`,
    devtool: isEnvProduction ? false : 'source-map',
    output: {
      publicPath: env.publicPath,
      filename: 'static/js/[name].[contenthash:8].js',
      chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
      assetModuleFilename: 'static/assets/[hash][ext][query]',
      clean: true,
    },
    optimization: {
      minimize: isEnvProduction,
      minimizer: [
        new ImageMinimizerPlugin({
          // test: /\.(jpe?g\|png\|gif\|tif\|svg\|avif)\$/i,
          minimizer: {
            implementation: ImageMinimizerPlugin.squooshMinify,
            options: {
              encodeOptions: {
                mozjpeg: {
                  quality: 60,
                },
              },
            },
          },
          generator: squooshGenerateOptions(),
        }),
        new TerserPlugin({
          terserOptions: {
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2,
            },
            parse: {
              ecma: 8,
            },
            mangle: true,
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true,
            },
          },
          parallel: true,
        }),
        new CssMinimizerPlugin(),
      ],
      concatenateModules: true,
      runtimeChunk: {
        name: entrypoint => `runtime-${entrypoint.name}`,
      },
      sideEffects: true,
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: 10,
        minSize: 0,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            name(module, chunks, cacheGroupKey) {
              const moduleFile = module.context.match(
                /[\\/]node_modules[\\/].pnpm[\\/](.*?)([\\/]|$)/
              );

              if (moduleFile) {
                return `${cacheGroupKey}-${moduleFile[1].replace('@', '')}`;
              } else {
                return `${cacheGroupKey}`;
              }
            },
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    },
    styleRuleOption: [MiniCssExtractPlugin.loader],
    babelRuleOption: {
      compact: true,
    },
    hasStyleSourceMap: !isEnvProduction,
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: paths.public,
            to: paths.build,
            globOptions: {
              dot: true,
              gitignore: true,
              ignore: ['**/index.html'],
            },
          },
        ],
      }),
      new HtmlWebpackPlugin({
        inject: true,
        template: `${paths.public}/index.html`,
        templateParameters: {
          PUBLIC_URL: env.raw.PUBLIC_URL,
        },
        minify: isEnvProduction ? htmlMinify : false,
      }),
      new webpack.EnvironmentPlugin(env.raw),
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash:8].css',
        chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
      }),
      withAnalyze && new BundleAnalyzerPlugin(),
      new CompressionPlugin({
        filename: '[path][base].gz',
        algorithm: 'gzip',
        test: /\.(js|css|html|svg)$/,
        // threshold: 10240,
        minRatio: Infinity, // aws
      }),
      new CompressionPlugin({
        filename: '[path][base].br',
        algorithm: 'brotliCompress',
        test: /\.(js|css|html|svg)$/,
        compressionOptions: {
          params: {
            [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
          },
        },
        // threshold: 10240,
        minRatio: Infinity, // aws
      }),
    ].filter(Boolean),
  });
};
