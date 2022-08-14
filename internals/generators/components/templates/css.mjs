import { toCamelize } from '../../utils.mjs';

function getCssTemplate(name, path, options) {
  if (options.css === 'module' || options.css === 'scss') {
    const camelName = toCamelize(name);
    const template = `
      @import 'styles/index';

      .${options.css === 'module' ? camelName : name} {}

    `;

    return {
      outputPath: `${path}/${name}${
        options.css === 'module' ? '.module' : ''
      }.scss`,
      template,
    };
  }
  return false;
}

export default getCssTemplate;
