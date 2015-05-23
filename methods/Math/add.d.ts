/*
    aliases: 
    category: Math
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: _
    name: add
    params: 
        (0) augend: number
        (1) addend: number
    returns: number
    type: Function
    comment: 
        Adds two numbers.
        
        @static
        @memberOf _
        @category Math
        @param {number} augend The first number to add.
        @param {number} addend The second number to add.
        @returns {number} Returns the sum.
        @example
        
        _.add(6, 4);
        // => 10
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>

interface LoDashStatic {
    //:comment
    add(augend: number, addend: number): number;
}

interface LoDashWrapper<T> {
    //:chain:comment
    add(addend: number): number;
}

interface LoDashChainWrapper<T> {
    //:chain:comment
    add(addend: number): number;
}
