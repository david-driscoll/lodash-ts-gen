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
        (1) [args]: ...*
    returns: Function
    type: Function
    comment: 
        The opposite of `_.method`; this method creates a function that invokes
        the method at a given path on `object`. Any additional arguments are
        provided to the invoked method.
        
        @static
        @memberOf _
        @category Utility
        @param {Object} object The object to query.
        @param {...*} [args] The arguments to invoke the method with.
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
