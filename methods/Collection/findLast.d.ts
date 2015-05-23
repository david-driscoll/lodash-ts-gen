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
    name: findLast
    params: 
        (0) collection: Array|Object|string
        (1) [predicate=_.identity]: Function|Object|string
        (2) [thisArg]: *
    returns: *
    type: Function
    comment: 
        This method is like `_.find` except that it iterates over elements of
        `collection` from right to left.
        
        @static
        @memberOf _
        @category Collection
        @param {Array|Object|string} collection The collection to search.
        @param {Function|Object|string} [predicate=_.identity] The function invoked
        per iteration.
        @param {*} [thisArg] The `this` binding of `predicate`.
        @returns {*} Returns the matched element, else `undefined`.
        @example
        
        _.findLast([1, 2, 3, 4], function(n) {
        return n % 2 == 1;
        });
        // => 3
    lang: js
***/
/// <reference path="_.d.ts"/>
