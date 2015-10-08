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

export default getConfig({
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: './public/'
  },
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
})
```

```json
// package.json

"scripts": {
    "prebuild": "rimraf ./public",
    "build": "NODE_ENV=production webpack -p",
    "start": "webpack-dev-server -d"
}
```


## License

This software is released into the public domain.
