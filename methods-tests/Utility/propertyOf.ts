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
    name: propertyOf
    params: 
        (0) object: Object
    returns: Function
    type: Function
    comment: 
        The opposite of `_.property`; this method creates a function that returns
        the property value at a given path on `object`.
        
        @static
        @memberOf _
        @category Utility
        @param {Object} object The object to query.
        @returns {Function} Returns the new function.
        @example
        
        var array = [0, 1, 2],
        object = { 'a': array, 'b': array, 'c': array };
        
        _.map(['a[2]', 'c[0]'], _.propertyOf(object));
        // => [2, 0]
        
        _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
        // => [2, 0]
    lang: js
***/
/// <reference path="../../methods/Utility/propertyOf.d.ts"/>
