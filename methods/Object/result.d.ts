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
    name: result
    params: 
        (0) object: Object
        (1) path: Array|string
        (2) [defaultValue]: *
    returns: *
    type: Function
    comment: 
        This method is like `_.get` except that if the resolved value is a function
        it is invoked with the `this` binding of its parent object and its result
        is returned.
        
        @static
        @memberOf _
        @category Object
        @param {Object} object The object to query.
        @param {Array|string} path The path of the property to resolve.
        @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
        @returns {*} Returns the resolved value.
        @example
        
        var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
        
        _.result(object, 'a[0].b.c1');
        // => 3
        
        _.result(object, 'a[0].b.c2');
        // => 4
        
        _.result(object, 'a.b.c', 'default');
        // => 'default'
        
        _.result(object, 'a.b.c', _.constant('default'));
        // => 'default'
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
