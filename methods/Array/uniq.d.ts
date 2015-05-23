/*
    aliases: unique
    category: Array
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: _
    name: uniq
    params: 
        (0) array: Array
        (1) [isSorted]: boolean
        (2) [iteratee]: Function|Object|string
        (3) [thisArg]: *
    returns: Array
    type: Function
    comment: 
        Creates a duplicate-free version of an array, using
        [`SameValueZero`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
        for equality comparisons, in which only the first occurence of each element
        is kept. Providing `true` for `isSorted` performs a faster search algorithm
        for sorted arrays. If an iteratee function is provided it is invoked for
        each element in the array to generate the criterion by which uniqueness
        is computed. The `iteratee` is bound to `thisArg` and invoked with three
        arguments: (value, index, array).
        
        If a property name is provided for `iteratee` the created `_.property`
        style callback returns the property value of the given element.
        
        If a value is also provided for `thisArg` the created `_.matchesProperty`
        style callback returns `true` for elements that have a matching property
        value, else `false`.
        
        If an object is provided for `iteratee` the created `_.matches` style
        callback returns `true` for elements that have the properties of the given
        object, else `false`.
        
        @static
        @memberOf _
        @alias unique
        @category Array
        @param {Array} array The array to inspect.
        @param {boolean} [isSorted] Specify the array is sorted.
        @param {Function|Object|string} [iteratee] The function invoked per iteration.
        @param {*} [thisArg] The `this` binding of `iteratee`.
        @returns {Array} Returns the new duplicate-value-free array.
        @example
        
        _.uniq([2, 1, 2]);
        // => [2, 1]
        
        // using `isSorted`
        _.uniq([1, 1, 2], true);
        // => [1, 2]
        
        // using an iteratee function
        _.uniq([1, 2.5, 1.5, 2], function(n) {
        return this.floor(n);
        }, Math);
        // => [1, 2.5]
        
        // using the `_.property` callback shorthand
        _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
        // => [{ 'x': 1 }, { 'x': 2 }]
    lang: js
***/
/// <reference path="_.d.ts"/>
