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
    name: remove
    params: 
        (0) array: Array
        (1) [predicate=_.identity]: Function|Object|string
        (2) [thisArg]: *
    returns: Array
    type: Function
    comment: 
        Removes all elements from `array` that `predicate` returns truthy for
        and returns an array of the removed elements. The predicate is bound to
        `thisArg` and invoked with three arguments: (value, index, array).
        
        If a property name is provided for `predicate` the created `_.property`
        style callback returns the property value of the given element.
        
        If a value is also provided for `thisArg` the created `_.matchesProperty`
        style callback returns `true` for elements that have a matching property
        value, else `false`.
        
        If an object is provided for `predicate` the created `_.matches` style
        callback returns `true` for elements that have the properties of the given
        object, else `false`.
        
        **Note:** Unlike `_.filter`, this method mutates `array`.
        
        @static
        @memberOf _
        @category Array
        @param {Array} array The array to modify.
        @param {Function|Object|string} [predicate=_.identity] The function invoked
        per iteration.
        @param {*} [thisArg] The `this` binding of `predicate`.
        @returns {Array} Returns the new array of removed elements.
        @example
        
        var array = [1, 2, 3, 4];
        var evens = _.remove(array, function(n) {
        return n % 2 == 0;
        });
        
        console.log(array);
        // => [1, 3]
        
        console.log(evens);
        // => [2, 4]
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
