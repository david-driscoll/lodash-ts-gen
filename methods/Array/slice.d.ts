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
    name: slice
    params: 
        (0) array: Array
        (1) [start=0]: number
        (2) [end=array.length]: number
    returns: Array
    type: Function
    comment: 
        Creates a slice of `array` from `start` up to, but not including, `end`.
        
        **Note:** This method is used instead of `Array#slice` to support node
        lists in IE < 9 and to ensure dense arrays are returned.
        
        @static
        @memberOf _
        @category Array
        @param {Array} array The array to slice.
        @param {number} [start=0] The start position.
        @param {number} [end=array.length] The end position.
        @returns {Array} Returns the slice of `array`.
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
