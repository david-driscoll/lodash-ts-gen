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
/// <reference path="../Chain/_.d.ts"/>

import _ = require('lodash');

function outer(max: number) {
    var results = [];
    for (var size = 0; size <= max; size++) {
        var inbound = _.range(1, size - 1).map(z => `T${z}`).join(', ');
        var funcs = _.range(1, size - 1).map(z => `arg${z}: T${z}`).join(', ');
        results.push(inner(size, inbound, funcs));
    }
    return results;
}

function inner(size: number, inbound: string, funcs: string) {
    var results = [];
    for (var outSize = 1; outSize < size; outSize++) {
        var partials = _.range(1, outSize).map(z => `arg${outSize - z}: T${outSize - z}`).reverse().join(', ');
        var outbound = _.range(1, size - outSize).map(z => `arg${size - z - 1}: T${size - z - 1}`).reverse().join(', ');
        var method = `partial<${inbound.length ? inbound + ', ' : '' }TResult>(func: (${funcs}) => TResult${partials.length ? ', ' + partials : ''}): (${outbound}) => TResult;`;
        results.push(method);
    }

    return results;
}

var max = 7;
var bindMethods = (function() {
    var methods = [];
    methods.push('partial<T extends Function, TResult extends Function>(func: T, thisArg: any, ...partials: any[]): TResult;');
    methods.push(...outer(max));
    return {
        "LoDashStatic": methods
    };
});

export = bindMethods;
