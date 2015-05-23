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
    name: unescape
    params: 
        (0) [string='']: string
    returns: string
    type: Function
    comment: 
        The inverse of `_.escape`; this method converts the HTML entities
        `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`, and `&#96;` in `string` to their
        corresponding characters.
        
        **Note:** No other HTML entities are unescaped. To unescape additional HTML
        entities use a third-party library like [_he_](https://mths.be/he).
        
        @static
        @memberOf _
        @category String
        @param {string} [string=''] The string to unescape.
        @returns {string} Returns the unescaped string.
        @example
        
        _.unescape('fred, barney, &amp; pebbles');
        // => 'fred, barney, & pebbles'
    lang: js
***/
/// <reference path="_.d.ts"/>
