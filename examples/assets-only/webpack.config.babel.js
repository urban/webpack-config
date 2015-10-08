import getConfig from '@urban/webpack-config'

export default getConfig({
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: './public/'
  }
})
