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
    name: method
    params: 
        (0) path: Array|string
        (1) [partials]: ...*
    returns: Function
    type: Function
    comment: 
        Creates a function that invokes the method at `path` on a given object
        and prepends any additional `_.method` arguments to those provided to the
        created function.
        
        @static
        @memberOf _
        @category Utility
        @param {Array|string} path The path of the method to invoke.
        @param {...*} [partials] The arguments to be partially applied.
        @returns {Function} Returns the new function.
        @example
        
        var objects = [
        { 'a': { 'b': { 'c': _.constant(2) } } },
        { 'a': { 'b': { 'c': _.constant(1) } } }
        ];
        
        _.map(objects, _.method('a.b.c'));
        // => [2, 1]
        
        _.invoke(_.sortBy(objects, _.method(['a', 'b', 'c'])), 'a.b.c');
        // => [1, 2]
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
