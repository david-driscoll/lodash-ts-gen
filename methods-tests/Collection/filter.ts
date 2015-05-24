/*
    aliases: select
    category: Collection
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: _
    name: filter
    params: 
        (0) collection: Array|Object|string
        (1) [predicate=_.identity]: Function|Object|string
        (2) [thisArg]: *
    returns: Array
    type: Function
    comment: 
        Iterates over elements of `collection`, returning an array of all elements
        `predicate` returns truthy for. The predicate is bound to `thisArg` and
        invoked with three arguments: (value, index|key, collection).
        
        If a property name is provided for `predicate` the created `_.property`
        style callback returns the property value of the given element.
        
        If a value is also provided for `thisArg` the created `_.matchesProperty`
        style callback returns `true` for elements that have a matching property
        value, else `false`.
        
        If an object is provided for `predicate` the created `_.matches` style
        callback returns `true` for elements that have the properties of the given
        object, else `false`.
        
        @static
        @memberOf _
        @alias select
        @category Collection
        @param {Array|Object|string} collection The collection to iterate over.
        @param {Function|Object|string} [predicate=_.identity] The function invoked
        per iteration.
        @param {*} [thisArg] The `this` binding of `predicate`.
        @returns {Array} Returns the new filtered array.
        @example
        
        _.filter([4, 5, 6], function(n) {
        return n % 2 == 0;
        });
        // => [4, 6]
        
        var users = [
        { 'user': 'barney', 'age': 36, 'active': true },
        { 'user': 'fred',   'age': 40, 'active': false }
        ];
        
        // using the `_.matches` callback shorthand
        _.pluck(_.filter(users, { 'age': 36, 'active': true }), 'user');
        // => ['barney']
        
        // using the `_.matchesProperty` callback shorthand
        _.pluck(_.filter(users, 'active', false), 'user');
        // => ['fred']
        
        // using the `_.property` callback shorthand
        _.pluck(_.filter(users, 'active'), 'user');
        // => ['barney']
    lang: js
***/
/// <reference path="../../methods/Collection/filter.d.ts"/>
