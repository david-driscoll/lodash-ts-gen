/*
    aliases: eq
    category: Lang
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: _
    name: isEqual
    params: 
        (0) value: *
        (1) other: *
        (2) [customizer]: Function
        (3) [thisArg]: *
    returns: boolean
    type: Function
    comment: 
        Performs a deep comparison between two values to determine if they are
        equivalent. If `customizer` is provided it is invoked to compare values.
        If `customizer` returns `undefined` comparisons are handled by the method
        instead. The `customizer` is bound to `thisArg` and invoked with three
        arguments: (value, other [, index|key]).
        
        **Note:** This method supports comparing arrays, booleans, `Date` objects,
        numbers, `Object` objects, regexes, and strings. Objects are compared by
        their own, not inherited, enumerable properties. Functions and DOM nodes
        are **not** supported. Provide a customizer function to extend support
        for comparing other values.
        
        @static
        @memberOf _
        @alias eq
        @category Lang
        @param {*} value The value to compare.
        @param {*} other The other value to compare.
        @param {Function} [customizer] The function to customize value comparisons.
        @param {*} [thisArg] The `this` binding of `customizer`.
        @returns {boolean} Returns `true` if the values are equivalent, else `false`.
        @example
        
        var object = { 'user': 'fred' };
        var other = { 'user': 'fred' };
        
        object == other;
        // => false
        
        _.isEqual(object, other);
        // => true
        
        // using a customizer callback
        var array = ['hello', 'goodbye'];
        var other = ['hi', 'goodbye'];
        
        _.isEqual(array, other, function(value, other) {
        if (_.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/)) {
        return true;
        }
        });
        // => true
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
