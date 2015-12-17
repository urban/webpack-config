/* @flow */
import invariant from 'invariant'
import baseConfig from './base-config'
import { DefinePlugin, HotModuleReplacementPlugin } from 'webpack'
import ExtractTextPlugin, { extract } from 'extract-text-webpack-plugin'
import merge from 'webpack-merge'

const ENV = process.env.NODE_ENV || 'development'
const PROD = ENV === 'production'
const DEV = !PROD
const BUILD_DEV = process.env.BUILD_DEV || DEV
const BUILD_PRERELEASE = process.env.BUILD_PRERELEASE || false

function getConfig (config: Object, isHot: boolean = DEV): Object {
  invariant(
    config && config.context && config.entry && config.output && config.output.path,
    'Must pass in config options object with `context`,  `entry` and `output.path` properties.'
  )

  const cssLocalIdentityName = '[name]__[local]___[hash:base64:5]'
  const cssModules = `css?modules&importLoaders=1&localIdentityName=${cssLocalIdentityName}`
  const stylesheetsLoaders = ['style', cssModules, 'postcss']
  const cssFilename = config.output.cssFilename || baseConfig.output.cssFilename

  return merge(baseConfig, config, {
    cache: DEV,
    stats: {
      reasons: DEV,
    },
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: (isHot
            ? stylesheetsLoaders.join('!')
            : extract('style', stylesheetsLoaders.slice(1).join('!'))
          )
        }
      ]
    },
    plugins: [
      new DefinePlugin({
        __DEV__: BUILD_DEV,
        __PRERELEASE__: BUILD_PRERELEASE
      }),
      ...(isHot
        ? [new HotModuleReplacementPlugin()]
        : [new ExtractTextPlugin(cssFilename, { allChunks: true })]
      )
    ]
  })
}

export default getConfig
