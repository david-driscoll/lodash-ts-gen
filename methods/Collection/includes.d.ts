/*
    aliases: contains,include
    category: Collection
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: _
    name: includes
    params: 
        (0) collection: Array|Object|string
        (1) target: *
        (2) [fromIndex=0]: number
    returns: boolean
    type: Function
    comment: 
        Checks if `value` is in `collection` using
        [`SameValueZero`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
        for equality comparisons. If `fromIndex` is negative, it is used as the offset
        from the end of `collection`.
        
        @static
        @memberOf _
        @alias contains, include
        @category Collection
        @param {Array|Object|string} collection The collection to search.
        @param {*} target The value to search for.
        @param {number} [fromIndex=0] The index to search from.
        @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
        @returns {boolean} Returns `true` if a matching element is found, else `false`.
        @example
        
        _.includes([1, 2, 3], 1);
        // => true
        
        _.includes([1, 2, 3], 1, 2);
        // => false
        
        _.includes({ 'user': 'fred', 'age': 40 }, 'fred');
        // => true
        
        _.includes('pebbles', 'eb');
        // => true
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
