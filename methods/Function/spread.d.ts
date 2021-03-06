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
    name: spread
    params: 
        (0) func: Function
    returns: Function
    type: Function
    comment: 
        Creates a function that invokes `func` with the `this` binding of the created
        function and an array of arguments much like [`Function#apply`](https://es5.github.io/#x15.3.4.3).
        
        **Note:** This method is based on the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator).
        
        @static
        @memberOf _
        @category Function
        @param {Function} func The function to spread arguments over.
        @returns {Function} Returns the new function.
        @example
        
        var say = _.spread(function(who, what) {
        return who + ' says ' + what;
        });
        
        say(['fred', 'hello']);
        // => 'fred says hello'
        
        // with a Promise
        var numbers = Promise.all([
        Promise.resolve(40),
        Promise.resolve(36)
        ]);
        
        numbers.then(_.spread(function(x, y) {
        return x + y;
        }));
        // => a Promise of 76
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
