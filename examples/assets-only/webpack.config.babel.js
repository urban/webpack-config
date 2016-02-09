import getConfig from '../../src'
import { smart as merge } from 'webpack-merge'

const config = {
  output: { path: 'public' }
}

export default merge(getConfig(), config)
