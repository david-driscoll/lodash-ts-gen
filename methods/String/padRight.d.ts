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
    name: padRight
    params: 
        (0) [string='']: string
        (1) [length=0]: number
        (2) [chars=' ']: string
    returns: string
    type: Function
    comment: 
        Pads `string` on the right side if it's shorter than `length`. Padding
        characters are truncated if they exceed `length`.
        
        @static
        @memberOf _
        @category String
        @param {string} [string=''] The string to pad.
        @param {number} [length=0] The padding length.
        @param {string} [chars=' '] The string used as padding.
        @returns {string} Returns the padded string.
        @example
        
        _.padRight('abc', 6);
        // => 'abc   '
        
        _.padRight('abc', 6, '_-');
        // => 'abc_-_'
        
        _.padRight('abc', 3);
        // => 'abc'
    lang: js
***/
/// <reference path="_.d.ts"/>
