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
    name: zipWith
    params: 
        (0) [arrays]: ...Array
        (1) [iteratee]: Function
        (2) [thisArg]: *
    returns: Array
    type: Function
    comment: 
        This method is like `_.zip` except that it accepts an iteratee to specify
        how grouped values should be combined. The `iteratee` is bound to `thisArg`
        and invoked with four arguments: (accumulator, value, index, group).
        
        @static
        @memberOf _
        @category Array
        @param {...Array} [arrays] The arrays to process.
        @param {Function} [iteratee] The function to combine grouped values.
        @param {*} [thisArg] The `this` binding of `iteratee`.
        @returns {Array} Returns the new array of grouped elements.
        @example
        
        _.zipWith([1, 2], [10, 20], [100, 200], _.add);
        // => [111, 222]
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
