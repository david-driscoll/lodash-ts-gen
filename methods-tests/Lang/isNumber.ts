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
    name: isNumber
    params: 
        (0) value: *
    returns: boolean
    type: Function
    comment: 
        Checks if `value` is classified as a `Number` primitive or object.
        
        **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
        as numbers, use the `_.isFinite` method.
        
        @static
        @memberOf _
        @category Lang
        @param {*} value The value to check.
        @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
        @example
        
        _.isNumber(8.4);
        // => true
        
        _.isNumber(NaN);
        // => true
        
        _.isNumber('8.4');
        // => false
    lang: js
***/
/// <reference path="../../methods/Lang/isNumber.d.ts"/>
