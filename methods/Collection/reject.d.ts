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
    name: reject
    params: 
        (0) collection: Array|Object|string
        (1) [predicate=_.identity]: Function|Object|string
        (2) [thisArg]: *
    returns: Array
    type: Function
    comment: 
        The opposite of `_.filter`; this method returns the elements of `collection`
        that `predicate` does **not** return truthy for.
        
        @static
        @memberOf _
        @category Collection
        @param {Array|Object|string} collection The collection to iterate over.
        @param {Function|Object|string} [predicate=_.identity] The function invoked
        per iteration.
        @param {*} [thisArg] The `this` binding of `predicate`.
        @returns {Array} Returns the new filtered array.
        @example
        
        _.reject([1, 2, 3, 4], function(n) {
        return n % 2 == 0;
        });
        // => [1, 3]
        
        var users = [
        { 'user': 'barney', 'age': 36, 'active': false },
        { 'user': 'fred',   'age': 40, 'active': true }
        ];
        
        // using the `_.matches` callback shorthand
        _.pluck(_.reject(users, { 'age': 40, 'active': true }), 'user');
        // => ['barney']
        
        // using the `_.matchesProperty` callback shorthand
        _.pluck(_.reject(users, 'active', false), 'user');
        // => ['fred']
        
        // using the `_.property` callback shorthand
        _.pluck(_.reject(users, 'active'), 'user');
        // => ['barney']
    lang: js
***/
/// <reference path="_.d.ts"/>
