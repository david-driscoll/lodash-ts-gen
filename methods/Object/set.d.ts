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
    name: set
    params: 
        (0) object: Object
        (1) path: Array|string
        (2) value: *
    returns: Object
    type: Function
    comment: 
        Sets the property value of `path` on `object`. If a portion of `path`
        does not exist it is created.
        
        @static
        @memberOf _
        @category Object
        @param {Object} object The object to augment.
        @param {Array|string} path The path of the property to set.
        @param {*} value The value to set.
        @returns {Object} Returns `object`.
        @example
        
        var object = { 'a': [{ 'b': { 'c': 3 } }] };
        
        _.set(object, 'a[0].b.c', 4);
        console.log(object.a[0].b.c);
        // => 4
        
        _.set(object, 'x[0].y.z', 5);
        console.log(object.x[0].y.z);
        // => 5
    lang: js
***/
/// <reference path="_.d.ts"/>
