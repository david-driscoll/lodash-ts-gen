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
    name: pull
    params: 
        (0) array: Array
        (1) [values]: ...*
    returns: Array
    type: Function
    comment: 
        Removes all provided values from `array` using
        [`SameValueZero`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
        for equality comparisons.
        
        **Note:** Unlike `_.without`, this method mutates `array`.
        
        @static
        @memberOf _
        @category Array
        @param {Array} array The array to modify.
        @param {...*} [values] The values to remove.
        @returns {Array} Returns `array`.
        @example
        
        var array = [1, 2, 3, 1, 2, 3];
        
        _.pull(array, 2, 3);
        console.log(array);
        // => [1, 1]
    lang: js
***/
/// <reference path="../../methods/Array/pull.d.ts"/>
