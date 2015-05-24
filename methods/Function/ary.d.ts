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
    name: ary
    params: 
        (0) func: Function
        (1) [n=func.length]: number
    returns: Function
    type: Function
    comment: 
        Creates a function that accepts up to 
` arguments ignoring any
        additional arguments.
        
        @static
        @memberOf _
        @category Function
        @param {Function} func The function to cap arguments for.
        @param {number} [n=func.length] The arity cap.
        @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
        @returns {Function} Returns the new function.
        @example
        
        _.map(['6', '8', '10'], _.ary(parseInt, 1));
        // => [6, 8, 10]
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>

interface LoDashStatic {
    //:comment
    ary<T extends Function>(func: T, n?: number): T;
}
