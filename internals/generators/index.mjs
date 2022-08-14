// const fs = require('fs');
import { Command } from 'commander';
import inquirer from 'inquirer';

import { componentConfig, pageConfig } from './config.mjs';
import generate from './generate.mjs';

const program = new Command();

const questions = [
  {
    type: 'list',
    name: 'command',
    message: 'What do you want to generate?',
    choices: ['component', 'page'],
    default: 'component',
  },
  {
    type: 'input',
    name: 'name',
    message: 'what is your component name?',
    validate: name => !!name,
  },
  {
    type: 'list',
    name: 'style',
    message: 'What style strategy do you want to use?',
    choices: ['module', 'js', 'scss'],
    default: 'module',
  },
  {
    type: 'checkbox',
    name: 'options',
    message: 'What options do you want?',
    choices: Object.keys(componentConfig).filter(
      config => config !== 'css' && !config.startsWith('no')
    ),
  },
];

async function cli(args) {
  if (args.slice(2).length) {
    switch (args[2]) {
      case 'c':
      case 'component':
        generate(
          program
            .command('component [path...]')
            .alias('c')
            .description('Generate one or more components'),
          componentConfig
        );
        break;
      case 'p':
      case 'page':
        generate(
          program
            .command('page [path...]')
            .alias('p')
            .description('Generate one or more pages'),
          { ...componentConfig, ...pageConfig }
        );
        break;

      default:
        generate(
          program.argument('[path...]', 'Generate pages or components'),
          componentConfig
        );
        break;
    }
  } else {
    const { command, name, style, options } = await inquirer.prompt(questions);
    const config = options.reduce((acc, option) => {
      acc[option].defaultValue = true;
      return acc;
    }, componentConfig);
    config.css.defaultValue = style;

    const paths = name.split(' ').map(path => {
      path = path.startsWith('/') ? path.slice(1) : path;
      path = path.startsWith('src/') ? path.slice(4) : path;
      const splitPaths = path.split('/');
      if (splitPaths[0] !== 'pages' && splitPaths[0] !== 'components') {
        return `${command}s/${path}`;
      }
      return path;
    });
    generate(
      program.argument('[path...]', 'Generate pages or components', paths),
      config
    );
  }

  program.parse(args);
}

cli(process.argv);
