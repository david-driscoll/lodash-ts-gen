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
    name: size
    params: 
        (0) collection: Array|Object|string
    returns: number
    type: Function
    comment: 
        Gets the size of `collection` by returning its length for array-like
        values or the number of own enumerable properties for objects.
        
        @static
        @memberOf _
        @category Collection
        @param {Array|Object|string} collection The collection to inspect.
        @returns {number} Returns the size of `collection`.
        @example
        
        _.size([1, 2, 3]);
        // => 3
        
        _.size({ 'a': 1, 'b': 2 });
        // => 2
        
        _.size('pebbles');
        // => 7
    lang: js
***/
/// <reference path="_.d.ts"/>
