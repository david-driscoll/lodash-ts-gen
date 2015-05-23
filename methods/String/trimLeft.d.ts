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
    name: trimLeft
    params: 
        (0) [string='']: string
        (1) [chars=whitespace]: string
    returns: string
    type: Function
    comment: 
        Removes leading whitespace or specified characters from `string`.
        
        @static
        @memberOf _
        @category String
        @param {string} [string=''] The string to trim.
        @param {string} [chars=whitespace] The characters to trim.
        @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
        @returns {string} Returns the trimmed string.
        @example
        
        _.trimLeft('  abc  ');
        // => 'abc  '
        
        _.trimLeft('-_-abc-_-', '_-');
        // => 'abc-_-'
    lang: js
***/
/// <reference path="_.d.ts"/>
