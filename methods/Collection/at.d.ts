/*
    aliases: 
    category: Collection
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: _
    name: at
    params: 
        (0) collection: Array|Object|string
        (1) [props]: ...(number|number[]|string|string[]
    returns: Array
    type: Function
    comment: 
        Creates an array of elements corresponding to the given keys, or indexes,
        of `collection`. Keys may be specified as individual arguments or as arrays
        of keys.
        
        @static
        @memberOf _
        @category Collection
        @param {Array|Object|string} collection The collection to iterate over.
        @param {...(number|number[]|string|string[])} [props] The property names
        or indexes of elements to pick, specified individually or in arrays.
        @returns {Array} Returns the new array of picked elements.
        @example
        
        _.at(['a', 'b', 'c'], [0, 2]);
        // => ['a', 'c']
        
        _.at(['barney', 'fred', 'pebbles'], 0, 2);
        // => ['barney', 'pebbles']
    lang: js
***/
/// <reference path="_.d.ts"/>
