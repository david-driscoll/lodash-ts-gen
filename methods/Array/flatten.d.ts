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
    name: flatten
    params: 
        (0) array: Array
        (1) [isDeep]: boolean
    returns: Array
    type: Function
    comment: 
        Flattens a nested array. If `isDeep` is `true` the array is recursively
        flattened, otherwise it is only flattened a single level.
        
        @static
        @memberOf _
        @category Array
        @param {Array} array The array to flatten.
        @param {boolean} [isDeep] Specify a deep flatten.
        @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
        @returns {Array} Returns the new flattened array.
        @example
        
        _.flatten([1, [2, 3, [4]]]);
        // => [1, 2, 3, [4]]
        
        // using `isDeep`
        _.flatten([1, [2, 3, [4]]], true);
        // => [1, 2, 3, 4]
    lang: js
***/
/// <reference path="_.d.ts"/>
