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
    name: snakeCase
    params: 
        (0) [string='']: string
    returns: string
    type: Function
    comment: 
        Converts `string` to [snake case](https://en.wikipedia.org/wiki/Snake_case).
        
        @static
        @memberOf _
        @category String
        @param {string} [string=''] The string to convert.
        @returns {string} Returns the snake cased string.
        @example
        
        _.snakeCase('Foo Bar');
        // => 'foo_bar'
        
        _.snakeCase('fooBar');
        // => 'foo_bar'
        
        _.snakeCase('--foo-bar');
        // => 'foo_bar'
    lang: js
***/
/// <reference path="../../methods/String/snakeCase.d.ts"/>
