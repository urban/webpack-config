import test from 'tape'
import getEntry from '../src/get-entry'

function check (entry, path, t) {
  t.equal(typeof entry, 'object', 'Is an Object.')
  t.equal(Object.keys(entry).length, 1, 'It has one entry.')
  t.equal(Object.keys(entry)[0], 'main', 'It has an entry key named main.')
  t.equal(Array.isArray(entry.main), true, 'Entry values are Arrays.')
  t.equal(entry.main.length, 1, 'Entry values have only one path. ')
  t.equal(entry.main[0], path, 'It has the correct entry path.')
}

function checkHot (entry, path, t) {
  t.equal(typeof entry, 'object', 'Is an Object.')
  t.equal(Object.keys(entry).length, 1, 'It has one entry.')
  t.equal(Object.keys(entry)[0], 'main', 'It has an entry key named main.')
  t.equal(Array.isArray(entry.main), true, 'Entry values are Arrays.')
  t.equal(entry.main.length, 2, 'Entry values have only one path. ')
  t.equal(entry.main[0], path, 'It has the correct entry path.')
}

test('Entry from a string.', t => {
  const path = 'src/index.js'
  check(getEntry(path), path, t)
  t.end()
})

test('Hot entry from string.', t => {
  const path = 'src/index.js'
  checkHot(getEntry(path, true), path, t)
  t.end()
})

test('Entry from an Array', t => {
  const path = 'src/index.js'
  check(getEntry([path]), path, t)
  t.end()
})

test('Hot entry from an Array', t => {
  const path = 'src/index.js'
  checkHot(getEntry([path], true), path, t)
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
  checkHot(getEntry({ main: path }, true), path, t)
  checkHot(getEntry({ main: [path] }, true), path, t)
  t.end()
})
