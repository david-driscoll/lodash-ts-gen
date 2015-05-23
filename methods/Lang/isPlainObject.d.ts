/*
    aliases: 
    category: Lang
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: _
    name: isPlainObject
    params: 
        (0) value: *
    returns: boolean
    type: Function
    comment: 
        Checks if `value` is a plain object, that is, an object created by the
        `Object` constructor or one with a `[[Prototype]]` of 
ull`.
        
        **Note:** This method assumes objects created by the `Object` constructor
        have no inherited enumerable properties.
        
        @static
        @memberOf _
        @category Lang
        @param {*} value The value to check.
        @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
        @example
        
        function Foo() {
        this.a = 1;
        }
        
        _.isPlainObject(new Foo);
        // => false
        
        _.isPlainObject([1, 2, 3]);
        // => false
        
        _.isPlainObject({ 'x': 0, 'y': 0 });
        // => true
        
        _.isPlainObject(Object.create(null));
        // => true
    lang: js
***/
/// <reference path="_.d.ts"/>
