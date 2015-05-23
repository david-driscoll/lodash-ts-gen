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
    name: invert
    params: 
        (0) object: Object
        (1) [multiValue]: boolean
    returns: Object
    type: Function
    comment: 
        Creates an object composed of the inverted keys and values of `object`.
        If `object` contains duplicate values, subsequent values overwrite property
        assignments of previous values unless `multiValue` is `true`.
        
        @static
        @memberOf _
        @category Object
        @param {Object} object The object to invert.
        @param {boolean} [multiValue] Allow multiple values per key.
        @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
        @returns {Object} Returns the new inverted object.
        @example
        
        var object = { 'a': 1, 'b': 2, 'c': 1 };
        
        _.invert(object);
        // => { '1': 'c', '2': 'b' }
        
        // with `multiValue`
        _.invert(object, true);
        // => { '1': ['a', 'c'], '2': ['b'] }
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
