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
    name: deburr
    params: 
        (0) [string='']: string
    returns: string
    type: Function
    comment: 
        Deburrs `string` by converting [latin-1 supplementary letters](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
        to basic latin letters and removing [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
        
        @static
        @memberOf _
        @category String
        @param {string} [string=''] The string to deburr.
        @returns {string} Returns the deburred string.
        @example
        
        _.deburr('déjà vu');
        // => 'deja vu'
    lang: js
***/
/// <reference path="../../methods/String/deburr.d.ts"/>
