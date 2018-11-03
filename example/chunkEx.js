const chunk = require('../lib/chunk')

console.log("chunk(['a', 'b', 'c', 'd'], 2)=", chunk(['a', 'b', 'c', 'd'], 2))
// => [['a', 'b'], ['c', 'd']]

console.log("chunk(['a', 'b', 'c', 'd'], 3)=", chunk(['a', 'b', 'c', 'd'], 3))
// => [['a', 'b', 'c'], ['d']]
