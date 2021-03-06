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
    name: values
    params: 
        (0) object: Object
    returns: Array
    type: Function
    comment: 
        Creates an array of the own enumerable property values of `object`.
        
        **Note:** Non-object values are coerced to objects.
        
        @static
        @memberOf _
        @category Object
        @param {Object} object The object to query.
        @returns {Array} Returns the array of property values.
        @example
        
        function Foo() {
        this.a = 1;
        this.b = 2;
        }
        
        Foo.prototype.c = 3;
        
        _.values(new Foo);
        // => [1, 2] (iteration order is not guaranteed)
        
        _.values('hi');
        // => ['h', 'i']
    lang: js
***/
/// <reference path="../../methods/Object/values.d.ts"/>
