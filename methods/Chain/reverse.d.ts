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
    name: reverse
    params: 

    returns: Object
    type: Function
    comment: 
        Reverses the wrapped array so the first element becomes the last, the
        second element becomes the second to last, and so on.
        
        **Note:** This method mutates the wrapped array.
        
        @name reverse
        @memberOf _
        @category Chain
        @returns {Object} Returns the new reversed `lodash` wrapper instance.
        @example
        
        var array = [1, 2, 3];
        
        _(array).reverse().value()
        // => [3, 2, 1]
        
        console.log(array);
        // => [3, 2, 1]
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
