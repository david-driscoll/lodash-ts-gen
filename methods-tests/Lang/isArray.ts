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
    name: isArray
    params: 
        (0) value: *
    returns: boolean
    type: Function
    comment: 
        Checks if `value` is classified as an `Array` object.
        
        @static
        @memberOf _
        @category Lang
        @param {*} value The value to check.
        @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
        @example
        
        _.isArray([1, 2, 3]);
        // => true
        
        _.isArray(function() { return arguments; }());
        // => false
    lang: js
***/
/// <reference path="../../methods/Lang/isArray.d.ts"/>
