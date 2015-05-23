/*
    aliases: 
    category: String
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: _
    name: words
    params: 
        (0) [string='']: string
        (1) [pattern]: RegExp|string
    returns: Array
    type: Function
    comment: 
        Splits `string` into an array of its words.
        
        @static
        @memberOf _
        @category String
        @param {string} [string=''] The string to inspect.
        @param {RegExp|string} [pattern] The pattern to match words.
        @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
        @returns {Array} Returns the words of `string`.
        @example
        
        _.words('fred, barney, & pebbles');
        // => ['fred', 'barney', 'pebbles']
        
        _.words('fred, barney, & pebbles', /[^, ]+/g);
        // => ['fred', 'barney', '&', 'pebbles']
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
