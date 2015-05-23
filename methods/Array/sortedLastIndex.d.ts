/*
    aliases: 
    category: Array
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: _
    name: sortedLastIndex
    params: 
        (0) array: Array
        (1) value: *
        (2) [iteratee=_.identity]: Function|Object|string
        (3) [thisArg]: *
    returns: number
    type: Function
    comment: 
        This method is like `_.sortedIndex` except that it returns the highest
        index at which `value` should be inserted into `array` in order to
        maintain its sort order.
        
        @static
        @memberOf _
        @category Array
        @param {Array} array The sorted array to inspect.
        @param {*} value The value to evaluate.
        @param {Function|Object|string} [iteratee=_.identity] The function invoked
        per iteration.
        @param {*} [thisArg] The `this` binding of `iteratee`.
        @returns {number} Returns the index at which `value` should be inserted
        into `array`.
        @example
        
        _.sortedLastIndex([4, 4, 5, 5], 5);
        // => 4
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
