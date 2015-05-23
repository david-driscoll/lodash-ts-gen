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
    name: isArguments
    params: 
        (0) value: *
    returns: boolean
    type: Function
    comment: 
        Checks if `value` is classified as an `arguments` object.
        
        @static
        @memberOf _
        @category Lang
        @param {*} value The value to check.
        @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
        @example
        
        _.isArguments(function() { return arguments; }());
        // => true
        
        _.isArguments([1, 2, 3]);
        // => false
    lang: js
***/
/// <reference path="_.d.ts"/>
