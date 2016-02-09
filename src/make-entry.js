/* @flow */

function makeEntry (entry: any, entries: Array<string> = []): Object {
  if (typeof entry === 'string') {
    entry = [entry]
  }
  if (Array.isArray(entry)) {
    entry = { main: entry }
  }
  return Object.keys(entry)
    .reduce((acc, x) => {
      const v = entry[x]
      return {
        ...acc,
        [x]: [
          ...entries,
          ...(Array.isArray(v) ? v : [v])
        ]
      }
    }, {})
}

export default makeEntry
