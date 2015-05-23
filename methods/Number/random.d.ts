/*
    aliases: 
    category: Number
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: _
    name: random
    params: 
        (0) [min=0]: number
        (1) [max=1]: number
        (2) [floating]: boolean
    returns: number
    type: Function
    comment: 
        Produces a random number between `min` and `max` (inclusive). If only one
        argument is provided a number between `0` and the given number is returned.
        If `floating` is `true`, or either `min` or `max` are floats, a floating-point
        number is returned instead of an integer.
        
        @static
        @memberOf _
        @category Number
        @param {number} [min=0] The minimum possible value.
        @param {number} [max=1] The maximum possible value.
        @param {boolean} [floating] Specify returning a floating-point number.
        @returns {number} Returns the random number.
        @example
        
        _.random(0, 5);
        // => an integer between 0 and 5
        
        _.random(5);
        // => also an integer between 0 and 5
        
        _.random(5, true);
        // => a floating-point number between 0 and 5
        
        _.random(1.2, 5.2);
        // => a floating-point number between 1.2 and 5.2
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
