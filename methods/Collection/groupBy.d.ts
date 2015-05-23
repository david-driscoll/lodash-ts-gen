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
    name: groupBy
    params: 
        (0) collection: Array|Object|string
        (1) [iteratee=_.identity]: Function|Object|string
        (2) [thisArg]: *
    returns: Object
    type: Function
    comment: 
        Creates an object composed of keys generated from the results of running
        each element of `collection` through `iteratee`. The corresponding value
        of each key is an array of the elements responsible for generating the key.
        The `iteratee` is bound to `thisArg` and invoked with three arguments:
        (value, index|key, collection).
        
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
        @category Collection
        @param {Array|Object|string} collection The collection to iterate over.
        @param {Function|Object|string} [iteratee=_.identity] The function invoked
        per iteration.
        @param {*} [thisArg] The `this` binding of `iteratee`.
        @returns {Object} Returns the composed aggregate object.
        @example
        
        _.groupBy([4.2, 6.1, 6.4], function(n) {
        return Math.floor(n);
        });
        // => { '4': [4.2], '6': [6.1, 6.4] }
        
        _.groupBy([4.2, 6.1, 6.4], function(n) {
        return this.floor(n);
        }, Math);
        // => { '4': [4.2], '6': [6.1, 6.4] }
        
        // using the `_.property` callback shorthand
        _.groupBy(['one', 'two', 'three'], 'length');
        // => { '3': ['one', 'two'], '5': ['three'] }
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
