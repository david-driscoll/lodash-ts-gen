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
    name: methodOf
    params: 
        (0) object: Object
        (1) [partials]: ...*
    returns: Function
    type: Function
    comment: 
        The opposite of `_.method`; this method creates a function that invokes
        the method at a given path on `object` and prepends any additional `_.methodOf`
        arguments to those provided to the created function.
        
        @static
        @memberOf _
        @category Utility
        @param {Object} object The object to query.
        @param {...*} [partials] The arguments to be partially applied.
        @returns {Function} Returns the new function.
        @example
        
        var array = _.times(3, _.constant),
        object = { 'a': array, 'b': array, 'c': array };
        
        _.map(['a[2]', 'c[0]'], _.methodOf(object));
        // => [2, 0]
        
        _.map([['a', '2'], ['c', '0']], _.methodOf(object));
        // => [2, 0]
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
