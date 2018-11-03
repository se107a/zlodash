/* eslint-env mocha */
const assert = require('assert')
const compact = require('../lib/compact')

describe('compact', function () {
  it("_.compact([0, 1, false, 2, '', 3]) equalTo [ 1, 2, 3 ]", function () {
    assert.deepStrictEqual(compact([0, 1, false, 2, '', 3]), [ 1, 2, 3 ])
  })
})
