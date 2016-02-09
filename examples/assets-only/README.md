# Assets Only Example

This is a simple example that only builds assets for your project such as JavaScript, CSS, and etc. to the `public` directory.

**Note:** The static `public/index.html` file expects to load a `main.css` file however the `npm start` command below runs this project in "development" mode and does not emit a CSS file to disk. This will cause an error to appear in the browsers DevTools that can be safely ignored.


## Commands

```sh
npm start
npm run build
```


## Code

```js
// webpack.config.babel.js

import getConfig from '@urban/webpack-config'
import { smart as merge } from 'webpack-merge'

const config = {
  output: { path: 'public'}
}

export default merge(getConfig(), config)
```

```json
// package.json

"scripts": {
    "prebuild": "rm -f ./public/*.css & rm -f ./public/*.js ./public/*.map",
    "build": "cross-env NODE_ENV=production webpack -p ../_shared/src/index.js",
    "start": "cross-env NODE_ENV=development webpack-dev-server -d --inline --hot --content-base ./public/ ../_shared/src/index.js"
}
```


## License

This software is released into the public domain.
