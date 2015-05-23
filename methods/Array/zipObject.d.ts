/*
    aliases: object
    category: Array
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: _
    name: zipObject
    params: 
        (0) props: Array
        (1) [values=[]]: Array
    returns: Object
    type: Function
    comment: 
        The inverse of `_.pairs`; this method returns an object composed from arrays
        of property names and values. Provide either a single two dimensional array,
        e.g. `[[key1, value1], [key2, value2]]` or two arrays, one of property names
        and one of corresponding values.
        
        @static
        @memberOf _
        @alias object
        @category Array
        @param {Array} props The property names.
        @param {Array} [values=[]] The property values.
        @returns {Object} Returns the new object.
        @example
        
        _.zipObject([['fred', 30], ['barney', 40]]);
        // => { 'fred': 30, 'barney': 40 }
        
        _.zipObject(['fred', 'barney'], [30, 40]);
        // => { 'fred': 30, 'barney': 40 }
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
