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
    name: memoize
    params: 
        (0) func: Function
        (1) [resolver]: Function
    returns: Function
    type: Function
    comment: 
        Creates a function that memoizes the result of `func`. If esolver` is
        provided it determines the cache key for storing the result based on the
        arguments provided to the memoized function. By default, the first argument
        provided to the memoized function is coerced to a string and used as the
        cache key. The `func` is invoked with the `this` binding of the memoized
        function.
        
        **Note:** The cache is exposed as the `cache` property on the memoized
        function. Its creation may be customized by replacing the `_.memoize.Cache`
        constructor with one whose instances implement the [`Map`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-properties-of-the-map-prototype-object)
        method interface of `get`, `has`, and `set`.
        
        @static
        @memberOf _
        @category Function
        @param {Function} func The function to have its output memoized.
        @param {Function} [resolver] The function to resolve the cache key.
        @returns {Function} Returns the new memoizing function.
        @example
        
        var upperCase = _.memoize(function(string) {
        return string.toUpperCase();
        });
        
        upperCase('fred');
        // => 'FRED'
        
        // modifying the result cache
        upperCase.cache.set('fred', 'BARNEY');
        upperCase('fred');
        // => 'BARNEY'
        
        // replacing `_.memoize.Cache`
        var object = { 'user': 'fred' };
        var other = { 'user': 'barney' };
        var identity = _.memoize(_.identity);
        
        identity(object);
        // => { 'user': 'fred' }
        identity(other);
        // => { 'user': 'fred' }
        
        _.memoize.Cache = WeakMap;
        var identity = _.memoize(_.identity);
        
        identity(object);
        // => { 'user': 'fred' }
        identity(other);
        // => { 'user': 'barney' }
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>

interface LoDashStatic {
    //:comment
    memoize<T extends Function>(func: T, resolver?: Function): T;
}
