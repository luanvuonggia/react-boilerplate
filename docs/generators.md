<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents** _generated with [DocToc](https://github.com/thlorenz/doctoc)_

- [Generators commands](#generators-commands)
  - [Usage](#usage)
    - [Commands](#commands)
    - [Flags](#flags)
    - [Pages](#pages)
    - [Component](#component)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Generators commands

## Usage

### Commands

```js
pnpm generate
pnpm g
pnpm generate [paths...] [...flags] // Default generate component
pnpm g [paths...] [...flags] // Default generate component
pnpm generate [type] [paths...] [...flags] // type: component or page
pnpm g [type] [paths...] [...flags] // type: component or page
```

### Flags

```js
-c --css [type] // type: module (*.module.scss) or js (styled-component) or scss
-nc --no-css // Don't use css
-l --lazy // generate lazy component
-nl --no-lazy // no lazy component
-t --test // jest test
-nt --no-test // no jest test
-m --memo // memo component
-nm --no-memo // no memo component
-s --story // storybook
-ns --no-story // no storybook
-r --route // add page to routes file
-nr --no-route // no add page to routes file
-i --i18n // add i18n (formatMessage)
-ni --no-i18n // no add i18n (formatMessage)
```

**Notes**: When to use `React.memo()`. Read a good article [here](https://dmitripavlutin.com/use-react-memo-wisely/)

### Pages

Examples:

```js
pnpm (g/*alias*/|generate) (p/*alias*/|page) src/pages/home src/pages/about
pnpm (g/*alias*/|generate) (p/*alias*/|page) pages/home pages/about
pnpm (g/*alias*/|generate) (p/*alias*/|page) home about
```

### Component

Examples:

```js
pnpm (g/*alias*/|generate) (c/*alias*/|component)/*optional*/ src/componets/cpn1 src/componets/cpn2
pnpm (g/*alias*/|generate) (c/*alias*/|component)/*optional*/ componets/cpn1 componets/cpn2
pnpm (g/*alias*/|generate) (c/*alias*/|component)/*optional*/ cpn1 cpn2
pnpm (g/*alias*/|generate) src/componets/cpn1 src/componets/cpn2
pnpm (g/*alias*/|generate) componets/cpn1 componets/cpn2
pnpm (g/*alias*/|generate) cpn1 cpn2
pnpm (g/*alias*/|generate) pages/home/cpn1 pages/home/cpn2 // create components in pages folder
```
