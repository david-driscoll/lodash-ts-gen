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
    name: escape
    params: 
        (0) [string='']: string
    returns: string
    type: Function
    comment: 
        Converts the characters "&", "<", ">", '"', "'", and "\`", in `string` to
        their corresponding HTML entities.
        
        **Note:** No other characters are escaped. To escape additional characters
        use a third-party library like [_he_](https://mths.be/he).
        
        Though the ">" character is escaped for symmetry, characters like
        ">" and "/" don't need escaping in HTML and have no special meaning
        unless they're part of a tag or unquoted attribute value.
        See [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
        (under "semi-related fun fact") for more details.
        
        Backticks are escaped because in Internet Explorer < 9, they can break out
        of attribute values or HTML comments. See [#59](https://html5sec.org/#59),
        [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
        [#133](https://html5sec.org/#133) of the [HTML5 Security Cheatsheet](https://html5sec.org/)
        for more details.
        
        When working with HTML you should always [quote attribute values](http://wonko.com/post/html-escaping)
        to reduce XSS vectors.
        
        @static
        @memberOf _
        @category String
        @param {string} [string=''] The string to escape.
        @returns {string} Returns the escaped string.
        @example
        
        _.escape('fred, barney, & pebbles');
        // => 'fred, barney, &amp; pebbles'
    lang: js
***/
/// <reference path="../../methods/String/escape.d.ts"/>
