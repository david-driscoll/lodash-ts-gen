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
    name: before
    params: 
        (0) n: number
        (1) func: Function
    returns: Function
    type: Function
    comment: 
        Creates a function that invokes `func`, with the `this` binding and arguments
        of the created function, while it is called less than 
` times. Subsequent
        calls to the created function return the result of the last `func` invocation.
        
        @static
        @memberOf _
        @category Function
        @param {number} n The number of calls at which `func` is no longer invoked.
        @param {Function} func The function to restrict.
        @returns {Function} Returns the new restricted function.
        @example
        
        jQuery('#add').on('click', _.before(5, addContactToList));
        // => allows adding up to 4 contacts to the list
    lang: js
***/
/// <reference path="_.d.ts"/>
