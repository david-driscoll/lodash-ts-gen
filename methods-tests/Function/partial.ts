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
    name: partial
    params: 
        (0) func: Function
        (1) [partials]: ...*
    returns: Function
    type: Function
    comment: 
        Creates a function that invokes `func` with `partial` arguments prepended
        to those provided to the new function. This method is like `_.bind` except
        it does **not** alter the `this` binding.
        
        The `_.partial.placeholder` value, which defaults to `_` in monolithic
        builds, may be used as a placeholder for partially applied arguments.
        
        **Note:** This method does not set the "length" property of partially
        applied functions.
        
        @static
        @memberOf _
        @category Function
        @param {Function} func The function to partially apply arguments to.
        @param {...*} [partials] The arguments to be partially applied.
        @returns {Function} Returns the new partially applied function.
        @example
        
        var greet = function(greeting, name) {
        return greeting + ' ' + name;
        };
        
        var sayHelloTo = _.partial(greet, 'hello');
        sayHelloTo('fred');
        // => 'hello fred'
        
        // using placeholders
        var greetFred = _.partial(greet, _, 'fred');
        greetFred('hi');
        // => 'hi fred'
    lang: js
***/
/// <reference path="../../methods/Function/partial.d.ts"/>
