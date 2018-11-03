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
function compact (array = []) {
  const clist = []
  for (let o of array) {
    if (o) clist.push(o)
  }
  return clist
}

module.exports = compact
