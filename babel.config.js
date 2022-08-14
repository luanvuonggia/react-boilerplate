const isEnvDevelopment = process.env.NODE_ENV === 'development';
const isEnvProduction = process.env.NODE_ENV === 'production';
const isEnvTest = process.env.NODE_ENV === 'test';
// const isEnvI18n = process.env.NODE_ENV === 'i18n';

const pjson = require('./package.json');
const ptrVersion = pjson.devDependencies['@babel/plugin-transform-runtime'];
const coreJsVersion = pjson.dependencies['core-js'];

module.exports = {
  presets: [
    isEnvTest && [
      // ES features necessary for user's Node version
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    (isEnvProduction || isEnvDevelopment) && [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'usage',
        corejs: coreJsVersion.slice(1),
        exclude: ['transform-typeof-symbol'],
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        development: isEnvDevelopment || isEnvTest,
      },
    ],
  ].filter(Boolean),
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        version: ptrVersion,
        corejs: false,
      },
    ],
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
    isEnvProduction && [
      require('babel-plugin-transform-react-remove-prop-types').default,
      {
        removeImport: true,
      },
    ],
    [
      'formatjs',
      {
        idInterpolationPattern: '[sha512:contenthash:base64:6]',
        ast: true,
      },
    ],
    [
      'babel-plugin-styled-components',
      {
        displayName: isEnvProduction ? false : true,
        fileName: false,
        pure: true,
      },
    ],
  ].filter(Boolean),
};
