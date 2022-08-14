const fs = require('fs');
const path = require('path');

const antdCustomizeVars = require('../../src/antdLess');
const getCSSModuleLocalIdent = require('../config/getCSSModuleLocalIdent');
const paths = require('../config/paths');

const useTailwind = fs.existsSync('./tailwind.config.js');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = options => {
  const getStyleLoaders = (cssOptions, preProcessor) => {
    const loaders = options.styleRuleOption.concat([
      {
        loader: require.resolve('css-loader'),
        options: cssOptions,
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          postcssOptions: {
            ident: 'postcss',
            config: false,
            plugins: useTailwind
              ? [
                  require('tailwindcss'),
                  require('postcss-flexbugs-fixes'),
                  require('postcss-preset-env')({
                    stage: 3,
                  }),
                ]
              : [
                  require('postcss-flexbugs-fixes'),
                  require('postcss-preset-env')({
                    stage: 3,
                  }),
                  require('postcss-normalize'),
                ],
          },
          sourceMap: options.hasStyleSourceMap,
        },
      },
    ]);

    if (preProcessor) {
      loaders.push(
        {
          loader: require.resolve('resolve-url-loader'),
          options: {
            sourceMap: options.hasStyleSourceMap,
            root: paths.src,
          },
        },
        preProcessor === 'sass-loader'
          ? {
              loader: require.resolve('sass-loader'),
              options: {
                sourceMap: true,
                implementation: require('sass'),
              },
            }
          : {
              loader: require.resolve('less-loader'),
              options: {
                lessOptions: {
                  modifyVars: antdCustomizeVars,
                  javascriptEnabled: true,
                },
                sourceMap: true,
                implementation: require('less'),
              },
            }
      );
    }

    return loaders;
  };

  const webpackOptions = {
    target: ['browserslist'],
    bail: options.bail || false,
    mode: options.mode,
    entry: options.entry,
    output: Object.assign(
      {
        path: paths.build,
      },
      options.output
    ),
    optimization: options.optimization,
    module: {
      rules: [
        {
          test: /\.(js|mjs|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: require.resolve('babel-loader'),
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              ...options.babelRuleOption,
            },
          },
        },
        {
          test: /\.css$/,
          use: getStyleLoaders({
            sourceMap: options.hasStyleSourceMap,
            importLoaders: 1,
            modules: {
              getLocalIdent: getCSSModuleLocalIdent,
            },
          }),
          include: /\.module\.css$/,
        },
        {
          test: /\.css$/,
          use: getStyleLoaders({
            sourceMap: options.hasStyleSourceMap,
            importLoaders: 1,
          }),
          exclude: /\.module\.css$/,
          sideEffects: true,
        },
        {
          test: /\.(scss|sass)$/,
          use: getStyleLoaders(
            {
              sourceMap: options.hasStyleSourceMap,
              importLoaders: 3,
            },
            'sass-loader'
          ),
          exclude: /\.module\.(scss|sass)$/,
          sideEffects: true,
        },
        {
          test: /\.(scss|sass)$/,
          use: getStyleLoaders(
            {
              sourceMap: options.hasStyleSourceMap,
              importLoaders: 3,
              modules: {
                getLocalIdent: getCSSModuleLocalIdent,
              },
            },
            'sass-loader'
          ),
          include: /\.module\.(scss|sass)$/,
        },
        {
          test: /\.(less)$/,
          use: getStyleLoaders(
            {
              sourceMap: options.hasStyleSourceMap,
              importLoaders: 3,
            },
            'less-loader'
          ),
          sideEffects: true,
        },
        {
          test: /\.svg$/,
          oneOf: [
            {
              issuer: /\.[jt]sx?$/,
              resourceQuery: /rc/, // *.svg?rc
              use: ['@svgr/webpack'],
            },
            {
              type: 'asset',
              parser: {
                dataUrlCondition: {
                  maxSize: 200,
                },
              },
            },
          ],
        },
        {
          test: /.(jpe?g|png|gif|tif|webp|avif)$/i,
          type: 'asset/resource',
        },
        { test: /\.(woff(2)?|eot|ttf|otf|)$/, type: 'asset/resource' },
        // {
        //   exclude: [/^$/, /\.(js|mjs|jsx)$/, /\.html$/, /\.json$/],
        //   type: 'asset/resource',
        // },
      ],
    },
    plugins: options.plugins,
    resolve: {
      modules: ['node_modules', resolveApp('node_modules'), paths.src],
      extensions: ['.mjs', '.js', '.jsx', '.json'],
      alias: {
        '@formatjs/icu-messageformat-parser':
          '@formatjs/icu-messageformat-parser/no-parser',
      },
    },
    devtool: options.devtool,
    performance: {
      hints: false,
    },
  };

  if (options.devServer) {
    webpackOptions.devServer = options.devServer;
  }

  return webpackOptions;
};
