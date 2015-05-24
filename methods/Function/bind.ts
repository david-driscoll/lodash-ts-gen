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
        var method = `bind<${inbound.length ? inbound + ', ' : '' }TResult>(func: (${funcs}) => TResult, thisArg: any${partials.length ? ', ' + partials : ''}): (${outbound}) => TResult;`;
        results.push(method);

        var s = _.range(1, size - outSize);
        var placholders = [];
        for (var i = 0; i < s.length + 1; i++) {
            let row = [];
            for (let k = 0; k < i; k++) {
                row.push(true);
            }
            for (let k = i; k < s.length + 1; k++) {
                row.push(false);
            }
            placholders.push(row);
            console.log(size, row.map(z => _.padLeft(z, 6)).join(','));
        }
        for (var i = 0; i < s.length + 1; i++) {
            let row = [];
            for (let k = 0; k < i; k++) {
                row.push(false);
            }
            for (let k = i; k < s.length + 1; k++) {
                row.push(true);
            }
            placholders.push(row);
            console.log(size, row.map(z => _.padLeft(z, 6)).join(','));
        }

        //console.log(placholders);

        /*
        bind<T1, T2, TResult>(func: (arg1: T1, arg2: T2) => TResult, thisArg: any, arg1: LoDashStatic): (arg1: T1, arg2: T2) => TResult;
        bind<T1, T2, TResult>(func: (arg1: T1, arg2: T2) => TResult, thisArg: any, arg1: LoDashStatic, arg2: T2): (arg1: T1) => TResult;
        bind<T1, T2, TResult>(func: (arg1: T1, arg2: T2) => TResult, thisArg: any, arg1: T1, arg2: LoDashStatic): (arg2: T2) => TResult;
        bind<T1, T2, TResult>(func: (arg1: T1, arg2: T2) => TResult, thisArg: any, arg1: LoDashStatic, arg2: LoDashStatic): (arg1: T1, arg2: T2) => TResult;
        */
    }

    return results;
}

//function placeholder

var max = 7;
var bindMethods = (function() {
    var methods = [];
    methods.push('bind<T extends Function, TResult extends Function>(func: T, thisArg: any, ...partials: any[]): TResult;');
    methods.push(...outer(max));
    return {
        "LoDashStatic": methods
    };
});

export = bindMethods;
