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
    name: isFinite
    params: 
        (0) value: *
    returns: boolean
    type: Function
    comment: 
        Checks if `value` is a finite primitive number.
        
        **Note:** This method is based on [`Number.isFinite`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isfinite).
        
        @static
        @memberOf _
        @category Lang
        @param {*} value The value to check.
        @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
        @example
        
        _.isFinite(10);
        // => true
        
        _.isFinite('10');
        // => false
        
        _.isFinite(true);
        // => false
        
        _.isFinite(Object(10));
        // => false
        
        _.isFinite(Infinity);
        // => false
    lang: js
***/
/// <reference path="_.d.ts"/>
