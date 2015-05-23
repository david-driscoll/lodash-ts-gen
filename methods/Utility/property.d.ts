/*
    aliases: 
    category: Utility
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: _
    name: property
    params: 
        (0) path: Array|string
    returns: Function
    type: Function
    comment: 
        Creates a function that returns the property value at `path` on a
        given object.
        
        @static
        @memberOf _
        @category Utility
        @param {Array|string} path The path of the property to get.
        @returns {Function} Returns the new function.
        @example
        
        var objects = [
        { 'a': { 'b': { 'c': 2 } } },
        { 'a': { 'b': { 'c': 1 } } }
        ];
        
        _.map(objects, _.property('a.b.c'));
        // => [2, 1]
        
        _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
        // => [1, 2]
    lang: js
***/
/// <reference path="_.d.ts"/>
