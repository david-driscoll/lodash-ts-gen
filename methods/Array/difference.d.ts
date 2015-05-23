/*
    aliases: 
    category: Array
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: _
    name: difference
    params: 
        (0) array: Array
        (1) [values]: ...Array
    returns: Array
    type: Function
    comment: 
        Creates an array excluding all values of the provided arrays using
        [`SameValueZero`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
        for equality comparisons.
        
        @static
        @memberOf _
        @category Array
        @param {Array} array The array to inspect.
        @param {...Array} [values] The arrays of values to exclude.
        @returns {Array} Returns the new array of filtered values.
        @example
        
        _.difference([1, 2, 3], [4, 2]);
        // => [1, 3]
    lang: js
***/
/// <reference path="_.d.ts"/>
