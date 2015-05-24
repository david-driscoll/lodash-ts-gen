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
    name: wrap
    params: 
        (0) value: *
        (1) wrapper: Function
    returns: Function
    type: Function
    comment: 
        Creates a function that provides `value` to the wrapper function as its
        first argument. Any additional arguments provided to the function are
        appended to those provided to the wrapper function. The wrapper is invoked
        with the `this` binding of the created function.
        
        @static
        @memberOf _
        @category Function
        @param {*} value The value to wrap.
        @param {Function} wrapper The wrapper function.
        @returns {Function} Returns the new function.
        @example
        
        var p = _.wrap(_.escape, function(func, text) {
        return '<p>' + func(text) + '</p>';
        });
        
        p('fred, barney, & pebbles');
        // => '<p>fred, barney, &amp; pebbles</p>'
    lang: js
***/
/// <reference path="../../methods/Function/wrap.d.ts"/>
