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
    name: isDate
    params: 
        (0) value: *
    returns: boolean
    type: Function
    comment: 
        Checks if `value` is classified as a `Date` object.
        
        @static
        @memberOf _
        @category Lang
        @param {*} value The value to check.
        @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
        @example
        
        _.isDate(new Date);
        // => true
        
        _.isDate('Mon April 23 2012');
        // => false
    lang: js
***/
/// <reference path="_.d.ts"/>
