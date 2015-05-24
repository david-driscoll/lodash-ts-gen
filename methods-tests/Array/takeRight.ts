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
    name: takeRight
    params: 
        (0) array: Array
        (1) [n=1]: number
    returns: Array
    type: Function
    comment: 
        Creates a slice of `array` with `n` elements taken from the end.
        
        @static
        @memberOf _
        @category Array
        @param {Array} array The array to query.
        @param {number} [n=1] The number of elements to take.
        @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
        @returns {Array} Returns the slice of `array`.
        @example
        
        _.takeRight([1, 2, 3]);
        // => [3]
        
        _.takeRight([1, 2, 3], 2);
        // => [2, 3]
        
        _.takeRight([1, 2, 3], 5);
        // => [1, 2, 3]
        
        _.takeRight([1, 2, 3], 0);
        // => []
    lang: js
***/
/// <reference path="../../methods/Array/takeRight.d.ts"/>
