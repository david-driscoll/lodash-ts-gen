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
    name: defer
    params:
        (0) func: Function
        (1) [args]: ...*
    returns: number
    type: Function
    comment:
        Defers invoking the `func` until the current call stack has cleared. Any
        additional arguments are provided to `func` when it is invoked.

        @static
        @memberOf _
        @category Function
        @param {Function} func The function to defer.
        @param {...*} [args] The arguments to invoke the function with.
        @returns {number} Returns the timer id.
        @example

        _.defer(function(text) {
        console.log(text);
        }, 'deferred');
        // logs 'deferred' after one or more milliseconds
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
import _ = require('lodash');

function outer(max: number) {
    var results = [];
    for (var size = 1; size <= max; size++) {
        var inbound = _.range(1, size).map(z => `T${z}`).join(', ');
        var funcs = _.range(1, size).map(z => `arg${z}: T${z}`).join(', ');
        var partialArguments = _.range(1, size).map(z => `arg${z}: T${z}`);
        var partials = partialArguments.join(', ');
        var method = `defer${inbound.length ? ('<' + inbound + '>') : ''}(func: (${funcs}) => void${partials.length ? ', ' + partials : ''}): number;`;
        results.push(method);
    }
    return results;
}

function inner(size: number, inbound: string, funcs: string) {
    var results = [];
    for (var outSize = 1; outSize < size; outSize++) {
    }

    return _.flatten(results.map(z => ['//:comment', z]));
}

var max = 11;
var bindMethods = (function() {
    var methods = [];
    methods.push('//:comment');
    methods.push('defer<T extends Function>(func: T, ...args: any[]): number;');
    methods.push(...outer(max));
    return {
        "LoDashStatic": methods
    };
});

export = bindMethods;
