<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [HTML/CSS styleguide](#htmlcss-styleguide)
  - [OOCSS and custom BEM](#oocss-and-custom-bem)
    - [Without OOCSS](#without-oocss)
    - [Structure](#structure)
    - [Sizing](#sizing)
    - [Style](#style)
    - [html](#html)
    - [Custom BEM](#custom-bem)
  - [HTML](#html)
    - [Use HTML 5 sematic element. Read more here.](#use-html-5-sematic-element-read-more-here)
    - [Start with component name](#start-with-component-name)
    - [If name is too long](#if-name-is-too-long)
  - [CSS, SASS](#css-sass)
    - [Common rules](#common-rules)
    - [New line when it has multiple selectors](#new-line-when-it-has-multiple-selectors)
    - [Variable name](#variable-name)
    - [Component based](#component-based)
    - [Nested selectors](#nested-selectors)
    - [Use Classname instead of Element selector](#use-classname-instead-of-element-selector)
    - [Insert a status class next to element classes.](#insert-a-status-class-next-to-element-classes)
    - [Ordering of property declarations](#ordering-of-property-declarations)
      - [Nested selectors](#nested-selectors-1)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# HTML/CSS styleguide

This is similar to [**BEM**](http://getbem.com/introduction/) system but not as strict or structured.
We adopt good things from **BEM** and customize some to use it our own way :)

## OOCSS and custom BEM

### Without OOCSS

```html
<a href="#" class="button-blue-small"></a>
<style>
  .button-blue-small {
    display: inline-block;
    zoom: 1;
    vertical-align: bottom;
    text-align: center;
    margin: 10px 5px;
    border-radius: 3px;
    text-decoration: none;
    font-weight: 900;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(250, 250, 250, 0.4);
    color: #fff;
    border: 1px solid #0082be;
    background: #00a4ef;
    background-image: linear-gradient(
      bottom,
      rgb(0, 163, 239) 1%,
      rgb(0, 177, 241) 51%
    );
    font-size: 1rem;
    padding: 5px 20px;
  }
</style>
```

Digging into OOCSS, structure, sizing and style
Let’s look at how we can begin to think about OOCSS right now, and ‘plan’ how our coded objects will appear. I like to split OOCSS into three different areas:

1. Structure – We need to create a base/foundation that all buttons will share, let’s think about building a button shell, to then add sizing and styles on top.
2. Sizing – A good kit of OOCSS elements will consist of easily changeable sizes, small, medium and large for instance.
3. Style – Adding style on top of our structure and sizing is the final piece to complete the object.

### Structure

```scss
/* BEM Block component */
.btn {
  display: inline-block;
  zoom: 1;
  vertical-align: bottom;
  text-align: center;
  margin: 10px 5px;
  border-radius: 3px;
  text-decoration: none;
  font-weight: 900;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(250, 250, 250, 0.4);

  &:hover {
    opacity: 0.7;
  }
}
```

### Sizing

```scss
/* BEM Modifier that changes the style of the block */
.btn-small {
  font-size: 13px;
  padding: 5px 20px;
}

.btn-medium {
}

.btn-large {
}
```

### Style

```scss
/* BEM Modifier that changes the style of the block */
.btn-blue {
  color: #fff;
  border: 1px solid #0082be;
  background: #00a4ef;
  background-image: linear-gradient(
    bottom,
    rgb(0, 163, 239) 1%,
    rgb(0, 177, 241) 51%
  );
}

.btn-orange {
}

.btn-yellow {
}
```

### html

```html
<a href="#" class="btn btn-small btn-blue">
  <span class="btn-price">$9.99</span>
  <span class="btn-text">Subscribe</span>
</a>
<a href="#" class="btn btn-medium btn-orange">
  <span class="btn-price">$9.99</span>
  <span class="btn-text">Subscribe</span>
</a>
```

### Custom BEM

```scss
/* BEM Block component */
.btn {
}

/* BEM Element that depends upon the block */
.btn-price {
}
.btn-text {
}

/* BEM Modifier that changes the style of the block */
.btn-small {
}
.btn-blue {
}
```

## HTML

### Use HTML 5 sematic element. Read more [here](https://www.w3schools.com/html/html5_semantic_elements.asp).

### Start with component name

- The first name is often the name of the widget, component or feature which you are styling E.g. article, slideshow, contact, search, etc.
- Subsequent names are often parts of portions of the component E.g. title, button, image, etc.
- Separate parent-child relationship by a dash.

```html
<header class="header">
  <img class="header-logo" src="http://placehold.it/200x150" />
  <h2 class="header-title">LECLE</h2>
</header>
```

### If name is too long

because it is deeply nested, keep the first parent element name, remove some following element names as necessary, and keep the last two or three element names.

Bad

```html
<footer class="footer">
  <div class="footer-socialmedia">
    <a>
      <img
        class="footer-socialmedia-facebook-icon"
        src="http://placehold.it/50x50"
      />
      Facebook
    </a>
  </div>
</footer>
```

Good

```html
<footer class="footer">
  <div class="footer-socialmedia">
    <a>
      <img class="footer-facebook-icon" src="http://placehold.it/50x50" />
      Facebook
    </a>
  </div>
</footer>
```

## CSS, SASS

### Common rules

- Do not use ID selectors
  - ID selectors have priority over other kinds of selectors. This can make it harder to add new rules using less specific selectors.
  - This doesn't mean you shouldn't use them but does mean that you should be very specific with your usage of them.
- When using multiple selectors in a rule declaration, give each selector its own line.
- Put closing braces } of rule declarations on a new line
- Put blank lines between rule declarations
- Use **REM** units or something scale, unless no choice then **PX**
- PX cases: border, position that may less than 5 px
- Avoid @extend
  - [Avoid sass extend](https://www.sitepoint.com/avoid-sass-extend/)
  - [Sass without mess](https://www.smashingmagazine.com/2015/05/extending-in-sass-without-mess/)

### New line when it has multiple selectors

Bad

```css
.avatar {
  border-radius: 50%;
  border: 2px solid white;
}
.no,
.nope,
.not_good {
  // ...
}
#lol-no {
  // ...
}
```

Good

```css
.avatar {
  border-radius: 50%;
  border: 2px solid white;
}

.one,
.selector,
.per-line {
  // ...
}
```

### Variable name

- Use lowercase and hyphen
- Name with meaning

Bad

```scss
$color-1: #49c770;
$color-2: #fefefe;
```

Good

```scss
$primaryColor: #49c770;
$secondaryColor: #fefefe;
```

### Component based

Use first parent as a first-level block, and nest all children inside the block. Highly specified children selectors can be placed standalone but we often nest to help with legibility, structure and code re-use.

```scss
.header {
  color: #000;

  .header-logo {
    width: 20rem;
  }

  .header-title {
    color: #000;
  }

  .header-title:hover {
    color: #000;
  }
}
```

### Nested selectors

**Do not nest selectors more than three levels deep!** **Why?**: because it is hard to override this style if you have to.

When selectors become this long, you're likely writing CSS that is:

- Strongly coupled to the HTML
- Overly specific
- Not reusable

Bad

```scss
.page-container {
  .content {
    .profile {
      // STOP!
    }
  }
}
```

Good

Try to name it as one level selector

```scss
.page-container {
}
.page-content {
}
.page-profile {
}
```

### Use Classname instead of Element selector

Elements could be changed depends on context but classname usually stay the same

Bad

It is UL list for now.

```html
<ul class="person-list">
  <li>This is person item</li>
  <li>This is person item</li>
</ul>
```

```scss
.person-list {
  margin: 0;

  li {
    font-size: 2rem;
  }
}
```

Good

But then it needs to change into DIV blocks for some reasons, In this way we no need to change css if we use class selector at a beginning.

```html
<div class="person-list">
  <div class="person-item">This is person item</div>
  <div class="person-item">This is person item</div>
</div>
```

```scss
.person-list {
  margin: 0;

  .person-item {
    font-size: 2rem;
  }
}
```

### Insert a status class next to element classes.

```scss
.article {
  .article-content {
    display: none;
    color: #000;
  }

  .article-content.isactive {
    display: block;
  }
}
```

### Ordering of property declarations

Related property declarations should be grouped together following the order:

1. Positioning
2. Box model
3. Typographic
4. Visual

```scss
.declaration-order {
  /* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  /* Box-model */
  display: block;
  float: right;
  width: 10rem;
  height: 10rem;

  /* Typography */
  font: normal 13px 'Helvetica Neue', sans-serif;
  line-height: 1.5;
  color: #333;
  text-align: center;

  /* Visual */
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 3px;

  /* Misc */
  opacity: 1;
}
```

#### Nested selectors

Nested selectors, _if necessary_, go last, and nothing goes after them. Add whitespace between your rule declarations and nested selectors, as well as between adjacent nested selectors. Apply the same guidelines as above to your nested selectors.

```scss
.btn {
  background: green;
  font-weight: bold;
  @include transition(background 0.5s ease);

  .btn-icon {
    margin-right: 10px;
  }
}
```
