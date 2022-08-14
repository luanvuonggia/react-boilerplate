import { Command } from 'commander';

import { pull } from './ggSheet.mjs';

const program = new Command();

program.option('--id <type>').option('-t, --tab <number>');

program.parse(process.argv);

const options = program.opts();

pull(options.id, options.tab);
