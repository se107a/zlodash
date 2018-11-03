# ccclodash <sup>[![Version Badge][2]][1]</sup>

[![Build Status][3]][4]
[![dependency status][5]][6]
[![dev dependency status][7]][8]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][11]][1]

Reimplement some function of lodash, just a practice

## Install

```
$ npm i ccclodash
```

## Document

* https://rawgit.com/se107a/ccclodash/master/docs/-_.html

## Example

File : ex1.js

```js
const _ = require('ccclodash')

console.log("_.chunk(['a', 'b', 'c', 'd'], 2)=", _.chunk(['a', 'b', 'c', 'd'], 2))
console.log("_.chunk(['a', 'b', 'c', 'd'], 3)=", _.chunk(['a', 'b', 'c', 'd'], 3))

```

Run

```
$ node ex1.js
_.chunk(['a', 'b', 'c', 'd'], 2)= [ [ 'a', 'b' ], [ 'c', 'd' ] ]
_.chunk(['a', 'b', 'c', 'd'], 3)= [ [ 'a', 'b', 'c' ], [ 'd' ] ]
```

File : ex2.js

```js
const _ = require('ccclodash')

console.log("_.compact([0, 1, false, 2, '', 3])=", _.compact([0, 1, false, 2, '', 3]))

```

Run

```
$ node ex2.js
_.compact([0, 1, false, 2, '', 3])=[ 1, 2, 3 ]
```

File : ex3.js

```js
const _ = require('ccclodash')

var array = [1]
console.log("_.concat(array, 2, [3], [[4]])=",  _.concat(array, 2, [3], [[4]]))
```

Run

```
$ node ex3.js
_.concat(array, 2, [3], [[4]])= [1, 2, [3], [[4]]]
```

## Test

```
$ mocha

  chunk
    √ _.chunk(['a', 'b', 'c', 'd'], 2) equalTo [ [ 'a', 'b' ], [ 'c', 'd' ] ] (52ms)
    √ _.chunk(['a', 'b', 'c', 'd'], 3) equalTo [ [ 'a', 'b', 'c' ], [ 'd' ] ]
    √ _.chunk(['a', 'b', 'c', 'd'], 3) notEqualTo [ [ 'a', 'b'], ['c' , 'd' ] ]

  compact
    √ _.compact([0, 1, false, 2, '', 3]) equalTo [ 1, 2, 3 ]

  concat
    √ _.concat(array, 2, [3], [[4]]) equalTo [1, 2, [3], [[4]]] (73ms)
    √ _.concat(array, 2, [3], [[4]]) equalTo [ 1, 2, 3 ]


  6 passing (175ms)
```

[1]: https://npmjs.org/package/ccclodash
[2]: http://versionbadg.es/se107a/ccclodash.svg
[3]: https://api.travis-ci.org/se107a/ccclodash.svg
[4]: https://travis-ci.org/se107a/ccclodash
[5]: https://david-dm.org/se107a/ccclodash.svg
[6]: https://david-dm.org/se107a/ccclodash
[7]: https://david-dm.org/se107a/ccclodash/dev-status.svg
[8]: https://david-dm.org/se107a/ccclodash?type=dev
[9]: https://ci.testling.com/se107a/ccclodash.png
[10]: https://ci.testling.com/se107a/ccclodash
[11]: https://nodei.co/npm/ccclodash.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/ccclodash.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/ccclodash.svg
[downloads-url]: http://npm-stat.com/charts.html?package=ccclodash
