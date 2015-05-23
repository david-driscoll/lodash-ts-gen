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
    name: omit
    params: 
        (0) object: Object
        (1) [predicate]: Function|...(string|string[]
        (2) [thisArg]: *
    returns: Object
    type: Function
    comment: 
        The opposite of `_.pick`; this method creates an object composed of the
        own and inherited enumerable properties of `object` that are not omitted.
        
        @static
        @memberOf _
        @category Object
        @param {Object} object The source object.
        @param {Function|...(string|string[])} [predicate] The function invoked per
        iteration or property names to omit, specified as individual property
        names or arrays of property names.
        @param {*} [thisArg] The `this` binding of `predicate`.
        @returns {Object} Returns the new object.
        @example
        
        var object = { 'user': 'fred', 'age': 40 };
        
        _.omit(object, 'age');
        // => { 'user': 'fred' }
        
        _.omit(object, _.isNumber);
        // => { 'user': 'fred' }
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
