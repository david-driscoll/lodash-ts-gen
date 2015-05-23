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
    name: isNaN
    params: 
        (0) value: *
    returns: boolean
    type: Function
    comment: 
        Checks if `value` is `NaN`.
        
        **Note:** This method is not the same as [`isNaN`](https://es5.github.io/#x15.1.2.4)
        which returns `true` for `undefined` and other non-numeric values.
        
        @static
        @memberOf _
        @category Lang
        @param {*} value The value to check.
        @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
        @example
        
        _.isNaN(NaN);
        // => true
        
        _.isNaN(new Number(NaN));
        // => true
        
        isNaN(undefined);
        // => true
        
        _.isNaN(undefined);
        // => false
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
