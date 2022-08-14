<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Styles and Assets](#styles-and-assets)
  - [Adding a Stylesheet](#adding-a-stylesheet)
    - [Naming conventions](#naming-conventions)
    - [Global scss files](#global-scss-files)
    - [Component scss files](#component-scss-files)
    - [Theming with css variables](#theming-with-css-variables)
  - [Adding Images, Fonts, and Files](#adding-images-fonts-and-files)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Styles and Assets

- This boilerplate support `css` or `scss` for default.
- You can add more style strategies if you want. E.g: `css modules` or `css-in-js` (`styled-components, styled-jsx, emotion...`).

## Adding a Stylesheet

This project setup uses webpack for handling all assets. webpack offers a custom way of “extending” the concept of import beyond JavaScript. To express that a JavaScript file depends on a `CSS` or `SCSS` file, you need to import the `CSS` or `SCSS` from the JavaScript file:

- `Button.scss`

```scss
.Button {
  padding: 20px;
}
```

- `Button.jsx`

```jsx
import React, { Component } from 'react';
import './Button.scss'; // Tell webpack that Button.js uses these styles

export const Button = () => {
  return (
    // You can use them as regular CSS styles
    <div className="Button" />;
  );
}
```

### Naming conventions

```jsx
// ListingCard.jsx
function ListingCard() {
  return (
    <article class="ListingCard ListingCard-featured">
      <h1 class="ListingCard-title">Adorable 2BR in the sunny Mission</h1>

      <div class="ListingCard-content">
        <p>Vestibulum id ligula porta felis euismod semper.</p>
      </div>
    </article>
  );
}
```

```scss
/* BEM PascalCased Block component and module for component */
.ListingCard {
}

/* BEM Element that depends upon the block */
.ListingCard-title {
}
.ListingCard-content {
}

/* BEM Modifier that changes the style of the block */
.ListingCard-featured {
}
```

### Global scss files

The boilerplate create more global scss files in the `src/styles` folder.

- `global.scss`: This partial contains styling that overrides global elements, such as the `sanitize.css` or body elements.
- `_variables.scss`: This partial contains repeatable property values, such as brand colors and sizes.
- `_typography.scss`: This partial holds major typography element styles such as h1-h6, p, and global classes.
- `_mixins.scss`: This partial can hold any block of code that is repeatable. Read more [here](https://sass-lang.com/documentation/at-rules/mixin).
- `_functions.scss`: This partial contains any SASS functions which process and return a value. Read more [here](https://sass-lang.com/documentation/at-rules/function).
- `_animations.scss`: This partial stores the actual @keyframe CSS animations. It helps to drastically reduce the size of component stylesheets.

**NOTE:** You can create partial Sass files that contain little snippets of CSS that you can include in other Sass files. This is a great way to modularize your CSS and help keep things easier to maintain. A partial is a Sass file named with a leading `underscore`. You might name it something like `_partial.scss`. The underscore lets Sass know that the file is only a partial file and that it should not be generated into a CSS file. Sass partials are used with the @use rule. Read more [here](https://sass-lang.com/guide#topic-4).

### Component scss files

- `Header.scss` in `components/Header`.

```scss
@import 'styles/variables';
@import 'styles/functions';

.Header {
  color: $warning-color;
  padding: rem(5px 10px);
}
```

### Theming with css variables

- You can read [here](https://blog.bitsrc.io/theming-react-applications-with-css-variables-and-react-redux-8be0b10d829f) and apply theme to the project.

## Adding Images, Fonts, and Files

With webpack, using static assets like images and fonts works similarly to CSS.

You can import a file right in a JavaScript module. This tells webpack to include that file in the bundle. Unlike CSS imports, importing a file gives you a string value. This value is the final path you can reference in your code, e.g. as the src attribute of an image or the href of a link to a PDF.

Here is an example:

```jsx
import React from 'react';
import logo from 'assets/images/logo.png'; // Tell webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

export default Header;
```

This works in CSS too:

```Scss
.Logo {
  background-image: url(/assets/images/logo.png);
}
```
