/*
    aliases: 
    category: Utility
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: _
    name: times
    params: 
        (0) n: number
        (1) [iteratee=_.identity]: Function
        (2) [thisArg]: *
    returns: Array
    type: Function
    comment: 
        Invokes the iteratee function 
` times, returning an array of the results
        of each invocation. The `iteratee` is bound to `thisArg` and invoked with
        one argument; (index).
        
        @static
        @memberOf _
        @category Utility
        @param {number} n The number of times to invoke `iteratee`.
        @param {Function} [iteratee=_.identity] The function invoked per iteration.
        @param {*} [thisArg] The `this` binding of `iteratee`.
        @returns {Array} Returns the array of results.
        @example
        
        var diceRolls = _.times(3, _.partial(_.random, 1, 6, false));
        // => [3, 6, 4]
        
        _.times(3, function(n) {
        mage.castSpell(n);
        });
        // => invokes `mage.castSpell(n)` three times with 
` of `0`, `1`, and `2`
        
        _.times(3, function(n) {
        this.cast(n);
        }, mage);
        // => also invokes `mage.castSpell(n)` three times
    lang: js
***/
/// <reference path="_.d.ts"/>
