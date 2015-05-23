/*
    aliases: eachRight
    category: Collection
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: _
    name: forEachRight
    params: 
        (0) collection: Array|Object|string
        (1) [iteratee=_.identity]: Function
        (2) [thisArg]: *
    returns: Array|Object|string
    type: Function
    comment: 
        This method is like `_.forEach` except that it iterates over elements of
        `collection` from right to left.
        
        @static
        @memberOf _
        @alias eachRight
        @category Collection
        @param {Array|Object|string} collection The collection to iterate over.
        @param {Function} [iteratee=_.identity] The function invoked per iteration.
        @param {*} [thisArg] The `this` binding of `iteratee`.
        @returns {Array|Object|string} Returns `collection`.
        @example
        
        _([1, 2]).forEachRight(function(n) {
        console.log(n);
        }).value();
        // => logs each value from right to left and returns the array
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
