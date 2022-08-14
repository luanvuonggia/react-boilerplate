export const componentConfig = {
  css: {
    flags: '-c, --css [type]',
    description: 'css',
    defaultValue: 'module', // module, js, scss
  },
  noCss: {
    flags: '-nc, --no-css',
    description: 'no css',
  },
  lazy: {
    flags: '-l, --lazy [type]',
    description: 'lazy',
    defaultValue: false,
  },
  noLazy: {
    flags: '-nl, --no-lazy',
    description: 'no lazy',
  },
  test: {
    flags: '-t, --test [type]',
    description: 'test',
    defaultValue: false,
  },
  noTest: {
    flags: '-nt, --no-test',
    description: 'no test',
  },
  memo: {
    flags: '-m, --memo [type]',
    description: 'memo',
    defaultValue: false,
  },
  noMemo: {
    flags: '-nm, --no-memo',
    description: 'no memo',
  },
  story: {
    flags: '-s, --story [type]',
    description: 'story',
    defaultValue: false,
  },
  noStory: {
    flags: '-ns, --no-story',
    description: 'no story',
  },
  route: {
    flags: '-r, --route [type]',
    description: 'add page to routes file',
    defaultValue: false,
  },
  noRoute: {
    flags: '-nr, --no-route',
    description: 'no add page to routes file',
  },
  i18n: {
    flags: '-i, --i18n [type]',
    description: 'i18n',
    defaultValue: true,
  },
  noI18n: {
    flags: '-ni, --no-i18n [type]',
    description: 'no i18n',
  },
};

export const pageConfig = {
  route: {
    flags: '-r, --route [type]',
    description: 'add page to routes file',
    defaultValue: true,
  },
  lazy: {
    flags: '-l, --lazy [type]',
    description: 'lazy',
    defaultValue: true,
  },
};
