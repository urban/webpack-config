/* @flow */
import invariant from 'invariant'
import { DefinePlugin, NoErrorsPlugin, HotModuleReplacementPlugin } from 'webpack'
import ExtractTextPlugin, { extract } from 'extract-text-webpack-plugin'
import autoprefixer from 'autoprefixer'
import { smart as merge } from 'webpack-merge'

const ENV = process.env.NODE_ENV || 'development'
const PROD = ENV === 'production'
const DEV = !PROD
const BUILD_DEV = process.env.BUILD_DEV || DEV
const BUILD_PRERELEASE = process.env.BUILD_PRERELEASE || false

const baseConfig: Object = {
  output: {
    filename: '[name].js',
    cssFilename: '[name].css',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    packageAlias: 'browser'
  },
  stats: { colors: true, timings: true },
  plugins: [ new NoErrorsPlugin() ],
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.json$/, loaders: ['json'] },
      { test: /\.jpe?g$|\.gif$|\.png$/i, loader: 'url?limit=10000' },
      { test: /\.svg|\.otf|\.eot|\.woff|\.woff2|\.ttf/i,
        loader: 'url?limit=100000' }
    ]
  },

  postcss: () => [autoprefixer]
}

export default function (config: Object, isDev: boolean = DEV): Object {
  invariant(
    config && config.context && config.entry && config.output && config.output.path,
    'Must pass in config options object with `context`,  `entry` and `output.path` properties.'
  )

  const cssFilename = config.output.cssFilename || baseConfig.output.cssFilename
  const cssLoaders = isDev
    ? 'style!css?modules!postcss'
    : extract('style', 'css?modules!postcss')

  return merge(baseConfig, config, {
    cache: isDev,
    devtools: isDev ? 'cheap-module-eval-source-map' : 'source-map',
    stats: { reasons: isDev },
    module: {
      loaders: [
        { test: /\.css$/, loader: cssLoaders }
      ]
    },
    plugins: [
      new DefinePlugin({
        __DEV__: BUILD_DEV,
        __PRERELEASE__: BUILD_PRERELEASE
      }),
      ...(isDev
        ? [new HotModuleReplacementPlugin()]
        : [new ExtractTextPlugin(cssFilename, { allChunks: true })]
      )
    ]
  })
}
