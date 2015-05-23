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
    name: clone
    params: 
        (0) value: *
        (1) [isDeep]: boolean
        (2) [customizer]: Function
        (3) [thisArg]: *
    returns: *
    type: Function
    comment: 
        Creates a clone of `value`. If `isDeep` is `true` nested objects are cloned,
        otherwise they are assigned by reference. If `customizer` is provided it is
        invoked to produce the cloned values. If `customizer` returns `undefined`
        cloning is handled by the method instead. The `customizer` is bound to
        `thisArg` and invoked with two argument; (value [, index|key, object]).
        
        **Note:** This method is loosely based on the
        [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
        The enumerable properties of `arguments` objects and objects created by
        constructors other than `Object` are cloned to plain `Object` objects. An
        empty object is returned for uncloneable values such as functions, DOM nodes,
        Maps, Sets, and WeakMaps.
        
        @static
        @memberOf _
        @category Lang
        @param {*} value The value to clone.
        @param {boolean} [isDeep] Specify a deep clone.
        @param {Function} [customizer] The function to customize cloning values.
        @param {*} [thisArg] The `this` binding of `customizer`.
        @returns {*} Returns the cloned value.
        @example
        
        var users = [
        { 'user': 'barney' },
        { 'user': 'fred' }
        ];
        
        var shallow = _.clone(users);
        shallow[0] === users[0];
        // => true
        
        var deep = _.clone(users, true);
        deep[0] === users[0];
        // => false
        
        // using a customizer callback
        var el = _.clone(document.body, function(value) {
        if (_.isElement(value)) {
        return value.cloneNode(false);
        }
        });
        
        el === document.body
        // => false
        el.nodeName
        // => BODY
        el.childNodes.length;
        // => 0
    lang: js
***/
/// <reference path="_.d.ts"/>
