/* @flow */
import test from 'tape'
import getEntry from '../src/get-entry'

function check (entry: Object, path: string, t: Function): void {
  t.equal(typeof entry, 'object', 'Is an Object.')
  t.equal(Object.keys(entry).length, 1, 'It has one entry.')
  t.equal(Object.keys(entry)[0], 'main', 'It has an entry key named main.')
  t.equal(Array.isArray(entry.main), true, 'Entry values are Arrays.')
  t.equal(entry.main.length, 1, 'Entry values have only one path.')
  t.equal(entry.main[0], path, 'It has the correct entry path.')
}

function checkHot (entry: Object, path: string, t: Function): void {
  t.equal(typeof entry, 'object', 'Is an Object.')
  t.equal(Object.keys(entry).length, 1, 'It has one entry.')
  t.equal(Object.keys(entry)[0], 'main', 'It has an entry key named main.')
  t.equal(Array.isArray(entry.main), true, 'Entry values are Arrays.')
  t.equal(entry.main.length, 2, 'Entry values have only one path.')
  t.equal(entry.main[1], path, 'It has the correct entry path.')
}

test('Entry from a string.', t => {
  const path = 'src/index.js'
  check(getEntry(path), path, t)
  t.end()
})

test('Hot entry from string.', t => {
  const path = 'src/index.js'
  const entries = ['webpack/hot/dev-server']
  checkHot(getEntry(path, entries), path, t)
  t.end()
})

test('Entry from an Array', t => {
  const path = 'src/index.js'
  check(getEntry([path]), path, t)
  t.end()
})

test('Hot entry from an Array', t => {
  const path = 'src/index.js'
  const entries = ['webpack/hot/dev-server']
  checkHot(getEntry([path], entries), path, t)
  t.end()
})

test('Entry from an Object', t => {
  const path = 'src/index.js'
  check(getEntry({ main: path }), path, t)
  check(getEntry({ main: [path] }), path, t)
  t.end()
})

test('Hot entry from an Object', t => {
  const path = 'src/index.js'
  const entries = ['webpack/hot/dev-server']
  checkHot(getEntry({ main: path }, entries), path, t)
  checkHot(getEntry({ main: [path] }, entries), path, t)
  t.end()
})

test('Multiple hot entries', t => {
  const hotEntry = 'webpack/hot/dev-server'
  const main = 'src/index.js'
  const test = 'test/index-test.js'
  const entry = getEntry({ main, test }, [hotEntry])
  t.equal(typeof entry, 'object', 'Is an Object.')
  t.equal(Object.keys(entry).length, 2, 'It has one entry.')
  t.equal(Object.keys(entry)[0], 'main', 'It has an entry key named main.')
  t.equal(Object.keys(entry)[1], 'test', 'It has an entry key named test.')
  t.equal(Array.isArray(entry.main), true, 'Entry values are Arrays.')
  t.equal(entry.main.length, 2, 'Entry values have multiple paths.')
  t.equal(entry.main[0], hotEntry, 'It has the correct hot entry path.')
  t.equal(entry.main[1], main, 'It has the correct entry path.')
  t.end()
})
