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
    name: parseInt
    params: 
        (0) string: string
        (1) [radix]: number
    returns: number
    type: Function
    comment: 
        Converts `string` to an integer of the specified radix. If adix` is
        `undefined` or `0`, a adix` of `10` is used unless `value` is a hexadecimal,
        in which case a adix` of `16` is used.
        
        **Note:** This method aligns with the [ES5 implementation](https://es5.github.io/#E)
        of `parseInt`.
        
        @static
        @memberOf _
        @category String
        @param {string} string The string to convert.
        @param {number} [radix] The radix to interpret `value` by.
        @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
        @returns {number} Returns the converted integer.
        @example
        
        _.parseInt('08');
        // => 8
        
        _.map(['6', '08', '10'], _.parseInt);
        // => [6, 8, 10]
    lang: js
***/
/// <reference path="_.d.ts"/>
