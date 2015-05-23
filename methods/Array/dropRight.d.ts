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
    name: dropRight
    params: 
        (0) array: Array
        (1) [n=1]: number
    returns: Array
    type: Function
    comment: 
        Creates a slice of `array` with 
` elements dropped from the end.
        
        @static
        @memberOf _
        @category Array
        @param {Array} array The array to query.
        @param {number} [n=1] The number of elements to drop.
        @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
        @returns {Array} Returns the slice of `array`.
        @example
        
        _.dropRight([1, 2, 3]);
        // => [1, 2]
        
        _.dropRight([1, 2, 3], 2);
        // => [1]
        
        _.dropRight([1, 2, 3], 5);
        // => []
        
        _.dropRight([1, 2, 3], 0);
        // => [1, 2, 3]
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
