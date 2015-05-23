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
    name: create
    params: 
        (0) prototype: Object
        (1) [properties]: Object
    returns: Object
    type: Function
    comment: 
        Creates an object that inherits from the given `prototype` object. If a
        `properties` object is provided its own enumerable properties are assigned
        to the created object.
        
        @static
        @memberOf _
        @category Object
        @param {Object} prototype The object to inherit from.
        @param {Object} [properties] The properties to assign to the object.
        @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
        @returns {Object} Returns the new object.
        @example
        
        function Shape() {
        this.x = 0;
        this.y = 0;
        }
        
        function Circle() {
        Shape.call(this);
        }
        
        Circle.prototype = _.create(Shape.prototype, {
        'constructor': Circle
        });
        
        var circle = new Circle;
        circle instanceof Circle;
        // => true
        
        circle instanceof Shape;
        // => true
    lang: js
***/
/// <reference path="_.d.ts"/>
