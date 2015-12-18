/* @flow */
import reduce from 'lodash.reduce'

export default function getEntry (entry: string | Array<string> | Object, entries: Array<string> = []) {
  if (typeof entry === 'string') {
    return getEntry([entry], entries)
  }
  if (Array.isArray(entry)) {
    return getEntry({ main: entry }, entries)
  }
  return reduce(entry, (result, value, key) => {
    result[key] = [
      ...entries,
      ...(Array.isArray(value) ? value : [value])
    ]
    return result
  }, {})
}
