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
    name: chain
    params: 

    returns: Object
    type: Function
    comment: 
        Enables explicit method chaining on the wrapper object.
        
        @name chain
        @memberOf _
        @category Chain
        @returns {Object} Returns the new `lodash` wrapper instance.
        @example
        
        var users = [
        { 'user': 'barney', 'age': 36 },
        { 'user': 'fred',   'age': 40 }
        ];
        
        // without explicit chaining
        _(users).first();
        // => { 'user': 'barney', 'age': 36 }
        
        // with explicit chaining
        _(users).chain()
        .first()
        .pick('user')
        .value();
        // => { 'user': 'barney' }
    lang: js
***/
/// <reference path="../../methods/Chain/chain.d.ts"/>
