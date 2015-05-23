/*
    aliases: 
    category: Utility
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: _
    name: attempt
    params: 
        (0) func: Function
    returns: *
    type: Function
    comment: 
        Attempts to invoke `func`, returning either the result or the caught error
        object. Any additional arguments are provided to `func` when it is invoked.
        
        @static
        @memberOf _
        @category Utility
        @param {Function} func The function to attempt.
        @returns {*} Returns the `func` result or error object.
        @example
        
        // avoid throwing errors for invalid selectors
        var elements = _.attempt(function(selector) {
        return document.querySelectorAll(selector);
        }, '>_>');
        
        if (_.isError(elements)) {
        elements = [];
        }
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
