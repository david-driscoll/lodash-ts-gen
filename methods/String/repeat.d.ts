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
    name: repeat
    params: 
        (0) [string='']: string
        (1) [n=0]: number
    returns: string
    type: Function
    comment: 
        Repeats the given string 
` times.
        
        @static
        @memberOf _
        @category String
        @param {string} [string=''] The string to repeat.
        @param {number} [n=0] The number of times to repeat the string.
        @returns {string} Returns the repeated string.
        @example
        
        _.repeat('*', 3);
        // => '***'
        
        _.repeat('abc', 2);
        // => 'abcabc'
        
        _.repeat('abc', 0);
        // => ''
    lang: js
***/
/// <reference path="_.d.ts"/>
