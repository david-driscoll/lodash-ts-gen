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
        var funcs = _.range(1, size - 1).map(z => `partial${z}: T${z}`).join(', ');
        results.push(inner(size, inbound, funcs));
    }
    return results;
}

function inner(size: number, inbound: string, funcs: string) {
    var results = [];
    for (var outSize = 1; outSize < size; outSize++) {
        var partialArguments = _.range(1, outSize).map(z => `partial${outSize - z}: T${outSize - z}`).reverse();
        var partials = partialArguments.join(', ');
        var outboundArguments = _.range(1, size - outSize).map(z => `partial${size - z - 1}: T${size - z - 1}`).reverse();
        var outbound = outboundArguments.join(', ');
        var method = `bind<${inbound.length ? inbound + ', ' : '' }TResult>(func: (${funcs}) => TResult, thisArg: any${partials.length ? ', ' + partials : ''}): (${outbound}) => TResult;`;
        results.push(method);
        var placeholders = [];
        var s = _.range(1, size - outSize).map(z => false);
        for (var i = 0; i < s.length; i++) {
            for (var start = 0; start <= i; start++) {
                var row = s.slice();
                for (var end = start; end <= i; end++) {
                    row[end] = true;
                }
                placeholders.push(row.slice());
            }
            for (var start = 0; start <= i; start++) {
                var row = s.slice();
                for (var end = 0; end <= start; end++) {
                    row[end] = true;
                }
                placeholders.push(row.slice());
            }
        }

        placeholders = _.unique(placeholders.map(z => z.map(x => x ? '1' : '0').join(',')))
            .map(z => z.split(',').map(z => !!(+(z))));

        _.each(placeholders, (row: boolean[]) => {
            if (_.all(row, z => z === false))
                return;
            if (row[0])
                return;
            if (_.filter(row, z => z).length === 1 && row[row.length - 1])
                return;
            if (_.filter(row, z => z).length === 1 && row[row.length - 1])
                return;
            var r = row.slice().reverse();
            var p = r.shift();
            while (p) {
                p = r.shift();
            }
            if (!_.any(r, z => z)) {
                return;
            }
            var pas = [];
            var oas = [];

            var foundTrue = false;
            var ldash = 0;
            _.each(row, (b, index) => {
                if (foundTrue && !b) {
                    return false;
                }
                if (b) {
                    foundTrue = true;
                    pas.push(`partial${index + 1}: LoDashStatic`);
                    oas.push(`partial${index + 1}: T${index + 1}`);
                    ldash++;
                } else {
                    pas.push(`partial${index + 1}: T${index + 1}`);
                }
            });

            var pas = pas;
            var oas = oas.concat(_.range(1, size - pas.length - 1).map(z => `partial${size - z - 1}: T${size - z - 1}`).reverse());

            var method = `bind<${inbound.length ? inbound + ', ' : '' }TResult>(func: (${funcs}) => TResult, thisArg: any, ${pas.join(', ') }): (${oas.join(', ') }) => TResult;`;
            results.push(method);
        });
    }

    return _.flatten(results.map(z => ['//:comment', z]));
}

var max = 9;
var bindMethods = (function() {
    var methods = [];
    methods.push('//:comment');
    methods.push('bind<T extends Function, TResult extends Function>(func: T, thisArg: any, ...partials: any[]): TResult;');
    methods.push(...outer(max));
    return {
        "LoDashStatic": methods
    };
});

export = bindMethods;
