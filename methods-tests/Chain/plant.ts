/*
    aliases: 
    category: Chain
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: true
    isPrivate: false
    isStatic: false
    member: _
    name: plant
    params: 

    returns: Object
    type: Function
    comment: 
        Creates a clone of the chained sequence planting `value` as the wrapped value.
        
        @name plant
        @memberOf _
        @category Chain
        @returns {Object} Returns the new `lodash` wrapper instance.
        @example
        
        var array = [1, 2];
        var wrapper = _(array).map(function(value) {
        return Math.pow(value, 2);
        });
        
        var other = [3, 4];
        var otherWrapper = wrapper.plant(other);
        
        otherWrapper.value();
        // => [9, 16]
        
        wrapper.value();
        // => [1, 4]
    lang: js
***/
/// <reference path="../../methods/Chain/plant.d.ts"/>
