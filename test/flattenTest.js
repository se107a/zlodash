/* eslint-env mocha */
const assert = require('assert')
const flattenDeep = require('../lib/flattenDeep')

describe('flattenDeep', function () {
  it('flattenDeep([1, [2, [3, [4]], 5]]) => [1, 2, 3, 4, 5]', function () {
    assert.deepStrictEqual(flattenDeep([1, [2, [3, [4]], 5]]), [1, 2, 3, 4, 5])
  })
})
