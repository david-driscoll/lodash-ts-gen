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
    name: invoke
    params: 
        (0) collection: Array|Object|string
        (1) path: Array|Function|string
        (2) [args]: ...*
    returns: Array
    type: Function
    comment: 
        Invokes the method at `path` of each element in `collection`, returning
        an array of the results of each invoked method. Any additional arguments
        are provided to each invoked method. If `methodName` is a function it is
        invoked for, and `this` bound to, each element in `collection`.
        
        @static
        @memberOf _
        @category Collection
        @param {Array|Object|string} collection The collection to iterate over.
        @param {Array|Function|string} path The path of the method to invoke or
        the function invoked per iteration.
        @param {...*} [args] The arguments to invoke the method with.
        @returns {Array} Returns the array of results.
        @example
        
        _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
        // => [[1, 5, 7], [1, 2, 3]]
        
        _.invoke([123, 456], String.prototype.split, '');
        // => [['1', '2', '3'], ['4', '5', '6']]
    lang: js
***/
/// <reference path="_.d.ts"/>
