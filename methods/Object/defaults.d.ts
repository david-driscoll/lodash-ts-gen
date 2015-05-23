/*
    aliases: 
    category: Object
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: _
    name: defaults
    params: 
        (0) object: Object
        (1) [sources]: ...Object
    returns: Object
    type: Function
    comment: 
        Assigns own enumerable properties of source object(s) to the destination
        object for all destination properties that resolve to `undefined`. Once a
        property is set, additional values of the same property are ignored.
        
        **Note:** This method mutates `object`.
        
        @static
        @memberOf _
        @category Object
        @param {Object} object The destination object.
        @param {...Object} [sources] The source objects.
        @returns {Object} Returns `object`.
        @example
        
        _.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
        // => { 'user': 'barney', 'age': 36 }
    lang: js
***/
/// <reference path="_.d.ts"/>
