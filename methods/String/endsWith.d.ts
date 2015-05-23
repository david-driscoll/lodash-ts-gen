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
    name: endsWith
    params: 
        (0) [string='']: string
        (1) [target]: string
        (2) [position=string.length]: number
    returns: boolean
    type: Function
    comment: 
        Checks if `string` ends with the given target string.
        
        @static
        @memberOf _
        @category String
        @param {string} [string=''] The string to search.
        @param {string} [target] The string to search for.
        @param {number} [position=string.length] The position to search from.
        @returns {boolean} Returns `true` if `string` ends with `target`, else `false`.
        @example
        
        _.endsWith('abc', 'c');
        // => true
        
        _.endsWith('abc', 'b');
        // => false
        
        _.endsWith('abc', 'b', 2);
        // => true
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
