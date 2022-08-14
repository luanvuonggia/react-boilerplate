<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Project Structure](#project-structure)
  - [`node_modules/`](#node_modules)
  - [`build/`](#build)
  - [`public/`](#public)
  - [`src/`](#src)
  - [`internals/`](#internals)
  - [`.editorconfig`](#editorconfig)
  - [`.gitignore`](#gitignore)
  - [`.eslintrc`](#eslintrc)
  - [`.prettierrc`](#prettierrc)
  - [`babel.config.js`](#babelconfigjs)
  - [`jsconfig.json`](#jsconfigjson)
  - [`package.json`](#packagejson)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Project Structure

## `node_modules/`

Contains all the javascript dependencies, you don't need to worry about this and also you should't modify any file there.

## `build/`

Your production code will be placed here, the final package ready to install in your server. No changes are necessary here as this is automatically generated from your source files.

## `public/`

- The public folder contains the HTML file so you can tweak it, for example, to set the page title. The `<script>` tag with the compiled code will be added to it automatically during the build process.
- Public folder is inspired by `create-react-app`. So you can refer from the [document](https://create-react-app.dev/docs/using-the-public-folder/).

## `src/`

All of the source code is contained here: assets, js, jsx, scss, etc. **Any changes you want to make to the website must be done here.**

- `assets/`: All the images, icons, static js files and the fonts needed to run the site. Any new assets must be placed here.
- `atoms/`: Atoms store(jotai) to global state management.
- `components/`: contains dumb React components which depend on containers for data.
- `pages/`: contains React components which are a route page.
- `hooks/`: contains React hooks utils.
- `styles/`: contains global `css`, `scss` files.
- `utils/`: contains js utils which are shared to the react components.
- `i18n/`: React i18next config file for multiple language setup.
- `index.js`: Main file for the beginning of the project.

## `internals/`

You can call this area the "engine" of your app. Your source code cannot be executed as-is in the web browser. It needs to pass through webpack to get converted into a version of Javascript that web browsers understand. While it's certainly helpful to understand what's happening here, for real world usage, you won't have to mess around with this folder much.

- `internals/config`: This folder contains js utils shared for others `internals/**/*.js`
- `internals/webpack`: You'll most probably use ECMAScript 6+ to write the source code of your app. webpack takes care of making it compatible with a majority of browsers.
- `internals/generators`: This folder has the code to scaffold out new components, containers and routes. Read [more commands](docs/commands.md) in the docs.
- `internals/scripts`: This folder contains package json scripts.
- `internals/sheets`: This folder contains google sheet data export.
- `internals/testing`: This folder contains setup testing files.

## `.editorconfig`

Used to set a configuration for your editor code, like use spaces instead tabs, the charset, of the files, etc.

## `.gitignore`

Here is where you can set which files/folders shouldn't be tracked by `git`, that means, the file/folder written in this file will not be pushed to the repository such as `node_modules` and `dist` folder.

## `.eslintrc`

ESLint configuration.

## `.prettierrc`

Prettier configuration.

## `babel.config.js`

Babel configuration.

## `jsconfig.json`

The presence of `jsconfig.json` file in a directory indicates that the directory is the root of a JavaScript Project.

## `package.json`

When you run the command `pnpm install`, the packages installed are the ones listed in this file with the version that were installed, if you need to add more packages you can run the command:

- `pnpm add package_name` for dependencies.
- `pnpm add package_name -D` for devDependencies.

then a new package will be installed in the `node_modules` folder and the `package.json` will be updated with a new line of the package added.
