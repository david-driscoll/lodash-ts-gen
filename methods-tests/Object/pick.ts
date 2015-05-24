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
    name: pick
    params: 
        (0) object: Object
        (1) [predicate]: Function|...(string|string[]
        (2) [thisArg]: *
    returns: Object
    type: Function
    comment: 
        Creates an object composed of the picked `object` properties. Property
        names may be specified as individual arguments or as arrays of property
        names. If `predicate` is provided it is invoked for each property of `object`
        picking the properties `predicate` returns truthy for. The predicate is
        bound to `thisArg` and invoked with three arguments: (value, key, object).
        
        @static
        @memberOf _
        @category Object
        @param {Object} object The source object.
        @param {Function|...(string|string[])} [predicate] The function invoked per
        iteration or property names to pick, specified as individual property
        names or arrays of property names.
        @param {*} [thisArg] The `this` binding of `predicate`.
        @returns {Object} Returns the new object.
        @example
        
        var object = { 'user': 'fred', 'age': 40 };
        
        _.pick(object, 'user');
        // => { 'user': 'fred' }
        
        _.pick(object, _.isString);
        // => { 'user': 'fred' }
    lang: js
***/
/// <reference path="../../methods/Object/pick.d.ts"/>
