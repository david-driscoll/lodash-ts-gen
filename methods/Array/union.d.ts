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
    name: union
    params: 
        (0) [arrays]: ...Array
    returns: Array
    type: Function
    comment: 
        Creates an array of unique values, in order, of the provided arrays using
        [`SameValueZero`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
        for equality comparisons.
        
        @static
        @memberOf _
        @category Array
        @param {...Array} [arrays] The arrays to inspect.
        @returns {Array} Returns the new array of combined values.
        @example
        
        _.union([1, 2], [4, 2], [2, 1]);
        // => [1, 2, 4]
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
