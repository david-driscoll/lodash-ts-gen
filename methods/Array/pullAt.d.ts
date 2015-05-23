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
    name: pullAt
    params: 
        (0) array: Array
        (1) [indexes]: ...(number|number[]
    returns: Array
    type: Function
    comment: 
        Removes elements from `array` corresponding to the given indexes and returns
        an array of the removed elements. Indexes may be specified as an array of
        indexes or as individual arguments.
        
        **Note:** Unlike `_.at`, this method mutates `array`.
        
        @static
        @memberOf _
        @category Array
        @param {Array} array The array to modify.
        @param {...(number|number[])} [indexes] The indexes of elements to remove,
        specified as individual indexes or arrays of indexes.
        @returns {Array} Returns the new array of removed elements.
        @example
        
        var array = [5, 10, 15, 20];
        var evens = _.pullAt(array, 1, 3);
        
        console.log(array);
        // => [5, 15]
        
        console.log(evens);
        // => [10, 20]
    lang: js
***/
/// <reference path="_.d.ts"/>
