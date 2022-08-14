import { exec } from 'child_process';

import chalk from 'chalk';

import { DEFAULT_LOCALE } from '../../src/i18n/index.mjs';

function execI18n() {
  try {
    exec(
      `cross-env NODE_ENV=i18n formatjs extract "src/**/*.{js,jsx}" --ignore="**/*.test.*" --out-file src/i18n/lang/${DEFAULT_LOCALE}.json --flatten --id-interpolation-pattern "[sha512:contenthash:base64:6]" --format simple`
    );
    // eslint-disable-next-line no-console
    console.log(chalk.green(`i18n: extract locales data was successfully`));
  } catch (error) {
    console.error(error);
  }
}

execI18n();
