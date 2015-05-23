/*
    aliases: 
    category: Object
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: _
    name: transform
    params: 
        (0) object: Array|Object
        (1) [iteratee=_.identity]: Function
        (2) [accumulator]: *
        (3) [thisArg]: *
    returns: *
    type: Function
    comment: 
        An alternative to `_.reduce`; this method transforms `object` to a new
        `accumulator` object which is the result of running each of its own enumerable
        properties through `iteratee`, with each invocation potentially mutating
        the `accumulator` object. The `iteratee` is bound to `thisArg` and invoked
        with four arguments: (accumulator, value, key, object). Iteratee functions
        may exit iteration early by explicitly returning `false`.
        
        @static
        @memberOf _
        @category Object
        @param {Array|Object} object The object to iterate over.
        @param {Function} [iteratee=_.identity] The function invoked per iteration.
        @param {*} [accumulator] The custom accumulator value.
        @param {*} [thisArg] The `this` binding of `iteratee`.
        @returns {*} Returns the accumulated value.
        @example
        
        _.transform([2, 3, 4], function(result, n) {
        result.push(n *= n);
        return n % 2 == 0;
        });
        // => [4, 9]
        
        _.transform({ 'a': 1, 'b': 2 }, function(result, n, key) {
        result[key] = n * 3;
        });
        // => { 'a': 3, 'b': 6 }
    lang: js
***/
/// <reference path="_.d.ts"/>
