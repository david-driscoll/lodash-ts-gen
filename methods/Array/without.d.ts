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
    name: without
    params: 
        (0) array: Array
        (1) [values]: ...*
    returns: Array
    type: Function
    comment: 
        Creates an array excluding all provided values using
        [`SameValueZero`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
        for equality comparisons.
        
        @static
        @memberOf _
        @category Array
        @param {Array} array The array to filter.
        @param {...*} [values] The values to exclude.
        @returns {Array} Returns the new array of filtered values.
        @example
        
        _.without([1, 2, 1, 3], 1, 2);
        // => [3]
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
