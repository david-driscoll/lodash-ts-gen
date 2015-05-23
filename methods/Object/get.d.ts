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
    name: get
    params: 
        (0) object: Object
        (1) path: Array|string
        (2) [defaultValue]: *
    returns: *
    type: Function
    comment: 
        Gets the property value at `path` of `object`. If the resolved value is
        `undefined` the `defaultValue` is used in its place.
        
        @static
        @memberOf _
        @category Object
        @param {Object} object The object to query.
        @param {Array|string} path The path of the property to get.
        @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
        @returns {*} Returns the resolved value.
        @example
        
        var object = { 'a': [{ 'b': { 'c': 3 } }] };
        
        _.get(object, 'a[0].b.c');
        // => 3
        
        _.get(object, ['a', '0', 'b', 'c']);
        // => 3
        
        _.get(object, 'a.b.c', 'default');
        // => 'default'
    lang: js
***/
/// <reference path="_.d.ts"/>
