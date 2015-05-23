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
    name: isEmpty
    params: 
        (0) value: Array|Object|string
    returns: boolean
    type: Function
    comment: 
        Checks if `value` is empty. A value is considered empty unless it is an
        `arguments` object, array, string, or jQuery-like collection with a length
        greater than `0` or an object with own enumerable properties.
        
        @static
        @memberOf _
        @category Lang
        @param {Array|Object|string} value The value to inspect.
        @returns {boolean} Returns `true` if `value` is empty, else `false`.
        @example
        
        _.isEmpty(null);
        // => true
        
        _.isEmpty(true);
        // => true
        
        _.isEmpty(1);
        // => true
        
        _.isEmpty([1, 2, 3]);
        // => false
        
        _.isEmpty({ 'a': 1 });
        // => false
    lang: js
***/
/// <reference path="_.d.ts"/>
