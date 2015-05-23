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
    name: startCase
    params: 
        (0) [string='']: string
    returns: string
    type: Function
    comment: 
        Converts `string` to [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
        
        @static
        @memberOf _
        @category String
        @param {string} [string=''] The string to convert.
        @returns {string} Returns the start cased string.
        @example
        
        _.startCase('--foo-bar');
        // => 'Foo Bar'
        
        _.startCase('fooBar');
        // => 'Foo Bar'
        
        _.startCase('__foo_bar__');
        // => 'Foo Bar'
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
