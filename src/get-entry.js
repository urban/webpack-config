/* @flow */
import reduce from 'lodash.reduce'

export default function getEntry (entry: string | Array<string> | Object, isHot: boolean = false) {
  if (typeof entry === 'string') {
    return getEntry([entry], isHot)
  }
  if (Array.isArray(entry)) {
    return getEntry({ main: entry }, isHot)
  }
  return reduce(entry, (result, value, key) => {
    result[key] = [
      ...(Array.isArray(value) ? value : [value]),
      ...(isHot ? ['webpack/hot/dev-server'] : [])
    ]
    return result
  }, {})
}
