/*
    aliases: 
    category: Function
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: _
    name: bindAll
    params: 
        (0) object: Object
        (1) [methodNames]: ...(string|string[]
    returns: Object
    type: Function
    comment: 
        Binds methods of an object to the object itself, overwriting the existing
        method. Method names may be specified as individual arguments or as arrays
        of method names. If no method names are provided all enumerable function
        properties, own and inherited, of `object` are bound.
        
        **Note:** This method does not set the "length" property of bound functions.
        
        @static
        @memberOf _
        @category Function
        @param {Object} object The object to bind and assign the bound methods to.
        @param {...(string|string[])} [methodNames] The object method names to bind,
        specified as individual method names or arrays of method names.
        @returns {Object} Returns `object`.
        @example
        
        var view = {
        'label': 'docs',
        'onClick': function() {
        console.log('clicked ' + this.label);
        }
        };
        
        _.bindAll(view);
        jQuery('#docs').on('click', view.onClick);
        // => logs 'clicked docs' when the element is clicked
    lang: js
***/
/// <reference path="../../methods/Function/bindAll.d.ts"/>
