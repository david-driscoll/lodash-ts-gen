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
    name: camelCase
    params: 
        (0) [string='']: string
    returns: string
    type: Function
    comment: 
        Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
        
        @static
        @memberOf _
        @category String
        @param {string} [string=''] The string to convert.
        @returns {string} Returns the camel cased string.
        @example
        
        _.camelCase('Foo Bar');
        // => 'fooBar'
        
        _.camelCase('--foo-bar');
        // => 'fooBar'
        
        _.camelCase('__foo_bar__');
        // => 'fooBar'
    lang: js
***/
/// <reference path="_.d.ts"/>
