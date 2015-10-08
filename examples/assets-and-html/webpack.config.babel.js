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
