import getConfig from '../../src'

export default getConfig({
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: './public/'
  }
})
