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
    name: curryRight
    params: 
        (0) func: Function
        (1) [arity=func.length]: number
    returns: Function
    type: Function
    comment: 
        This method is like `_.curry` except that arguments are applied to `func`
        in the manner of `_.partialRight` instead of `_.partial`.
        
        The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
        builds, may be used as a placeholder for provided arguments.
        
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
        
        var curried = _.curryRight(abc);
        
        curried(3)(2)(1);
        // => [1, 2, 3]
        
        curried(2, 3)(1);
        // => [1, 2, 3]
        
        curried(1, 2, 3);
        // => [1, 2, 3]
        
        // using placeholders
        curried(3)(1, _)(2);
        // => [1, 2, 3]
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>

interface LoDashStatic {
    //:comment
    curry<T>(func: Function, arity?: number): T;
}
