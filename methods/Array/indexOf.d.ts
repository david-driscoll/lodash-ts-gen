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
    name: indexOf
    params: 
        (0) array: Array
        (1) value: *
        (2) [fromIndex=0]: boolean|number
    returns: number
    type: Function
    comment: 
        Gets the index at which the first occurrence of `value` is found in `array`
        using [`SameValueZero`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
        for equality comparisons. If `fromIndex` is negative, it is used as the offset
        from the end of `array`. If `array` is sorted providing `true` for `fromIndex`
        performs a faster binary search.
        
        @static
        @memberOf _
        @category Array
        @param {Array} array The array to search.
        @param {*} value The value to search for.
        @param {boolean|number} [fromIndex=0] The index to search from or `true`
        to perform a binary search on a sorted array.
        @returns {number} Returns the index of the matched value, else `-1`.
        @example
        
        _.indexOf([1, 2, 1, 2], 2);
        // => 1
        
        // using `fromIndex`
        _.indexOf([1, 2, 1, 2], 2, 2);
        // => 3
        
        // performing a binary search
        _.indexOf([1, 1, 2, 2], 2, true);
        // => 2
    lang: js
***/
/// <reference path="_.d.ts"/>
