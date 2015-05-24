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
    name: negate
    params:
        (0) predicate: Function
    returns: Function
    type: Function
    comment:
        Creates a function that negates the result of the predicate `func`. The
        `func` predicate is invoked with the `this` binding and arguments of the
        created function.

        @static
        @memberOf _
        @category Function
        @param {Function} predicate The predicate to negate.
        @returns {Function} Returns the new function.
        @example

        function isEven(n) {
        return n % 2 == 0;
        }

        _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
        // => [1, 3, 5]
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
        var method = `negate${inbound.length ? ('<' + inbound + '>') : ''}(func: (${funcs}) => boolean): (${partials}) => boolean;`;
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
    methods.push('negate<T extends Function>(func: T): number;');
    methods.push(...outer(max));
    return {
        "LoDashStatic": methods
    };
});

export = bindMethods;
