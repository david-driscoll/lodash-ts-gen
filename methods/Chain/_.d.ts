/*
    aliases: 
    category: Chain
    isCtor: true
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: undefined
    name: _
    params: 
        (0) value: *
    returns: Object
    type: Function
    comment: 
        Creates a `lodash` object which wraps `value` to enable implicit chaining.
        Methods that operate on and return arrays, collections, and functions can
        be chained together. Methods that return a boolean or single value will
        automatically end the chain returning the unwrapped value. Explicit chaining
        may be enabled using `_.chain`. The execution of chained methods is lazy,
        that is, execution is deferred until `_#value` is implicitly or explicitly
        called.
        
        Lazy evaluation allows several methods to support shortcut fusion. Shortcut
        fusion is an optimization that merges iteratees to avoid creating intermediate
        arrays and reduce the number of iteratee executions.
        
        Chaining is supported in custom builds as long as the `_#value` method is
        directly or indirectly included in the build.
        
        In addition to lodash methods, wrappers have `Array` and `String` methods.
        
        The wrapper `Array` methods are:
        `concat`, `join`, `pop`, `push`, everse`, `shift`, `slice`, `sort`,
        `splice`, and `unshift`
        
        The wrapper `String` methods are:
        eplace` and `split`
        
        The wrapper methods that support shortcut fusion are:
        `compact`, `drop`, `dropRight`, `dropRightWhile`, `dropWhile`, `filter`,
        `first`, `initial`, `last`, `map`, `pluck`, eject`, est`, everse`,
        `slice`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, `toArray`,
        and `where`
        
        The chainable wrapper methods are:
        `after`, `ary`, `assign`, `at`, `before`, `bind`, `bindAll`, `bindKey`,
        `callback`, `chain`, `chunk`, `commit`, `compact`, `concat`, `constant`,
        `countBy`, `create`, `curry`, `debounce`, `defaults`, `defer`, `delay`,
        `difference`, `drop`, `dropRight`, `dropRightWhile`, `dropWhile`, `fill`,
        `filter`, `flatten`, `flattenDeep`, `flow`, `flowRight`, `forEach`,
        `forEachRight`, `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `functions`,
        `groupBy`, `indexBy`, `initial`, `intersection`, `invert`, `invoke`, `keys`,
        `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
        `memoize`, `merge`, `method`, `methodOf`, `mixin`, 
egate`, `omit`, `once`,
        `pairs`, `partial`, `partialRight`, `partition`, `pick`, `plant`, `pluck`,
        `property`, `propertyOf`, `pull`, `pullAt`, `push`, ange`, earg`,
        eject`, emove`, est`, estParam`, everse`, `set`, `shuffle`,
        `slice`, `sort`, `sortBy`, `sortByAll`, `sortByOrder`, `splice`, `spread`,
        `take`, `takeRight`, `takeRightWhile`, `takeWhile`, `tap`, `throttle`,
        `thru`, `times`, `toArray`, `toPlainObject`, `transform`, `union`, `uniq`,
        `unshift`, `unzip`, `unzipWith`, `values`, `valuesIn`, `where`, `without`,
        `wrap`, `xor`, `zip`, `zipObject`, `zipWith`
        
        The wrapper methods that are **not** chainable by default are:
        `add`, `attempt`, `camelCase`, `capitalize`, `clone`, `cloneDeep`, `deburr`,
        `endsWith`, `escape`, `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`,
        `findLast`, `findLastIndex`, `findLastKey`, `findWhere`, `first`, `get`,
        `gt`, `gte`, `has`, `identity`, `includes`, `indexOf`, `inRange`, `isArguments`,
        `isArray`, `isBoolean`, `isDate`, `isElement`, `isEmpty`, `isEqual`, `isError`,
        `isFinite` `isFunction`, `isMatch`, `isNative`, `isNaN`, `isNull`, `isNumber`,
        `isObject`, `isPlainObject`, `isRegExp`, `isString`, `isUndefined`,
        `isTypedArray`, `join`, `kebabCase`, `last`, `lastIndexOf`, `lt`, `lte`,
        `max`, `min`, 
oConflict`, 
oop`, 
ow`, `pad`, `padLeft`, `padRight`,
        `parseInt`, `pop`, andom`, educe`, educeRight`, epeat`, esult`,
        unInContext`, `shift`, `size`, `snakeCase`, `some`, `sortedIndex`,
        `sortedLastIndex`, `startCase`, `startsWith`, `sum`, `template`, `trim`,
        `trimLeft`, `trimRight`, `trunc`, `unescape`, `uniqueId`, `value`, and `words`
        
        The wrapper method `sample` will return a wrapped value when 
` is provided,
        otherwise an unwrapped value is returned.
        
        @name _
        @constructor
        @category Chain
        @param {*} value The value to wrap in a `lodash` instance.
        @returns {Object} Returns the new `lodash` wrapper instance.
        @example
        
        var wrapped = _([1, 2, 3]);
        
        // returns an unwrapped value
        wrapped.reduce(function(total, n) {
        return total + n;
        });
        // => 6
        
        // returns a wrapped value
        var squares = wrapped.map(function(n) {
        return n * n;
        });
        
        _.isArray(squares);
        // => false
        
        _.isArray(squares.value());
        // => true
    lang: js
***/
interface LoDashWrapperBase<T, TWrapper> {
    /**
    * Produces the toString result of the wrapped value.
    * @return Returns the string result.
    **/
    toString(): string;

