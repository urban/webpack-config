import getConfig from '../../src'
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
