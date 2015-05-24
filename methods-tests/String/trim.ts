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
    name: trim
    params: 
        (0) [string='']: string
        (1) [chars=whitespace]: string
    returns: string
    type: Function
    comment: 
        Removes leading and trailing whitespace or specified characters from `string`.
        
        @static
        @memberOf _
        @category String
        @param {string} [string=''] The string to trim.
        @param {string} [chars=whitespace] The characters to trim.
        @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
        @returns {string} Returns the trimmed string.
        @example
        
        _.trim('  abc  ');
        // => 'abc'
        
        _.trim('-_-abc-_-', '_-');
        // => 'abc'
        
        _.map(['  foo  ', '  bar  '], _.trim);
        // => ['foo', 'bar']
    lang: js
***/
/// <reference path="../../methods/String/trim.d.ts"/>
