/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @memberof _
 * @since 0.4.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flattenDeep([1, [2, [3, [4]], 5]]);
 * // => [1, 2, 3, 4, 5]
 */

function flattenDeep (array = []) {
  let clist = []
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      let tlist = flattenDeep(array[i])
      clist = clist.concat(tlist)
    } else {
      clist.push(array[i])
    }
  }
  return clist
}

module.exports = flattenDeep
