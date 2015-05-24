/*
    aliases: 
    category: Utility
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: _
    name: constant
    params: 
        (0) value: *
    returns: Function
    type: Function
    comment: 
        Creates a function that returns `value`.
        
        @static
        @memberOf _
        @category Utility
        @param {*} value The value to return from the new function.
        @returns {Function} Returns the new function.
        @example
        
        var object = { 'user': 'fred' };
        var getter = _.constant(object);
        
        getter() === object;
        // => true
    lang: js
***/
/// <reference path="../../methods/Utility/constant.d.ts"/>
