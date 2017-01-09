const webpackConfig = require('../../es').default
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
  plugins: [
    new HtmlPlugin((assets, defaultTemplate, compiler) => {
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
