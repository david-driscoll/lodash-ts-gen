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
    name: kebabCase
    params: 
        (0) [string='']: string
    returns: string
    type: Function
    comment: 
        Converts `string` to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
        
        @static
        @memberOf _
        @category String
        @param {string} [string=''] The string to convert.
        @returns {string} Returns the kebab cased string.
        @example
        
        _.kebabCase('Foo Bar');
        // => 'foo-bar'
        
        _.kebabCase('fooBar');
        // => 'foo-bar'
        
        _.kebabCase('__foo_bar__');
        // => 'foo-bar'
    lang: js
***/
/// <reference path="../../methods/String/kebabCase.d.ts"/>
