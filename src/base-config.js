/* @flow */
import webpack, {NoErrorsPlugin} from 'webpack'
import cssnext from 'cssnext'

const config: Object = {

  output: {
    filename: '[name].js',
    cssFilename: '[name].css',
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
    packageAlias: 'browser'
  },

  stats: {
    colors: true,
    timings: true
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.json$/,
        loaders: ['json']
      },
      {
        test: /\.png/,
        loaders: ['url?limit=8192&mimetype=image/png']
      },
      {
        test: /\.jpg/,
        loaders: ['url?limit=8192&mimetype=image/jpg']
      },
      {
        test: /\.gif/,
        loaders: ['url?limit=8192&mimetype=image/gif']
      },
      {
        test: /\.svg/,
        loaders: ['url?limit=8192&mimetype=image/svg+xml']
      },
      {
        test: /\.otf/,
        loaders: ['url?limit=100000&mimetype=font/otf']
      },
      {
        test: /\.eot/,
        loaders: ['url?limit=100000&mimetype=application/vnd.ms-fontobject']
      }, {
        test: /\.woff2/,
        loaders: ['url?limit=100000&mimetype=application/font-woff2']
      }, {
        test: /\.woff/,
        loaders: ['url?limit=100000&mimetype=application/font-woff']
      }, {
        test: /\.ttf/,
        loaders: ['url?limit=100000&mimetype=application/font-ttf']
      }
    ]
  },

  postcss: () => {
    return [ cssnext() ]
  }
}

export default config
