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
    name: findWhere
    params: 
        (0) collection: Array|Object|string
        (1) source: Object
    returns: *
    type: Function
    comment: 
        Performs a deep comparison between each element in `collection` and the
        source object, returning the first element that has equivalent property
        values.
        
        **Note:** This method supports comparing arrays, booleans, `Date` objects,
        numbers, `Object` objects, regexes, and strings. Objects are compared by
        their own, not inherited, enumerable properties. For comparing a single
        own or inherited property value see `_.matchesProperty`.
        
        @static
        @memberOf _
        @category Collection
        @param {Array|Object|string} collection The collection to search.
        @param {Object} source The object of property values to match.
        @returns {*} Returns the matched element, else `undefined`.
        @example
        
        var users = [
        { 'user': 'barney', 'age': 36, 'active': true },
        { 'user': 'fred',   'age': 40, 'active': false }
        ];
        
        _.result(_.findWhere(users, { 'age': 36, 'active': true }), 'user');
        // => 'barney'
        
        _.result(_.findWhere(users, { 'age': 40, 'active': false }), 'user');
        // => 'fred'
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
