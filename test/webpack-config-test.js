import test from 'tape'

import fs from 'fs'
import { join } from 'path'
import webpack from 'webpack'
import getConfig from '../src'
import rimraf from 'rimraf'
import promisify from '@urban/promisify'
import { smart as merge } from 'webpack-merge'

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
  entry: join(__dirname, './fixtures/index.js'),
  output: { path: outputDir }
}

test('No errors', async function (t) {
  const config = merge(getConfig({ debug: true }), baseConfig)
  const stats = await build(config)
  t.pass('No fatal error.')
  t.equal(stats.hasErrors(), false, 'No webpack errors.')
  t.equal(stats.hasWarnings(), false, 'No webpack warnings.')
  await clear()
  t.end()
})

test('Custom configuration', function (t) {
  const config = merge(getConfig({ debug: true }), baseConfig, {
    output: {
      filename: 'test.js',
      cssFilename: 'test.css',
      path: './path/to/build/'
    },
    module: {
      loaders: ['test-loader']
    },
    plugins: ['test-plugin']
  })
  // deep destructuring
  const {
      output: {
        filename,
        cssFilename,
        path
      },
      module: { loaders },
      plugins
    } = config
  t.equal(filename, 'test.js', 'Has custom `output.filename`.')
  t.equal(cssFilename, 'test.css', 'Has custom `output.cssFilename`.')
  t.equal(path, './path/to/build/', 'Has custom `output.path`.')
  t.equal(loaders.includes('test-loader'), true, 'Has custom `module.loaders`.')
  t.equal(plugins.includes('test-plugin'), true, 'Has custom plugin.')
  t.end()
})

test('Output bundles', async function (t) {
  const config = merge(getConfig({ env: 'production' }), baseConfig)
  await build(config)
  t.equal(await exists(pathTo('main.js')), true, 'JS bundle exists.')
  t.equal(await exists(pathTo('main.css')), true, 'CSS bundle exists.')
  await clear()
  t.end()
})

test('Omit output CSS', async function (t) {
  const config = merge(getConfig({ debug: true }), baseConfig)
  await build(config)
  t.equal(await exists(pathTo('main.js')), true, 'JS bundle exists')
  try {
    await fileStat(pathTo('main.css'))
  } catch (err) {
    t.equal(err.code, 'ENOENT', 'CSS bundle does not exist.')
  }
  await clear()
  t.end()
})
