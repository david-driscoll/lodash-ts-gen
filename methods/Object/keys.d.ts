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
    name: keys
    params: 
        (0) object: Object
    returns: Array
    type: Function
    comment: 
        Creates an array of the own enumerable property names of `object`.
        
        **Note:** Non-object values are coerced to objects. See the
        [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.keys)
        for more details.
        
        @static
        @memberOf _
        @category Object
        @param {Object} object The object to query.
        @returns {Array} Returns the array of property names.
        @example
        
        function Foo() {
        this.a = 1;
        this.b = 2;
        }
        
        Foo.prototype.c = 3;
        
        _.keys(new Foo);
        // => ['a', 'b'] (iteration order is not guaranteed)
        
        _.keys('hi');
        // => ['0', '1']
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
