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
    name: where
    params: 
        (0) collection: Array|Object|string
        (1) source: Object
    returns: Array
    type: Function
    comment: 
        Performs a deep comparison between each element in `collection` and the
        source object, returning an array of all elements that have equivalent
        property values.
        
        **Note:** This method supports comparing arrays, booleans, `Date` objects,
        numbers, `Object` objects, regexes, and strings. Objects are compared by
        their own, not inherited, enumerable properties. For comparing a single
        own or inherited property value see `_.matchesProperty`.
        
        @static
        @memberOf _
        @category Collection
        @param {Array|Object|string} collection The collection to search.
        @param {Object} source The object of property values to match.
        @returns {Array} Returns the new filtered array.
        @example
        
        var users = [
        { 'user': 'barney', 'age': 36, 'active': false, 'pets': ['hoppy'] },
        { 'user': 'fred',   'age': 40, 'active': true, 'pets': ['baby puss', 'dino'] }
        ];
        
        _.pluck(_.where(users, { 'age': 36, 'active': false }), 'user');
        // => ['barney']
        
        _.pluck(_.where(users, { 'pets': ['dino'] }), 'user');
        // => ['fred']
    lang: js
***/
/// <reference path="../../methods/Collection/where.d.ts"/>
