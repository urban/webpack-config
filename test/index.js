import { sync as globSync } from 'glob'

globSync('**/*-test.js', { realpath: true, cwd: __dirname }).forEach(require)
