# webpack-config

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

This is an opinionated [webpack](http://webpack.github.io/) configuration with smart defaults. It can help speed up the initial project setup time so you can focus on developing what's unique about your project.


## Table of Contents

- [Install](#install)
- [Tools Used](#tools-used)
- [Basic Usage](#basic-usage)
- [Configuration](#configuration)
- [Examples](#examples)
- [About Styles](#about-styles)
- [Credits](#credits)
- [License](#license)

## Install

This project is published as a scoped package. Use the following to install and save it as a dependency.

```sh
npm i --save @urban/webpack-config
```


### Peer Dependencies

`webpack-config` specifies many of its dependencies as `peerDependencies` in order to give the consumer of this package flexibility to decide which version to use. For instance, you might want to use React 0.13.x instead of version React 0.14.x.

In npm version `3.x.x`, `peerDependencies` are no longer installed by default. In order to install the latest versions of this packages `peerDependencies`, please run the following command.

```sh
npm i --save autoprefixer babel-loader css-loader extract-text-webpack-plugin file-loader json-loader postcss-loader style-loader url-loader webpack
```


## Tools Used

[webpack](http://webpack.github.io) is a module bundler. It takes JavaScript modules with dependencies (i.e. other JavaScript files, CSS, images, ...) and generates static assets representing those modules for the browser. It's similar to [Browserify](http://browserify.org/) but has a configuration based API.

- **Loaders**
    + [babel](https://github.com/babel/babel-loader) - Transpiles ES2015 and ES2016 code into vanilla ES5 using [Babel](https://babeljs.io).
    + [css](https://github.com/webpack/css-loader) - Loads css file with resolved imports and returns css code _(enables CSS Moduels)_.
    + [postcss](https://github.com/postcss/postcss-loader) - A fast CSS parser written in JavaScript.
      * [autoprefixer](https://github.com/postcss/autoprefixer) - Plugin to parse CSS and add vendor prefixes to CSS rules using values form [Can I Use](http://caniuse.com/).
    + [file](https://github.com/webpack/file-loader) - Emits the file into the output folder and returns the (relative) url.
    + [json](https://github.com/webpack/json-loader) - Loads file as JSON.
    + [style](https://github.com/webpack/style-loader) - Add exports of a module as style to DOM _(enabled in development)_.
    + [url](https://github.com/webpack/url-loader) - The url loader works like the file loader, but can return a Data Url if the file is smaller than a limit.

- **Plugins**
    + [DedupePlugin](http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin) - Reduces file size by removing duplicate files.
    + [DefinePlulgin](http://webpack.github.io/docs/list-of-plugins.html#defineplugin) - Inlines variables (`__DEV__` and `__PRERELEASE__`) into the code which allows a minification pass to remove dead-code.
    + [ExtractTextPlugin](https://github.com/webpack/extract-text-webpack-plugin) - Moves required CSS into a separate CSS output file _(enabled in production)_.
    + [HotModuleReplacementPlugin](http://webpack.github.io/docs/list-of-plugins.html#hotmodulereplacementplugin) - Enables Hot Module Replacement _(enabled in development)_.
    + [NoErrorsPlugin](http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin) - Prevents the output when an error occurs.
    + [OccurenceOrderPlugin](http://webpack.github.io/docs/list-of-plugins.html#occurenceorderplugin) - Assign the module and chunk ids by occurrence count making ids predictable and reduces the total file size.
    + [UglifyJs](http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin) - Minimize all JavaScript output of chunks _(enabled in production)_.


## Basic Usage

There are several different ways to invoke `webpack` from the command line.

- `webpack` for building once for development
- `webpack -d` to switch loaders to debug mode, include source maps and output path info
- `webpack -p` for building once with minification and occurence order plugins
- `webpack --watch` for continuous incremental build (can combine with `-d` or `-p`)

To use this module, create a `webpack.config.babel.js` file at the root of your project with the following content.

```js
// webpack.config.babel.js

import getConfig = '@urban/webpack-config'

export default getConfig({
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: './public/'
    }
})
```

Next, add the following to the `npm run` scripts within your `package.json` file.

```js
"scripts": {
    "start": "webpack-dev-server -d",
    "build": "NODE_ENV=production webpack -p"
}
```

You can now run your project in development with hot module replacement by typing `npm start` in the terminal from the root directory. To view the results, open a browser to [http://localhost:8080/webpack-dev-server/]().

If you'd like to build the static assets for your project, type `npm run build` into the terminal to generate all files into the `public` directory. Then type `open ./public/index.html` to view in your default browser.


### Feature flags

In order to help in developing new features, the `__DEV__` and `__PRERELEASE__` global variables are made available to your code.

```js
if (__DEV__) {
  console.log('Debug info.')
}

if (__PRERELEASE__) {
  console.log('Prerelease info.')
}
```

You can modify their default values by passing environment flags at build time. For instance, by building with `BUILD_DEV=1 BUILD_PRERELEASE=0 webpack` from terminal, it will result in the following.

```js
if (true) {
  console.log('Debug info.')
}

if (false) {
  console.log('Prerelease info.')
}
```

And with dead-code elimination through minification, it will result in the following.

```js
console.log('Debug info.')
```


## Configuration

There are two different ways the configuration can be modified.

First, by adding additional options to the configuration `object` passed into the `getConfig` method. The will then by automatically merged with the defaults and even overriding them where possible.

```js
import getConfig = '@urban/webpack-config'

// by adding additional, initial webpack config options
const config = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: './public/'
        // ...more output options (e.g. libraryTarget: 'umd')
    },
    // ...more output options (e.g. libraryTarget: 'umd')
    resolve: {
        modulesDirectories: ['src', 'node_modules']
    }
}

// then export to webpack
export default getConfig(config)
```

Second, by manually merging or overriding the output of the `getConfig` method.

```js
import getConfig = '@urban/webpack-config'

// minimum initial webpack config options
const config = getConfig({
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: './public/'
    }
})

// by manually mergin or overriding config options
export default {
    ...config
    output: {
        ...config.options
        // ...more output options (e.g. libraryTarget: 'umd')
    },
    // ...more options or overrides
    plugins: [
        ...config.plugins,
        // ...additional plugins
    ]
}
```


### Babel Config

To change the default [Babel](http://babeljs.io) settings, create a file at the root of your project called `.babelrc` that contains the [options](http://babeljs.io/docs/usage/options/) you'd like. 

See [babelrc](https://babeljs.io/docs/usage/babelrc/) for more information.

```json
{
  "presets": ["es2015", "stage-0"],
}
```


### Autoprefixer Config

To change the default [Autoprefixer](https://github.com/postcss/autoprefixer) settings, create a file at the root of your project called `browserslist` that contains the options you'd like. 

See [Browserslist docs](https://github.com/ai/browserslist#queries) for queries, browser names, config format, and default value.

```sh
# Browsers that we support

> 1%
Last 2 versions
IE 8 # sorry
```


## Examples

- [Assets Only](examples/assets-only/)
- [Assets and HTML](examples/assets-and-html/)


### About Styles

Each JavaScript module should require all it's dependencies, including styles. This is the "webpack way".

To require your styles from a JavaScript file, add the following. Be sure to include the extension: `.css` in your path. 

```js
import './path/to/styles.css'
```


#### CSS Modules

By default CSS exports all `classNames` to the global selector scope. This means every selector has the potential of introducing unintended side effects by targeting unwanted elements or clashing with other selectors. However, with [CSS Modules](https://github.com/webpack/css-loader#css-modules) you can mitigate this issue and expose your CSS to JavaScript.

With the CSS Module syntax, the `css-loader` replaces the `className` with unique identifiers. For example, if you had a CSS file located at `./path/to/styles.css` with the following.

```css
.className { color: green; }
.subClass p { color: blue; }
```

It would be transformed into the following.

```css
.path-to-styles__className___23_aKvs-b8bW2Vg3fwHozO { color: green; }
.path-to-styles__subClass___13LGdX8RMStbBE9w-t0gZ1 p { color: blue; }
```

The identifiers are then available to your JavaScript module and can accessed with the following.

```js
import { className, subClass } from './path/to/styles.css'
```

To make debugging easier, local `classNames` use the `[path][name]__[local]___[hash:base64:5]` format. Also, when authoring CSS, camelcasing `className` is recommended because they are easier to use in the importing JavaScript module.

For more information on CSS Modules, please see [Local scope](https://github.com/webpack/css-loader#local-scope), [Composing CSS classes](https://github.com/webpack/css-loader#composing-css-classes) and [Importing local class names](https://github.com/webpack/css-loader#importing-local-class-names).

_**Note:** CSS Module syntax is enabled by default for all files with the `.css` extension._

#### Autoprefixer

[Autoprefixer](https://github.com/postcss/autoprefixer) is a post-process CSS transpiler that lets you write CSS without having to worry about vendor prefixing rules.

_**Note:** Autoprefixer is enabled by default for all files with the `.css` extension through `cssnext`._


## Credits

Inspired by:

  - [webpack-how-to](https://github.com/petehunt/webpack-howto)
  - [hjs-webpack](https://github.com/HenrikJoreteg/hjs-webpack)
  - [babel-library-boilerplate](https://github.com/babel/babel-library-boilerplate)
  - [Este.js](https://github.com/este/este)
  - [library-boilerplate](https://github.com/gaearon/library-boilerplate)


## License

[The MIT License (MIT)](LICENSE). Copyright (c) [Urban Faubion](http://urbanfaubion.com).
