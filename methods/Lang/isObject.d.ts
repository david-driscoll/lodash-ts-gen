/*
    aliases: 
    category: Lang
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: _
    name: isObject
    params: 
        (0) value: *
    returns: boolean
    type: Function
    comment: 
        Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
        (e.g. arrays, functions, objects, regexes, 
ew Number(0)`, and 
ew String('')`)
        
        @static
        @memberOf _
        @category Lang
        @param {*} value The value to check.
        @returns {boolean} Returns `true` if `value` is an object, else `false`.
        @example
        
        _.isObject({});
        // => true
        
        _.isObject([1, 2, 3]);
        // => true
        
        _.isObject(1);
        // => false
    lang: js
***/
/// <reference path="_.d.ts"/>
