const path = require('path');

const resolveApp = relativePath => path.resolve(process.cwd(), relativePath);

module.exports = {
  src: resolveApp('src'),
  build: resolveApp('build'),
  public: resolveApp('public'),
  dotenv: resolveApp('.env'),
};
