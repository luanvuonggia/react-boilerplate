import { exec } from 'child_process';

export const toKebab = function (string) {
  return string
    .replace(/\B(?:([A-Z])(?=[a-z]))|(?:(?<=[a-z0-9])([A-Z]))/g, '-$1$2')
    .toLowerCase();
};

export const toCamelize = function (string) {
  string = string.replace(/[-_\s.]+(.)?/g, (_, c) =>
    c ? c.toUpperCase() : ''
  );
  return string.substr(0, 1).toLowerCase() + string.substr(1);
};

export const toPascal = function (string) {
  return toKebab(string)
    .split('-')
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join('');
};

export const getPascalPathAndName = (path, basePath) => {
  path = path.startsWith('/') ? path.slice(1) : path;
  path = path.startsWith('src/') ? path.slice(4) : path;
  const splitPaths = path.split('/');
  const firstPathCamel = toCamelize(splitPaths[0]);
  let pascalPaths = splitPaths.map(sp => toPascal(sp));

  if (firstPathCamel === 'pages' || firstPathCamel === 'components') {
    pascalPaths = pascalPaths.slice(1);
    basePath = `src/${firstPathCamel}`;
  }

  return {
    path: `${basePath}/${pascalPaths.join('/')}`,
    name: pascalPaths[pascalPaths.length - 1],
  };
};

export const linter = paths => {
  try {
    exec(`eslint ${paths.join(' ')} --ext .js,.jsx --fix`);
    exec(`pnpm prettify ${paths.join(' ')}`);
  } catch (error) {
    console.error(error);
  }
};
