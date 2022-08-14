// const colors = require('colors/safe');
import { exec } from 'child_process';

import chalk from 'chalk';

// const { exec } = require('child_process');
import { LANGUAGES } from '../../src/i18n/index.mjs';
// const { LANGUAGES } = require('../../src/i18n');

function execI18n() {
  try {
    LANGUAGES.forEach(({ code }) => {
      exec(
        `cross-env NODE_ENV=i18n formatjs compile "src/i18n/lang/${code}.json" --ast --out-file src/i18n/compiled-lang/${code}.json --format simple`
      );
    });
    // eslint-disable-next-line no-console
    console.log(chalk.green(`i18n: compile locales data was successfully`));
  } catch (error) {
    console.error(error);
  }
}

execI18n();
