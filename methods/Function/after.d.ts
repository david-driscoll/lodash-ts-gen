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
    name: after
    params: 
        (0) n: number
        (1) func: Function
    returns: Function
    type: Function
    comment: 
        The opposite of `_.before`; this method creates a function that invokes
        `func` once it is called 
` or more times.
        
        @static
        @memberOf _
        @category Function
        @param {number} n The number of calls before `func` is invoked.
        @param {Function} func The function to restrict.
        @returns {Function} Returns the new restricted function.
        @example
        
        var saves = ['profile', 'settings'];
        
        var done = _.after(saves.length, function() {
        console.log('done saving!');
        });
        
        _.forEach(saves, function(type) {
        asyncSave({ 'type': type, 'complete': done });
        });
        // => logs 'done saving!' after the two async saves have completed
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>

interface LoDashStatic {
    //:comment
    after<T extends Function>(n: number, func: T): T;
}
