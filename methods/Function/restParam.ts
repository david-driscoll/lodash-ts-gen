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
    name: restParam
    params:
        (0) func: Function
        (1) [start=func.length-1]: number
    returns: Function
    type: Function
    comment:
        Creates a function that invokes `func` with the `this` binding of the
        created function and arguments from `start` and beyond provided as an array.

        **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).

        @static
        @memberOf _
        @category Function
        @param {Function} func The function to apply a rest parameter to.
        @param {number} [start=func.length-1] The start position of the rest parameter.
        @returns {Function} Returns the new function.
        @example

        var say = _.restParam(function(what, names) {
        return what + ' ' + _.initial(names).join(', ') +
        (_.size(names) > 1 ? ', & ' : '') + _.last(names);
        });

        say('hello', 'fred', 'barney', 'pebbles');
        // => 'hello fred, barney, & pebbles'
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>

import _ = require('lodash');

function outer(max: number) {
    var results = [];
    for (var size = 2; size <= max; size++) {
        var inboundArguments = _.range(1, size).map(z => `T${z}`);
        inboundArguments[inboundArguments.length - 1] = inboundArguments[inboundArguments.length - 1] + '[]';

        var inbound = inboundArguments.join(', ');
        var funcs = _.range(1, size).map(z => `arg${z}: T${z}`).join(', ');
        var partialArguments = _.range(1, size).map(z => `arg${z}: T${z}`);
        partialArguments[partialArguments.length - 1] = '...' + partialArguments[partialArguments.length - 1];

        var partials = partialArguments.join(', ');
        var method = `restParam<${inbound}, TResult>(func: (${funcs}) => TResult): (${partials}) => TResult;`;
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
    methods.push('restParam<T extends Function>(func: Function, start?: number): T;');
    methods.push(...outer(max));
    return {
        "LoDashStatic": methods
    };
});

export = bindMethods;
