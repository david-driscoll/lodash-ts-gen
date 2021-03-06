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
    name: dropRightWhile
    params: 
        (0) array: Array
        (1) [predicate=_.identity]: Function|Object|string
        (2) [thisArg]: *
    returns: Array
    type: Function
    comment: 
        Creates a slice of `array` excluding elements dropped from the end.
        Elements are dropped until `predicate` returns falsey. The predicate is
        bound to `thisArg` and invoked with three arguments: (value, index, array).
        
        If a property name is provided for `predicate` the created `_.property`
        style callback returns the property value of the given element.
        
        If a value is also provided for `thisArg` the created `_.matchesProperty`
        style callback returns `true` for elements that have a matching property
        value, else `false`.
        
        If an object is provided for `predicate` the created `_.matches` style
        callback returns `true` for elements that match the properties of the given
        object, else `false`.
        
        @static
        @memberOf _
        @category Array
        @param {Array} array The array to query.
        @param {Function|Object|string} [predicate=_.identity] The function invoked
        per iteration.
        @param {*} [thisArg] The `this` binding of `predicate`.
        @returns {Array} Returns the slice of `array`.
        @example
        
        _.dropRightWhile([1, 2, 3], function(n) {
        return n > 1;
        });
        // => [1]
        
        var users = [
        { 'user': 'barney',  'active': true },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': false }
        ];
        
        // using the `_.matches` callback shorthand
        _.pluck(_.dropRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
        // => ['barney', 'fred']
        
        // using the `_.matchesProperty` callback shorthand
        _.pluck(_.dropRightWhile(users, 'active', false), 'user');
        // => ['barney']
        
        // using the `_.property` callback shorthand
        _.pluck(_.dropRightWhile(users, 'active'), 'user');
        // => ['barney', 'fred', 'pebbles']
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
