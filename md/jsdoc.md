# JSDoc 說明文件產生器

* http://usejsdoc.org/
  * 英文說明: http://devdocs.io/jsdoc/
  * 中文說明: http://www.css88.com/doc/jsdoc/index.html
  * 注意看 Block Tags，會發現其設計理念。

* http://www.css88.com/doc/jsdoc/tags-memberof.html
  * 默认情况下，@memberof标签标注的标识符是静态成员。(和 @namespace 對應)
  * 对于内部成员和实例成员，你可以使用对应名称路径的符号，或明确标注@inner或 @instance标签。


1. 存取權: @access @global @instance @package @private @protected @static @readonly @abstract
2. 模組 : @file @module @namespace @class 對應 @memberof @inner @instance
3. 欄位 : @version @todo @summary @since @see @example 
4. 參數 : @param @return @yield
5. 函數描述 : @constructs @callback @async @generator


Using @inner to make a virtual doclet an inner member

```
/** @namespace MyNamespace */
/**
 * myFunction is now MyNamespace~myFunction.
 * @function myFunction
 * @memberof MyNamespace
 * @inner
 */
```

Using @inner

```
/** @namespace */
var MyNamespace = {
    /**
     * foo is now MyNamespace~foo rather than MyNamespace.foo.
     * @inner
     */
    foo: 1
};
```