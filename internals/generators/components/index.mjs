/*
pnpm g c comp1

Comp1/index.js
Comp1/Comp1.jsx
Comp1/Comp1.module.scss -c module
Comp1/Comp1.scss -c scss
Comp1/__tests__/Comp1.test.js -t true
Comp1/Comp1.stories.js -s true
*/

import chalk from 'chalk';
import pkg from 'fs-extra';
import replaceFile from 'replace-in-file';

import { getPascalPathAndName, linter, toKebab } from '../utils.mjs';

import getComponentTemplate from './templates/component.mjs';
import getComponentTestTemplate from './templates/componentTest.mjs';
import getCssTemplate from './templates/css.mjs';
import getIndexTemplate from './templates/index.mjs';
import getStoryTemplate from './templates/story.mjs';

const { outputFile, pathExistsSync } = pkg;

const templates = [
  getIndexTemplate,
  getComponentTemplate,
  getCssTemplate,
  getStoryTemplate,
  getComponentTestTemplate,
];

const routesPath = 'src/routes.js';

function addPageToRoute(name, path) {
  const kebabName = toKebab(name);
  const pathWithoutSrc = path.split('/').slice(1).join('/');
  replaceFile({
    files: routesPath,
    from: [
      /\/\/import DO NOT DELETE THIS LINE/g,
      /\/\/route DO NOT DELETE THIS LINE/g,
    ],
    to: [
      `import ${name} from '${pathWithoutSrc}';\r\n//import DO NOT DELETE THIS LINE`,
      `{ path: '/${kebabName}', element: <${name} /> },\r\n//route DO NOT DELETE THIS LINE`,
    ],
  });
}

function getOutputFiles({ paths, options, basePath, templates }) {
  return paths
    .map(p => {
      const { name, path } = getPascalPathAndName(p, basePath);
      if (pathExistsSync(path)) {
        console.error(chalk.red(`${path} already exists.`));
        return [];
      }
      if (options.route) {
        addPageToRoute(name, path);
      }
      return templates
        .map(template => template(name, path, options))
        .filter(Boolean);
    })
    .flat();
}

function generateComponents(paths, options, basePath) {
  const outputFiles = getOutputFiles({ paths, options, basePath, templates });

  if (outputFiles.length) {
    Promise.all(
      outputFiles.map(({ outputPath, template }) =>
        outputFile(outputPath, template)
      )
    )
      .then(() => {
        const prettifyPaths = outputFiles.map(data => {
          // eslint-disable-next-line no-console
          console.log(chalk.green(`${data.outputPath} created successfully`));
          return data.outputPath;
        });
        linter([...prettifyPaths, routesPath]);
      })
      .catch(error => {
        console.error(error);
      });
  }
}

export default generateComponents;
