<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [React Boilerplate](#react-boilerplate)
  - [Dependencies](#dependencies)
  - [Quick start](#quick-start)
  - [Documentation](#documentation)
  - [Supported browsers](#supported-browsers)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# React Boilerplate

- A starter kit for react project using Webpack 5.
- Start your next react project in seconds.
- A highly scalable, best DX and a focus on performance and best practices.

## Dependencies

- Git https://git-scm.com/downloads
- NodeJS https://nodejs.org
- PNPM: `npm install -g pnpm` or follow the specific guide for your OS https://pnpm.io/installation.
- PNPM alias

**Window OS**

```js
cd C:\Users\{name}
> type nul > .bashrc

Edit `.bashrc` add `alias p=pnpm` to this file.
```

**Mac OS**

```js
nano ~/.zshrc

Edit `.zshrc` add `alias p=pnpm` to end this file.
```

## Quick start

1. Clone this repo using `git clone <GIT_REPO_URL> <YOUR_PROJECT_NAME>`.
2. Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.
3. Run `pnpm install` or alias `p install`.
4. Run `pnpm start --open` to open the default browser for the first time and `pnpm start` for the next time.

## Documentation

- [Commands](docs/commands.md): Scripts with pnpm.
- [Generators](docs/generators.md): Generators commands with pnpm.
- [Store-Hooks-Utils](docs/store-hooks-utils.md): Project's Store, Available hooks, Available utils.
- [Project structure](docs/project-structure.md): Introduce project structrure.
- [Styles and Assets](docs/styles-assets.md): How to work with the CSS tooling.
- [Using image](docs/images.md): Support compress image with the webpack.
- [Notes](docs/notes.md): Some notes for this boilerplate.
- [Vscode](docs/vscode.md): Some vscode useful extensions.
- [Development workflow](docs/generals/development-workflow.md): Development workflow.
- [HTML, CSS styleguides](docs/generals/html-css-styleguide.md): HTML, CSS styleguides.
- [Javascript styleguides](docs/generals/js-styleguide.md): Javascript styleguides.

## Supported browsers

```json
"browserslist": {
  "production": [
    ">1%",
    "not IE 11",
    "not op_mini all",
    "not dead"
  ],
  "development": [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version"
  ]
}
```
