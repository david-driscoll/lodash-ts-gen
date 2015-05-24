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
    name: lastIndexOf
    params: 
        (0) array: Array
        (1) value: *
        (2) [fromIndex=array.length-1]: boolean|number
    returns: number
    type: Function
    comment: 
        This method is like `_.indexOf` except that it iterates over elements of
        `array` from right to left.
        
        @static
        @memberOf _
        @category Array
        @param {Array} array The array to search.
        @param {*} value The value to search for.
        @param {boolean|number} [fromIndex=array.length-1] The index to search from
        or `true` to perform a binary search on a sorted array.
        @returns {number} Returns the index of the matched value, else `-1`.
        @example
        
        _.lastIndexOf([1, 2, 1, 2], 2);
        // => 3
        
        // using `fromIndex`
        _.lastIndexOf([1, 2, 1, 2], 2, 2);
        // => 1
        
        // performing a binary search
        _.lastIndexOf([1, 1, 2, 2], 2, true);
        // => 3
    lang: js
***/
/// <reference path="../../methods/Array/lastIndexOf.d.ts"/>
