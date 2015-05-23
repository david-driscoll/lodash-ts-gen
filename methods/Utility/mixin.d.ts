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
    name: mixin
    params: 
        (0) [object=lodash]: Function|Object
        (1) source: Object
        (2) [options]: Object
        (3) [options.chain=true]: boolean
    returns: Function|Object
    type: Function
    comment: 
        Adds all own enumerable function properties of a source object to the
        destination object. If `object` is a function then methods are added to
        its prototype as well.
        
        **Note:** Use `_.runInContext` to create a pristine `lodash` function to
        avoid conflicts caused by modifying the original.
        
        @static
        @memberOf _
        @category Utility
        @param {Function|Object} [object=lodash] The destination object.
        @param {Object} source The object of functions to add.
        @param {Object} [options] The options object.
        @param {boolean} [options.chain=true] Specify whether the functions added
        are chainable.
        @returns {Function|Object} Returns `object`.
        @example
        
        function vowels(string) {
        return _.filter(string, function(v) {
        return /[aeiou]/i.test(v);
        });
        }
        
        _.mixin({ 'vowels': vowels });
        _.vowels('fred');
        // => ['e']
        
        _('fred').vowels().value();
        // => ['e']
        
        _.mixin({ 'vowels': vowels }, { 'chain': false });
        _('fred').vowels();
        // => ['e']
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
