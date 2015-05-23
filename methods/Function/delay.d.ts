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
    name: delay
    params: 
        (0) func: Function
        (1) wait: number
        (2) [args]: ...*
    returns: number
    type: Function
    comment: 
        Invokes `func` after `wait` milliseconds. Any additional arguments are
        provided to `func` when it is invoked.
        
        @static
        @memberOf _
        @category Function
        @param {Function} func The function to delay.
        @param {number} wait The number of milliseconds to delay invocation.
        @param {...*} [args] The arguments to invoke the function with.
        @returns {number} Returns the timer id.
        @example
        
        _.delay(function(text) {
        console.log(text);
        }, 1000, 'later');
        // => logs 'later' after one second
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
