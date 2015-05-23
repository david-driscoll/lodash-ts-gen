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

interface LoDashStatic {
    //:comment
    //restParam<T extends Function>(func: T, start?: number): T;
}
