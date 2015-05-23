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
    name: inRange
    params: 
        (0) n: number
        (1) [start=0]: number
        (2) end: number
    returns: boolean
    type: Function
    comment: 
        Checks if 
` is between `start` and up to but not including, `end`. If
        `end` is not specified it is set to `start` with `start` then set to `0`.
        
        @static
        @memberOf _
        @category Number
        @param {number} n The number to check.
        @param {number} [start=0] The start of the range.
        @param {number} end The end of the range.
        @returns {boolean} Returns `true` if 
` is in the range, else `false`.
        @example
        
        _.inRange(3, 2, 4);
        // => true
        
        _.inRange(4, 8);
        // => true
        
        _.inRange(4, 2);
        // => false
        
        _.inRange(2, 2);
        // => false
        
        _.inRange(1.2, 2);
        // => true
        
        _.inRange(5.2, 4);
        // => false
    lang: js
***/
/// <reference path="_.d.ts"/>
