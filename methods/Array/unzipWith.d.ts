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
    name: unzipWith
    params: 
        (0) array: Array
        (1) [iteratee]: Function
        (2) [thisArg]: *
    returns: Array
    type: Function
    comment: 
        This method is like `_.unzip` except that it accepts an iteratee to specify
        how regrouped values should be combined. The `iteratee` is bound to `thisArg`
        and invoked with four arguments: (accumulator, value, index, group).
        
        @static
        @memberOf _
        @category Array
        @param {Array} array The array of grouped elements to process.
        @param {Function} [iteratee] The function to combine regrouped values.
        @param {*} [thisArg] The `this` binding of `iteratee`.
        @returns {Array} Returns the new array of regrouped elements.
        @example
        
        var zipped = _.zip([1, 2], [10, 20], [100, 200]);
        // => [[1, 10, 100], [2, 20, 200]]
        
        _.unzipWith(zipped, _.add);
        // => [3, 30, 300]
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
