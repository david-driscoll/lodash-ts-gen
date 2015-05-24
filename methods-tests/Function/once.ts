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
    name: once
    params: 
        (0) func: Function
    returns: Function
    type: Function
    comment: 
        Creates a function that is restricted to invoking `func` once. Repeat calls
        to the function return the value of the first call. The `func` is invoked
        with the `this` binding and arguments of the created function.
        
        @static
        @memberOf _
        @category Function
        @param {Function} func The function to restrict.
        @returns {Function} Returns the new restricted function.
        @example
        
        var initialize = _.once(createApplication);
        initialize();
        initialize();
        // `initialize` invokes `createApplication` once
    lang: js
***/
/// <reference path="../../methods/Function/once.d.ts"/>
