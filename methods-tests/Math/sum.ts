/*
    aliases: 
    category: Math
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: _
    name: sum
    params: 
        (0) collection: Array|Object|string
        (1) [iteratee]: Function|Object|string
        (2) [thisArg]: *
    returns: number
    type: Function
    comment: 
        Gets the sum of the values in `collection`.
        
        @static
        @memberOf _
        @category Math
        @param {Array|Object|string} collection The collection to iterate over.
        @param {Function|Object|string} [iteratee] The function invoked per iteration.
        @param {*} [thisArg] The `this` binding of `iteratee`.
        @returns {number} Returns the sum.
        @example
        
        _.sum([4, 6]);
        // => 10
        
        _.sum({ 'a': 4, 'b': 6 });
        // => 10
        
        var objects = [
        { 'n': 4 },
        { 'n': 6 }
        ];
        
        _.sum(objects, function(object) {
        return object.n;
        });
        // => 10
        
        // using the `_.property` callback shorthand
        _.sum(objects, 'n');
        // => 10
    lang: js
***/
/// <reference path="../../methods/Math/sum.d.ts"/>
