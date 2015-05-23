/*
    aliases: 
    category: Utility
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: _
    name: uniqueId
    params: 
        (0) [prefix]: string
    returns: string
    type: Function
    comment: 
        Generates a unique ID. If `prefix` is provided the ID is appended to it.
        
        @static
        @memberOf _
        @category Utility
        @param {string} [prefix] The value to prefix the ID with.
        @returns {string} Returns the unique ID.
        @example
        
        _.uniqueId('contact_');
        // => 'contact_104'
        
        _.uniqueId();
        // => '105'
    lang: js
***/
/// <reference path="_.d.ts"/>
