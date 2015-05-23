/*
    aliases: 
    category: Utility
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: _
    name: range
    params: 
        (0) [start=0]: number
        (1) end: number
        (2) [step=1]: number
    returns: Array
    type: Function
    comment: 
        Creates an array of numbers (positive and/or negative) progressing from
        `start` up to, but not including, `end`. If `end` is not specified it is
        set to `start` with `start` then set to `0`. If `end` is less than `start`
        a zero-length range is created unless a negative `step` is specified.
        
        @static
        @memberOf _
        @category Utility
        @param {number} [start=0] The start of the range.
        @param {number} end The end of the range.
        @param {number} [step=1] The value to increment or decrement by.
        @returns {Array} Returns the new array of numbers.
        @example
        
        _.range(4);
        // => [0, 1, 2, 3]
        
        _.range(1, 5);
        // => [1, 2, 3, 4]
        
        _.range(0, 20, 5);
        // => [0, 5, 10, 15]
        
        _.range(0, -4, -1);
        // => [0, -1, -2, -3]
        
        _.range(1, 4, 0);
        // => [1, 1, 1]
        
        _.range(0);
        // => []
    lang: js
***/
/// <reference path="_.d.ts"/>
