import generateComponents from './components/index.mjs';

function generate(program, config) {
  Object.keys(config).forEach(key => {
    const { flags, description, defaultValue } = config[key];
    program.option(flags, description, defaultValue);
  });

  program.action((paths, options, command) => {
    const commandName = command.name();

    switch (commandName) {
      case 'page': {
        generateComponents(paths, options, 'src/pages');
        break;
      }

      default:
        generateComponents(paths, options, 'src/components');
        break;
    }
  });
}

export default generate;
