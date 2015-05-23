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
    name: startsWith
    params: 
        (0) [string='']: string
        (1) [target]: string
        (2) [position=0]: number
    returns: boolean
    type: Function
    comment: 
        Checks if `string` starts with the given target string.
        
        @static
        @memberOf _
        @category String
        @param {string} [string=''] The string to search.
        @param {string} [target] The string to search for.
        @param {number} [position=0] The position to search from.
        @returns {boolean} Returns `true` if `string` starts with `target`, else `false`.
        @example
        
        _.startsWith('abc', 'a');
        // => true
        
        _.startsWith('abc', 'b');
        // => false
        
        _.startsWith('abc', 'b', 1);
        // => true
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
