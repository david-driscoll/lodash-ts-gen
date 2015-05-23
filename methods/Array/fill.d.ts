/*
    aliases: 
    category: Array
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: _
    name: fill
    params: 
        (0) array: Array
        (1) value: *
        (2) [start=0]: number
        (3) [end=array.length]: number
    returns: Array
    type: Function
    comment: 
        Fills elements of `array` with `value` from `start` up to, but not
        including, `end`.
        
        **Note:** This method mutates `array`.
        
        @static
        @memberOf _
        @category Array
        @param {Array} array The array to fill.
        @param {*} value The value to fill `array` with.
        @param {number} [start=0] The start position.
        @param {number} [end=array.length] The end position.
        @returns {Array} Returns `array`.
        @example
        
        var array = [1, 2, 3];
        
        _.fill(array, 'a');
        console.log(array);
        // => ['a', 'a', 'a']
        
        _.fill(Array(3), 2);
        // => [2, 2, 2]
        
        _.fill([4, 6, 8], '*', 1, 2);
        // => [4, '*', 8]
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
