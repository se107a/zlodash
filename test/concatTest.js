/* eslint-env mocha */
const expect = require('chai').expect
const concat = require('../lib/concat')

var array = [1]
var other = concat(array, 2, [3], [[4]])

describe('concat', function () {
  it('concat(array, 2, [3], [[4]]) equalTo [1, 2, [3], [[4]]]', function () {
    expect(other).to.deep.equal([1, 2, [3], [[4]]])
    // assert.deepStrictEqual(other, [1, 2, 3, [4]])
  })
  it('concat(array, ....) will not modify array', function () {
    expect(array).to.deep.equal([1])
    // assert.deepStrictEqual(array, [1]);
  })
})
