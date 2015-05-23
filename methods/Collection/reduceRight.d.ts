/*
    aliases: foldr
    category: Collection
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: _
    name: reduceRight
    params: 
        (0) collection: Array|Object|string
        (1) [iteratee=_.identity]: Function
        (2) [accumulator]: *
        (3) [thisArg]: *
    returns: *
    type: Function
    comment: 
        This method is like `_.reduce` except that it iterates over elements of
        `collection` from right to left.
        
        @static
        @memberOf _
        @alias foldr
        @category Collection
        @param {Array|Object|string} collection The collection to iterate over.
        @param {Function} [iteratee=_.identity] The function invoked per iteration.
        @param {*} [accumulator] The initial value.
        @param {*} [thisArg] The `this` binding of `iteratee`.
        @returns {*} Returns the accumulated value.
        @example
        
        var array = [[0, 1], [2, 3], [4, 5]];
        
        _.reduceRight(array, function(flattened, other) {
        return flattened.concat(other);
        }, []);
        // => [4, 5, 2, 3, 0, 1]
    lang: js
***/
/// <reference path="_.d.ts"/>
