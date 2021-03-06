/*
    aliases: 
    category: Function
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: _
    name: negate
    params: 
        (0) predicate: Function
    returns: Function
    type: Function
    comment: 
        Creates a function that negates the result of the predicate `func`. The
        `func` predicate is invoked with the `this` binding and arguments of the
        created function.
        
        @static
        @memberOf _
        @category Function
        @param {Function} predicate The predicate to negate.
        @returns {Function} Returns the new function.
        @example
        
        function isEven(n) {
        return n % 2 == 0;
        }
        
        _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
        // => [1, 3, 5]
    lang: js
***/
/// <reference path="../../methods/Function/negate.d.ts"/>
