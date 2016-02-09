# Webpack 2 Example

This is a simple example that uses Webpack 2 and builds all the assets for your project such as JavaScript, CSS, and dynamically creates a static HTML file to the `public` directory.


## Commands

```sh
npm start
npm run build
```


## Code

```js
// webpack.config.babel.js

const webpackConfig = require('@urban/webpack-config/es').default
const HtmlPlugin = require('@urban/webpack-html-plugin').default
const merge = require('webpack-merge').smart

const config = {
  output: { path: 'public' },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: { presets: ['es2015-webpack', 'stage-0'] }
      }
    ]
  },
  plugins: [ new HtmlPlugin((assets, defaultTemplate, compiler) => {
    const templateData = {
      ...assets,
      title: 'Webpack 2',
      html: '<div id="content"></div>'
    }
    return {'index.html': defaultTemplate(templateData)}
  })
 ]
}

module.exports = merge(webpackConfig(), config)
```

```json
// package.json

"scripts": {
    "build:umd": "cross-env NODE_ENV=development webpack -d ../_shared/src/index.js",
    "build:umd:min": "cross-env NODE_ENV=production webpack -p ../_shared/src/index.js",
    "prebuild": "rm -f ./public",
    "build": "npm run build:umd && npm run build:umd:min",
    "start": "cross-env NODE_ENV=development webpack-dev-server -d --content-base ./public/ ../_shared/src/index.js"
}
```


## License

This software is released into the public domain.
