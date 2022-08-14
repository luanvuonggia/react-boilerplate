import { Command } from 'commander';

import { push } from './ggSheet.mjs';

const program = new Command();

program.option('--id <type>').option('-t, --tab <number>');

program.parse(process.argv);

const options = program.opts();

push(options.id, options.tab);
