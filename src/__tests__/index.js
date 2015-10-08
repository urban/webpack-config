import test from 'tape'

import fs from 'fs'
import {join} from 'path'
import webpack from 'webpack'
import getConfig from '../'
import rimraf from 'rimraf'
import promisify from '@urban/promisify'

const outputDir = join(__dirname, './tmp/')
const pathTo = join.bind(null, outputDir)
const clear = promisify(rimraf.bind(null, outputDir))

const build = promisify(webpack)
const fileStat = promisify(fs.stat)
const exists = promisify(fs.stat, function (err, result) {
  this.resolve(err === null)
})

const baseConfig = {
  context: __dirname,
  entry: join(__dirname, './fixtures/index.jsx'),
  output: { path: outputDir }
}

test('It works.', async assert => {
  assert.plan(3)
  try {
    const config = getConfig(baseConfig)
    const stats = await build(config)
    assert.pass('No fatal error.')
    assert.equal(stats.hasErrors(), false, 'No webpack errors.')
    assert.equal(stats.hasWarnings(), false, 'No webpack warnings.')
  } catch (err) {
    console.log(err)
  }
  await clear()
  assert.end()
})

test('It should allow custom configuration.', assert => {
  assert.plan(5)
  const config = getConfig({
    ...baseConfig,
    output: {
      ...baseConfig.output,
      filename: 'test.js',
      cssFilename: 'test.css',
      path: './path/to/build/'
    },
    module: {
      loaders: ['test-loader']
    },
    plugins: ['test-plugin']
  })
  assert.equal(config.output.filename, 'test.js', 'Has custom `output.filename`.')
  assert.equal(config.output.cssFilename, 'test.css', 'Has custom `output.cssFilename`.')
  assert.equal(config.output.path, './path/to/build/', 'Has custom `output.path`.')
  assert.equal(config.module.loaders.includes('test-loader'), true, 'Has custom `module.loaders`.')
  assert.equal(config.plugins.includes('test-plugin'), true, 'Has custom plugin.')
  assert.end()
})

test('In production, it should output bundles to disk.', async assert => {
  assert.plan(2)
  try {
    const isHot = false
    const config = getConfig(baseConfig, isHot)
    await build(config)
    assert.equal(await exists(pathTo('main.js')), true, 'JS bundle exists.')
    assert.equal(await exists(pathTo('main.css')), true, 'CSS bundle exists.')
  } catch (err) {
    console.log(err)
  }
  await clear()
  assert.end()
})

test('In development, it should not output CSS to disk.', async assert => {
  assert.plan(2)
  try {
    const isHot = true
    const config = getConfig(baseConfig, isHot)
    await build(config)
    assert.equal(await exists(pathTo('main.js')), true, 'JS bundle exists')
  } catch (err) {
    console.log(err)
  }
  try {
    await fileStat(pathTo('main.css'))
  } catch (err) {
    assert.equal(err.code, 'ENOENT', 'CSS bundle does not exist.')
  }
  await clear()
  assert.end()
})
