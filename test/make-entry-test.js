/* @flow */
import test from 'tape'
import { makeEntry } from '../src/'

const keys = Object.keys
const isArray = Array.isArray

function check (entry: Object, path: string, t: Function): void {
  t.equal(typeof entry, 'object', 'Is an Object.')
  t.equal(keys(entry).length, 1, 'It has one entry.')
  t.equal(keys(entry)[0], 'main', 'It has an entry key named main.')
  t.equal(isArray(entry.main), true, 'Entry values are Arrays.')
  t.equal(entry.main.length, 1, 'Entry values have only one path.')
  t.equal(entry.main[0], path, 'It has the correct entry path.')
}

function checkHot (entry: Object, path: string, t: Function): void {
  t.equal(typeof entry, 'object', 'Is an Object.')
  t.equal(keys(entry).length, 1, 'It has one entry.')
  t.equal(keys(entry)[0], 'main', 'It has an entry key named main.')
  t.equal(isArray(entry.main), true, 'Entry values are Arrays.')
  t.equal(entry.main.length, 2, 'Entry values have only one path.')
  t.equal(entry.main[1], path, 'It has the correct entry path.')
}

test('Entry from a string.', t => {
  const path = 'src/index.js'
  check(makeEntry(path), path, t)
  t.end()
})

test('Hot entry from string.', t => {
  const path = 'src/index.js'
  const entries = ['webpack/hot/dev-server']
  checkHot(makeEntry(path, entries), path, t)
  t.end()
})

test('Entry from an Array', t => {
  const path = 'src/index.js'
  check(makeEntry([path]), path, t)
  t.end()
})

test('Hot entry from an Array', t => {
  const path = 'src/index.js'
  const entries = ['webpack/hot/dev-server']
  checkHot(makeEntry([path], entries), path, t)
  t.end()
})

test('Entry from an Object', t => {
  const path = 'src/index.js'
  check(makeEntry({ main: path }), path, t)
  check(makeEntry({ main: [path] }), path, t)
  t.end()
})

test('Hot entry from an Object', t => {
  const path = 'src/index.js'
  const entries = ['webpack/hot/dev-server']
  checkHot(makeEntry({ main: path }, entries), path, t)
  checkHot(makeEntry({ main: [path] }, entries), path, t)
  t.end()
})

test('Multiple hot entries', t => {
  const hotEntry = 'webpack/hot/dev-server'
  const main = 'src/index.js'
  const test = 'test/index-test.js'
  const entry = makeEntry({ main, test }, [hotEntry])
  t.equal(typeof entry, 'object', 'Is an Object.')
  t.equal(keys(entry).length, 2, 'It has one entry.')
  t.equal(keys(entry)[0], 'main', 'It has an entry key named main.')
  t.equal(keys(entry)[1], 'test', 'It has an entry key named test.')
  t.equal(isArray(entry.main), true, 'Entry values are Arrays.')
  t.equal(entry.main.length, 2, 'Entry values have multiple paths.')
  t.equal(entry.main[0], hotEntry, 'It has the correct hot entry path.')
  t.equal(entry.main[1], main, 'It has the correct entry path.')
  t.end()
})
