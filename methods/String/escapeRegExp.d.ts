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
    name: escapeRegExp
    params: 
        (0) [string='']: string
    returns: string
    type: Function
    comment: 
        Escapes the `RegExp` special characters "\", "/", "^", "$", ".", "|", "?",
        "*", "+", "(", ")", "[", "]", "{" and "}" in `string`.
        
        @static
        @memberOf _
        @category String
        @param {string} [string=''] The string to escape.
        @returns {string} Returns the escaped string.
        @example
        
        _.escapeRegExp('[lodash](https://lodash.com/)');
        // => '\[lodash\]\(https:\/\/lodash\.com\/\)'
    lang: js
***/
/// <reference path="_.d.ts"/>
