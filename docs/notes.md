<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Notes](#notes)
  - [Upcomming features](#upcomming-features)
    - [webpack minify images with `squoosh` library.](#webpack-minify-images-with-squoosh-library)
    - [Setup pwa for the project use `workbox`.](#setup-pwa-for-the-project-use-workbox)
  - [Storybook and styled-component](#storybook-and-styled-component)
    - [Storybook](#storybook)
    - [Styled-component](#styled-component)
  - [Testing](#testing)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Notes

## Upcomming features

### webpack minify images with [`squoosh`](https://github.com/GoogleChromeLabs/squoosh/tree/dev/libsquoosh) library.

- libSquoosh is an experimental way to run all the codecs you know from the Squoosh web app directly inside your own JavaScript program.
- libSquoosh uses a worker pool to parallelize processing images. This way you can apply the same codec to many images at once.
- libSquoosh is currently not the fastest image compression tool in town and doesn’t aim to be. It is, however, fast enough to compress many images sufficiently quick at once.
- For now it has a lot of bugs. I will add it later.

### Setup pwa for the project use `workbox`.

- For now, `Workbox webpack Plugins` has many deprecated warnings on its dependencies.
- I will add it when the `Workbox webpack Plugins` resolve all deprecated warnings.

## Storybook and styled-component

### Storybook

- setup `storybook` is very easy. You just run `npx sb init`. It will automation setup `storybook` for you.
- Because `storybook` has many deprecated warnings on its dependencies. So I don't add it to this boilerplate, now.

### Styled-component

- Default style strategy of this boilerplate is using `scss` module. it doesn't cause bloating code in your bundle size.
- If you want use `styled-component`. Please follow [here](https://styled-components.com/docs/basics#installation) to install it.
- Recommendation: Using `tailwindcss` and config theme for the specific project.

## Testing

- [Common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
