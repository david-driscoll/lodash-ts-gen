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
    name: toPlainObject
    params: 
        (0) value: *
    returns: Object
    type: Function
    comment: 
        Converts `value` to a plain object flattening inherited enumerable
        properties of `value` to own properties of the plain object.
        
        @static
        @memberOf _
        @category Lang
        @param {*} value The value to convert.
        @returns {Object} Returns the converted plain object.
        @example
        
        function Foo() {
        this.b = 2;
        }
        
        Foo.prototype.c = 3;
        
        _.assign({ 'a': 1 }, new Foo);
        // => { 'a': 1, 'b': 2 }
        
        _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
        // => { 'a': 1, 'b': 2, 'c': 3 }
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