    /**
    * Extracts the wrapped value.
    * @return The wrapped value.
    **/
    valueOf(): T;

    /**
    * Extracts the wrapped value.
    * @return The wrapped value.
    **/
    value(): T;
}

interface LoDashWrapper<T> extends LoDashWrapperBase<T, LoDashWrapper<T>> { }
interface LoDashNumberWrapper extends LoDashWrapper<number> {}
interface LoDashStringWrapper extends LoDashWrapper<string> {}
interface LoDashBooleanWrapper extends LoDashWrapper<boolean> {}

interface LoDashObjectWrapper<T> extends LoDashWrapperBase<T, LoDashObjectWrapper<T>> { }

interface LoDashArrayWrapper<T> extends LoDashWrapperBase<T[], LoDashArrayWrapper<T>> {
    concat(...items: T[]): LoDashArrayWrapper<T>;
    join(seperator?: string): LoDashWrapper<string>;
    pop(): LoDashWrapper<T>;
    push(...items: T[]): void;
    reverse(): LoDashArrayWrapper<T>;
    shift(): LoDashWrapper<T>;
    slice(start: number, end?: number): LoDashArrayWrapper<T>;
    sort(compareFn?: (a: T, b: T) => number): LoDashArrayWrapper<T>;
    splice(start: number): LoDashArrayWrapper<T>;
    splice(start: number, deleteCount: number, ...items: any[]): LoDashArrayWrapper<T>;
    unshift(...items: any[]): LoDashWrapper<number>;
}

interface LoDashStatic {
    //:comment
    (value: number): LoDashWrapper<number>;
    //:comment
    (value: string): LoDashWrapper<string>;
    //:comment
    (value: boolean): LoDashWrapper<boolean>;
    //:comment
    <T>(value: Array<T>): LoDashArrayWrapper<T>;
    //:comment
    <T extends Object>(value: T): LoDashObjectWrapper<T>;
    //:comment
    <T extends {}>(value: T): LoDashObjectWrapper<T>;
    //:comment
    (value: any): LoDashWrapper<any>;
}

interface LoDashNumberArrayWrapper extends LoDashArrayWrapper<number> { }

interface LoDashStatic {
    /**
    * Creates a lodash object that wraps the given value with explicit method chaining enabled.
    * @param value The value to wrap.
    * @return The wrapper object.
    **/
    chain(value: number): LoDashWrapper<number>;
    /**
    * Creates a lodash object that wraps the given value with explicit method chaining enabled.
    * @param value The value to wrap.
    * @return The wrapper object.
    **/
    chain(value: string): LoDashWrapper<string>;
    /**
    * Creates a lodash object that wraps the given value with explicit method chaining enabled.
    * @param value The value to wrap.
    * @return The wrapper object.
    **/
    chain(value: boolean): LoDashWrapper<boolean>;
    /**
    * Creates a lodash object that wraps the given value with explicit method chaining enabled.
    * @param value The value to wrap.
    * @return The wrapper object.
    **/
    chain<T>(value: Array<T>): LoDashArrayWrapper<T>;
    /**
    * Creates a lodash object that wraps the given value with explicit method chaining enabled.
    * @param value The value to wrap.
    * @return The wrapper object.
    **/
    chain<T extends {}>(value: T): LoDashObjectWrapper<T>;
    /**
    * Creates a lodash object that wraps the given value with explicit method chaining enabled.
    * @param value The value to wrap.
    * @return The wrapper object.
    **/
    chain(value: any): LoDashWrapper<any>;
}

interface LoDashWrapperBase<T, TWrapper> {
    /**
    * Enables explicit method chaining on the wrapper object.
    * @see _.chain
    * @return The wrapper object.
    **/
    chain(): TWrapper;
}
