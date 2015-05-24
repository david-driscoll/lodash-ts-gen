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
    name: partialRight
    params: 
        (0) func: Function
        (1) [partials]: ...*
    returns: Function
    type: Function
    comment: 
        This method is like `_.partial` except that partially applied arguments
        are appended to those provided to the new function.
        
        The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
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
        
        var greetFred = _.partialRight(greet, 'fred');
        greetFred('hi');
        // => 'hi fred'
        
        // using placeholders
        var sayHelloTo = _.partialRight(greet, 'hello', _);
        sayHelloTo('fred');
        // => 'hello fred'
    lang: js
***/
/// <reference path="../../methods/Function/partialRight.d.ts"/>
