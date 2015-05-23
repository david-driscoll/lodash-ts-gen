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
    name: isNative
    params: 
        (0) value: *
    returns: boolean
    type: Function
    comment: 
        Checks if `value` is a native function.
        
        @static
        @memberOf _
        @category Lang
        @param {*} value The value to check.
        @returns {boolean} Returns `true` if `value` is a native function, else `false`.
        @example
        
        _.isNative(Array.prototype.push);
        // => true
        
        _.isNative(_);
        // => false
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
