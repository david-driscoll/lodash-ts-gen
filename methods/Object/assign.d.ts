/*
    aliases: extend
    category: Object
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: _
    name: assign
    params: 
        (0) object: Object
        (1) [sources]: ...Object
        (2) [customizer]: Function
        (3) [thisArg]: *
    returns: Object
    type: Function
    comment: 
        Assigns own enumerable properties of source object(s) to the destination
        object. Subsequent sources overwrite property assignments of previous sources.
        If `customizer` is provided it is invoked to produce the assigned values.
        The `customizer` is bound to `thisArg` and invoked with five arguments:
        (objectValue, sourceValue, key, object, source).
        
        **Note:** This method mutates `object` and is based on
        [`Object.assign`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign).
        
        @static
        @memberOf _
        @alias extend
        @category Object
        @param {Object} object The destination object.
        @param {...Object} [sources] The source objects.
        @param {Function} [customizer] The function to customize assigned values.
        @param {*} [thisArg] The `this` binding of `customizer`.
        @returns {Object} Returns `object`.
        @example
        
        _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
        // => { 'user': 'fred', 'age': 40 }
        
        // using a customizer callback
        var defaults = _.partialRight(_.assign, function(value, other) {
        return _.isUndefined(value) ? other : value;
        });
        
        defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
        // => { 'user': 'barney', 'age': 36 }
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
