/* @flow */
import { DefinePlugin, NoErrorsPlugin } from 'webpack'
import ExtractTextPlugin, { extract } from 'extract-text-webpack-plugin'
import autoprefixer from 'autoprefixer'

type Options = {
  debug: boolean
}

const env = process.env.NODE_ENV || 'development'

const defaultOptions: Options = {
  debug: env === 'development'
}

function getConfig (options: Options = defaultOptions): Object {
  const { debug: isDebug } = { ...defaultOptions, ...options }

  return {
    output: {
      filename: '[name].js',
      cssFilename: '[name].css',
      libraryTarget: 'umd'
    },
    resolve: {
      extensions: ['', '.js', '.jsx', '.json']
    },
    cache: isDebug,
    stats: { colors: true, timings: true, reasons: isDebug },
    devtool: isDebug ? 'cheap-module-eval-source-map' : 'source-map',
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: isDebug
            ? 'style!css?modules&importLoaders=1!postcss'
            : extract('style', 'css?modules&importLoaders=1!postcss')
        },
        { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ },
        { test: /\.json$/, loader: 'json' },
        {
          test: /\.jpe?g($}\?)|\.gif($|\?)|\.png($|\?)/i,
          loader: 'url?limit=10000'
        },
        {
          test: /\.svg($|\?)|\.otf($|\?)|\.eot($|\?)|\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)/i,
          loader: 'url?limit=100000'
        }
      ]
    },
    plugins: [
      new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env)
      }),
      new NoErrorsPlugin(),
      // export CSS when not in development
      ...(isDebug
        ? []
        : [new ExtractTextPlugin('[name].css')]
      )
    ],
    postcss: () => [autoprefixer]
  }
}

export default getConfig
