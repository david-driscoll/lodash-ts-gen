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
    name: pluck
    params: 
        (0) collection: Array|Object|string
        (1) path: Array|string
    returns: Array
    type: Function
    comment: 
        Gets the property value of `path` from all elements in `collection`.
        
        @static
        @memberOf _
        @category Collection
        @param {Array|Object|string} collection The collection to iterate over.
        @param {Array|string} path The path of the property to pluck.
        @returns {Array} Returns the property values.
        @example
        
        var users = [
        { 'user': 'barney', 'age': 36 },
        { 'user': 'fred',   'age': 40 }
        ];
        
        _.pluck(users, 'user');
        // => ['barney', 'fred']
        
        var userIndex = _.indexBy(users, 'user');
        _.pluck(userIndex, 'age');
        // => [36, 40] (iteration order is not guaranteed)
    lang: js
***/
/// <reference path="_.d.ts"/>
