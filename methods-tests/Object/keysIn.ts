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
    name: keysIn
    params: 
        (0) object: Object
    returns: Array
    type: Function
    comment: 
        Creates an array of the own and inherited enumerable property names of `object`.
        
        **Note:** Non-object values are coerced to objects.
        
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
        
        _.keysIn(new Foo);
        // => ['a', 'b', 'c'] (iteration order is not guaranteed)
    lang: js
***/
/// <reference path="../../methods/Object/keysIn.d.ts"/>
