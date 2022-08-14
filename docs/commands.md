<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Command Line Commands](#command-line-commands)
  - [Development](#development)
  - [Staging](#staging)
  - [Building](#building)
  - [Serve production](#serve-production)
  - [Testing](#testing)
  - [Analyze bundle size](#analyze-bundle-size)
  - [Linting](#linting)
  - [I18n](#i18n)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Command Line Commands

## Development

```Shell
pnpm start
```

Starts the development server running on `http://localhost:3000`

**Note:** This command will load the `.env` file.

## Staging

```Shell
pnpm build:staging
```

Staging is the environment where production code is used. It contains the source-map and has debugging capabilities.

**Note:** This command will load the `.env.staging` file and use the `.env` file if the `.env.staging` is not exists.

## Building

```Shell
pnpm build
```

Preps your app for deployment (does not run tests). Optimizes and minifies all files, piping them to the `build` folder.

Upload the contents of `build` to your web server to
see your work live!

**Note:** This command will load the `.env.production` file and use the `.env` file if the `.env.production` is not exists.

## Serve production

```Shell
pnpm build
npx serve -s build
```

The app is built for optimal performance: assets are
minified and served.

Serve the production on `http://localhost:5000`

## Testing

```Shell
pnpm test
```

or test coverage

```Shell
test:coverage
```

Tests your application with the unit tests specified in the `**/__tests__/*.{js,jsx}` or `*.{spec,test}.{js,jsx}` files
throughout the application.

## Analyze bundle size

```Shell
pnpm analyze
```

This analyzer will visualize your dependencies and chunks with detailed statistics
about the bundle size.

## Linting

```Shell
pnpm lint
```

Lints your JavaScript and your CSS.

```Shell
pnpm lint:fix
```

Lints your code and tries to fix any errors it finds.

## I18n

> You can change default language and locales supported in `src/i18n/index.js` file.

**Extraction**

```Shell
pnpm i18n:extract
```

**Compile to AST format used for the project**

```Shell
pnpm i18n:compile
```

**Download translations from Translation vendor (Google sheet) and commit messages to project**

```Shell
pnpm i18n:pull --id spreadsheetID --tab tabNumber
```

**Upload messages to Translation vendor (Google sheet)**

```Shell
pnpm i18n:push --id spreadsheetID --tab tabNumber
```

**Note**: If you want use a exists spreadsheet with `--id` you need share this spreadsheet to `Anyone` and role `Editor`.
