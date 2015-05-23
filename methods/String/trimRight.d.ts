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
    name: trimRight
    params: 
        (0) [string='']: string
        (1) [chars=whitespace]: string
    returns: string
    type: Function
    comment: 
        Removes trailing whitespace or specified characters from `string`.
        
        @static
        @memberOf _
        @category String
        @param {string} [string=''] The string to trim.
        @param {string} [chars=whitespace] The characters to trim.
        @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
        @returns {string} Returns the trimmed string.
        @example
        
        _.trimRight('  abc  ');
        // => '  abc'
        
        _.trimRight('-_-abc-_-', '_-');
        // => '-_-abc'
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
