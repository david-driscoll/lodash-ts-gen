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
    name: defer
    params: 
        (0) func: Function
        (1) [args]: ...*
    returns: number
    type: Function
    comment: 
        Defers invoking the `func` until the current call stack has cleared. Any
        additional arguments are provided to `func` when it is invoked.
        
        @static
        @memberOf _
        @category Function
        @param {Function} func The function to defer.
        @param {...*} [args] The arguments to invoke the function with.
        @returns {number} Returns the timer id.
        @example
        
        _.defer(function(text) {
        console.log(text);
        }, 'deferred');
        // logs 'deferred' after one or more milliseconds
    lang: js
***/
/// <reference path="../../methods/Function/defer.d.ts"/>
