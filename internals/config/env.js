const fs = require('fs');

const paths = require('./paths');

const TARGET_ENV = process.env.TARGET_ENV;

const dotenvFiles = [`${paths.dotenv}.${TARGET_ENV}`, paths.dotenv];

dotenvFiles.forEach(dotenvFile => {
  if (fs.existsSync(dotenvFile)) {
    const dotenv = require('dotenv');
    const dotenvExpand = require('dotenv-expand');

    const env = dotenv.config({
      path: dotenvFile,
    });
    dotenvExpand.expand(env);
  }
});

const publicUrl = process.env.PUBLIC_URL;
const publicPath = publicUrl
  ? publicUrl.endsWith('/')
    ? publicUrl
    : `${publicUrl}/`
  : '/';

const raw = Object.keys(process.env).reduce(
  (env, key) => {
    env[key] = process.env[key];
    return env;
  },
  {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PUBLIC_URL: publicPath.slice(0, -1),
  }
);

module.exports = { raw, publicPath };
