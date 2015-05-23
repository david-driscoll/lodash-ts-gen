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
    name: isError
    params: 
        (0) value: *
    returns: boolean
    type: Function
    comment: 
        Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
        `SyntaxError`, `TypeError`, or `URIError` object.
        
        @static
        @memberOf _
        @category Lang
        @param {*} value The value to check.
        @returns {boolean} Returns `true` if `value` is an error object, else `false`.
        @example
        
        _.isError(new Error);
        // => true
        
        _.isError(Error);
        // => false
    lang: js
***/
/// <reference path="_.d.ts"/>
