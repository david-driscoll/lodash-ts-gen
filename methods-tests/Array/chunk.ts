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
    name: chunk
    params: 
        (0) array: Array
        (1) [size=1]: number
    returns: Array
    type: Function
    comment: 
        Creates an array of elements split into groups the length of `size`.
        If `collection` can't be split evenly, the final chunk will be the remaining
        elements.
        
        @static
        @memberOf _
        @category Array
        @param {Array} array The array to process.
        @param {number} [size=1] The length of each chunk.
        @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
        @returns {Array} Returns the new array containing chunks.
        @example
        
        _.chunk(['a', 'b', 'c', 'd'], 2);
        // => [['a', 'b'], ['c', 'd']]
        
        _.chunk(['a', 'b', 'c', 'd'], 3);
        // => [['a', 'b', 'c'], ['d']]
    lang: js
***/
/// <reference path="../../methods/Array/chunk.d.ts"/>
