(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
ccclodash = require('../index')
},{"../index":2}],2:[function(require,module,exports){
/** @namespace _ */
module.exports = {
  chunk: require('./lib/chunk'),
  compact: require('./lib/compact'),
  concat: require('./lib/concat')
}

},{"./lib/chunk":3,"./lib/compact":4,"./lib/concat":5}],3:[function(require,module,exports){
/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 * 
 * @memberof _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */

function chunk (array, n) {
  const clist = []
  for (let i = 0; i < array.length; i += n) {
    clist.push(array.slice(i, i + n))
  }
  return clist
}

module.exports = chunk

},{}],4:[function(require,module,exports){
/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 * 
 * @memberof _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3])
 * // => [1, 2, 3]
 */
function compact (array) {
  const clist = []
  for (let o of array) {
    if (o) clist.push(o)
  }
  return clist
}

module.exports = compact

},{}],5:[function(require,module,exports){
/**
 * Creates a new array concatenating array with any additional arrays and/or values.
 * 
 * @memberof _
 * @since 0.1.0
 * @param {Array} array The array to concatenate.
 * @param {...*} [values] The values to concatenate.
 * @example
 * 
 * _.concat([1], 2, [3], [[4]]); 
 * // => [1, 2, [3], [[4]]
 */
function concat () {
  const clist = arguments[0].slice(0)
  for (let i = 1; i < arguments.length; i++) {
    clist.push(arguments[i])
  }
  return clist
}

module.exports = concat

},{}]},{},[1]);
