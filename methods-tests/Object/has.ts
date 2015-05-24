/*
    aliases: 
    category: Object
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: _
    name: has
    params: 
        (0) object: Object
        (1) path: Array|string
    returns: boolean
    type: Function
    comment: 
        Checks if `path` is a direct property.
        
        @static
        @memberOf _
        @category Object
        @param {Object} object The object to query.
        @param {Array|string} path The path to check.
        @returns {boolean} Returns `true` if `path` is a direct property, else `false`.
        @example
        
        var object = { 'a': { 'b': { 'c': 3 } } };
        
        _.has(object, 'a');
        // => true
        
        _.has(object, 'a.b.c');
        // => true
        
        _.has(object, ['a', 'b', 'c']);
        // => true
    lang: js
***/
/// <reference path="../../methods/Object/has.d.ts"/>
