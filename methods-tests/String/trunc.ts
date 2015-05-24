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
    name: trunc
    params: 
        (0) [string='']: string
        (1) [options]: Object|number
        (2) [options.length=30]: number
        (3) [options.omission='...']: string
        (4) [options.separator]: RegExp|string
    returns: string
    type: Function
    comment: 
        Truncates `string` if it's longer than the given maximum string length.
        The last characters of the truncated string are replaced with the omission
        string which defaults to "...".
        
        @static
        @memberOf _
        @category String
        @param {string} [string=''] The string to truncate.
        @param {Object|number} [options] The options object or maximum string length.
        @param {number} [options.length=30] The maximum string length.
        @param {string} [options.omission='...'] The string to indicate text is omitted.
        @param {RegExp|string} [options.separator] The separator pattern to truncate to.
        @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
        @returns {string} Returns the truncated string.
        @example
        
        _.trunc('hi-diddly-ho there, neighborino');
        // => 'hi-diddly-ho there, neighbo...'
        
        _.trunc('hi-diddly-ho there, neighborino', 24);
        // => 'hi-diddly-ho there, n...'
        
        _.trunc('hi-diddly-ho there, neighborino', {
        'length': 24,
        'separator': ' '
        });
        // => 'hi-diddly-ho there,...'
        
        _.trunc('hi-diddly-ho there, neighborino', {
        'length': 24,
        'separator': /,? +
        });
        // => 'hi-diddly-ho there...'
        
        _.trunc('hi-diddly-ho there, neighborino', {
        'omission': ' [...]'
        });
        // => 'hi-diddly-ho there, neig [...]'
    lang: js
***/
/// <reference path="../../methods/String/trunc.d.ts"/>
