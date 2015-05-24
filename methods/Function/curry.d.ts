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
    name: curry
    params: 
        (0) func: Function
        (1) [arity=func.length]: number
    returns: Function
    type: Function
    comment: 
        Creates a function that accepts one or more arguments of `func` that when
        called either invokes `func` returning its result, if all `func` arguments
        have been provided, or returns a function that accepts one or more of the
        remaining `func` arguments, and so on. The arity of `func` may be specified
        if `func.length` is not sufficient.
        
        The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
        may be used as a placeholder for provided arguments.
        
        **Note:** This method does not set the "length" property of curried functions.
        
        @static
        @memberOf _
        @category Function
        @param {Function} func The function to curry.
        @param {number} [arity=func.length] The arity of `func`.
        @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
        @returns {Function} Returns the new curried function.
        @example
        
        var abc = function(a, b, c) {
        return [a, b, c];
        };
        
        var curried = _.curry(abc);
        
        curried(1)(2)(3);
        // => [1, 2, 3]
        
        curried(1, 2)(3);
        // => [1, 2, 3]
        
        curried(1, 2, 3);
        // => [1, 2, 3]
        
        // using placeholders
        curried(1)(_, 3)(2);
        // => [1, 2, 3]
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>

interface LoDashStatic {
    //:comment
    curry<T>(func: Function, arity?: number): T;
}
