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
    name: bind
    params: 
        (0) func: Function
        (1) thisArg: *
        (2) [partials]: ...*
    returns: Function
    type: Function
    comment: 
        Creates a function that invokes `func` with the `this` binding of `thisArg`
        and prepends any additional `_.bind` arguments to those provided to the
        bound function.
        
        The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
        may be used as a placeholder for partially applied arguments.
        
        **Note:** Unlike native `Function#bind` this method does not set the "length"
        property of bound functions.
        
        @static
        @memberOf _
        @category Function
        @param {Function} func The function to bind.
        @param {*} thisArg The `this` binding of `func`.
        @param {...*} [partials] The arguments to be partially applied.
        @returns {Function} Returns the new bound function.
        @example
        
        var greet = function(greeting, punctuation) {
        return greeting + ' ' + this.user + punctuation;
        };
        
        var object = { 'user': 'fred' };
        
        var bound = _.bind(greet, object, 'hi');
        bound('!');
        // => 'hi fred!'
        
        // using placeholders
        var bound = _.bind(greet, object, _, '!');
        bound('hi');
        // => 'hi fred!'
    lang: js
***/
/// <reference path="_.d.ts"/>
