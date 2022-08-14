<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Store](#store)
- [Available Hooks](#available-hooks)
  - [useAPI](#useapi)
  - [useOnClickOutside](#useonclickoutside)
  - [useLocalStorage](#uselocalstorage)
  - [useOnScreen](#useonscreen)
  - [useWindowResize](#usewindowresize)
- [Available Utils](#available-utils)
  - [Contansts](#contansts)
  - [Fetch APIs](#fetch-apis)
  - [Routes](#routes)
  - [SWR options global configuration](#swr-options-global-configuration)
  - [localstorage](#localstorage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Store

> **NOTE**: I used to rematch store before but now I want to change a new strategy.

- Because after many projects I realized what `Store` did. Most of them are used to store data from APIs and for child components and to handle APIs logic.
- So I decided to use `SWR` for handle APIs and `React Context` for store.
- However, I also support new Store use [zustand](https://github.com/pmndrs/zustand) if you want to use Store.

**Change logs**

- Remove rematch stores.
- Add `SWR` library for handle APIs with supported fetcher on `utils/fetch.js`.

# Available Hooks

## useAPI

You can use it as [useSWR](https://swr.vercel.app/docs/getting-started)

```js
import { useAPI } from 'hooks';

const { data, error } = useAPI(endpoint, fetcher, config);
```

## useOnClickOutside

```js
import { useOnClickOutside } from 'hooks';

// ref = React.createRef()
useOnClickOutside(ref, handler);
```

## useLocalStorage

```js
import { useLocalStorage } from 'hooks';

const [value, setValue] = useLocalStorage(key, defaultValue);
```

## useOnScreen

```js
import { useOnScreen } from 'hooks';

const isOnScreen = useOnScreen(ref, rootMargin);
```

## useWindowResize

```js
import { useWindowResize } from 'hooks';

const windowSize = useWindowResize();
```

# Available Utils

## Contansts

`src/utils/constants.js`
This is where all the project constants are located

## Fetch APIs

`src/utils/fetch.js`

```js
path: fetch endpoint
options: {
  host: String, // Base URL - Default process.env.RB_BASE_URL
  responseType: String, // json | text | formData | error | blob | arrayBuffer,
  ...restOptions // native fetch API options (method, headers, body ....)
}
```

- getAPI(path, options);
- postAPI(path, options)
- postJSON(path, options)
- putAPI(path, options)
- putJSON(path, options)
- patchAPI(path, options)
- patchJSON(path, options)
- deleteAPI(path, options)

**Handle Error**

```js
try {
  await getAPI(endpoint);
} catch (e) {
  console.log(e.name);
  console.log(e.message);
  console.log(e.response);
  console.log(await e.response.text()); // https://developer.mozilla.org/en-US/docs/Web/API/Response#methods
}
```

## Routes

All routes for project `src/routes.js`

```js
import { BaseLayout, Layout } from 'components/Layout';
import About from 'pages/About';
import Home from 'pages/Home';
import Login from 'pages/Login';
import NotFoundPage from 'pages/NotFoundPage';
import Signup from 'pages/Signup';
//import DO NOT DELETE THIS LINE

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/about', element: <About /> },
      //component DO NOT DELETE THIS LINE
    ],
  },
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
];

export default routes;
```

## SWR options global configuration

`src/utils/swr.js`

```js
export const swrOptions = {
  errorRetryCount: 0,
  shouldRetryOnError: false,
  revalidateOnFocus: false,
};
```

## localstorage

`src/utils/swr.js`

```js
getLocalStorage(key, defaultValue);
setLocalStorage(key, value);
```
