<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Webpack image compress](#webpack-image-compress)
  - [React component](#react-component)
  - [CSS](#css)
  - [Svg](#svg)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Webpack image compress

### React component

```js
import Image1 from 'assets/images/1.jpeg';
import Image2 from 'assets/images/2.png?as=1024';
import Image3 from 'assets/images/3.png?as=750';
import Image4 from 'assets/images/4.png?as=500';
import Image5 from 'assets/images/5.png?as=300';
import Image6 from 'assets/images/6.jpg?as=150';

<img src={Image1} alt="" />
<img src={Image2} alt="" />
<img src={Image3} alt="" />
<img src={Image4} alt="" />
<img src={Image5} alt="" />
<img src={Image6} alt="" />
```

- Support Resize with `?as={size}`
- Available Sizes: `[1920, 1024, 750, 500, 300, 150]`
- Supported extensions `[jpeg, jpg, png, gif, tif, webp, avif]`

### CSS

```css
body {
  background: url(/assets/images/bg.jpg) no-repeat center;
}
```

### Svg

```js
import logoInline from 'assets/images/logo.svg';
import Logo from 'assets/images/logo.svg?rc'; // ?rc = react component

<img src={logoInline} alt="" />
<Logo />
```
