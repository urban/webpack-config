# Assets Only Example

This is a simple example that only builds assets for your project such as JavaScript, CSS, and etc. to the `public` directory.

The static `public/index.html` file expects to load a `main.css` file however the `npm run dev` command below runs this project in "development" mode and does not emit a CSS file to disk. This will cause an error to appear in the browsers DevTools that can be safely ignored.


## Commands

```sh
npm start
npm run build
```


## Code

```js
// webpack.config.babel.js

import getConfig from '@urban/webpack-config'

const isDev = process.env.NODE_ENV !== 'production'

export default getConfig({
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: './public'
  }
}, isDev)
```

```json
// package.json

"scripts": {
    "clean": "rm -f ./public/*.css & rm -f ./public/*.js",
    "prebuild": "npm run clean",
    "build": "NODE_ENV=production webpack -p",
    "prestart": "npm run clean",
    "start": "webpack-dev-server -d --content-base=./public"
}
```


## License

This software is released into the public domain.
