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
    name: commit
    params: 

    returns: Object
    type: Function
    comment: 
        Executes the chained sequence and returns the wrapped result.
        
        @name commit
        @memberOf _
        @category Chain
        @returns {Object} Returns the new `lodash` wrapper instance.
        @example
        
        var array = [1, 2];
        var wrapper = _(array).push(3);
        
        console.log(array);
        // => [1, 2]
        
        wrapper = wrapper.commit();
        console.log(array);
        // => [1, 2, 3]
        
        wrapper.last();
        // => 3
        
        console.log(array);
        // => [1, 2, 3]
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
