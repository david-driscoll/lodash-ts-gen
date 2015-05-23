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
    name: matchesProperty
    params: 
        (0) path: Array|string
        (1) srcValue: *
    returns: Function
    type: Function
    comment: 
        Creates a function that compares the property value of `path` on a given
        object to `value`.
        
        **Note:** This method supports comparing arrays, booleans, `Date` objects,
        numbers, `Object` objects, regexes, and strings. Objects are compared by
        their own, not inherited, enumerable properties.
        
        @static
        @memberOf _
        @category Utility
        @param {Array|string} path The path of the property to get.
        @param {*} srcValue The value to match.
        @returns {Function} Returns the new function.
        @example
        
        var users = [
        { 'user': 'barney' },
        { 'user': 'fred' }
        ];
        
        _.find(users, _.matchesProperty('user', 'fred'));
        // => { 'user': 'fred' }
    lang: js
***/
/// <reference path="_.d.ts"/>
