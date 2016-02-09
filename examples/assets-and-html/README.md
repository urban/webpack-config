# Assets and HTML Example

This is a simple example that builds all the assets for your project such as JavaScript, CSS, and dynamically creates a static HTML file to the `public` directory.


## Commands

```sh
npm start
npm run build
```


## Code

```js
// webpack.config.babel.js

import getConfig from '@urban/webpack-config'
import HtmlPlugin from '@urban/webpack-html-plugin'
import { smart as merge } from 'webpack-merge'

const config = {
  output: { path: 'public' },
  plugins: [
    new HtmlPlugin((assets, defaultTemplate, compiler) => {
      const templateData = {
        ...assets,
        title: 'Assets and HTML',
        html: '<div id="content"></div>'
      }
      return {'index.html': defaultTemplate(templateData)}
    })
  ]
}

export default merge(getConfig(), config)
```

```json
// package.json

"scripts": {
    "prebuild": "rimraf ./public",
    "build": "cross-env NODE_ENV=development webpack -d ../_shared/src/index.js",
    "start": "cross-env NODE_ENV=development webpack-dev-server -d --inline --content-base ./public/ ../_shared/src/index.js"
}
```


## License

This software is released into the public domain.
