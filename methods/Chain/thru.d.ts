/*
    aliases: 
    category: Chain
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: _
    name: thru
    params: 
        (0) value: *
        (1) interceptor: Function
        (2) [thisArg]: *
    returns: *
    type: Function
    comment: 
        This method is like `_.tap` except that it returns the result of `interceptor`.
        
        @static
        @memberOf _
        @category Chain
        @param {*} value The value to provide to `interceptor`.
        @param {Function} interceptor The function to invoke.
        @param {*} [thisArg] The `this` binding of `interceptor`.
        @returns {*} Returns the result of `interceptor`.
        @example
        
        _('  abc  ')
        .chain()
        .trim()
        .thru(function(value) {
        return [value];
        })
        .value();
        // => ['abc']
    lang: js
***/
/// <reference path="_.d.ts"/>
