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
function concat (array = []) {
  const clist = arguments[0].slice(0)
  for (let i = 1; i < arguments.length; i++) {
    clist.push(arguments[i])
  }
  return clist
}

module.exports = concat
