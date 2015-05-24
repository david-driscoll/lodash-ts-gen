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
    name: forOwn
    params: 
        (0) object: Object
        (1) [iteratee=_.identity]: Function
        (2) [thisArg]: *
    returns: Object
    type: Function
    comment: 
        Iterates over own enumerable properties of an object invoking `iteratee`
        for each property. The `iteratee` is bound to `thisArg` and invoked with
        three arguments: (value, key, object). Iteratee functions may exit iteration
        early by explicitly returning `false`.
        
        @static
        @memberOf _
        @category Object
        @param {Object} object The object to iterate over.
        @param {Function} [iteratee=_.identity] The function invoked per iteration.
        @param {*} [thisArg] The `this` binding of `iteratee`.
        @returns {Object} Returns `object`.
        @example
        
        function Foo() {
        this.a = 1;
        this.b = 2;
        }
        
        Foo.prototype.c = 3;
        
        _.forOwn(new Foo, function(value, key) {
        console.log(key);
        });
        // => logs 'a' and 'b' (iteration order is not guaranteed)
    lang: js
***/
/// <reference path="../../methods/Object/forOwn.d.ts"/>
