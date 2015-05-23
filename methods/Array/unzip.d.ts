/*
    aliases: 
    category: Array
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: _
    name: unzip
    params: 
        (0) array: Array
    returns: Array
    type: Function
    comment: 
        This method is like `_.zip` except that it accepts an array of grouped
        elements and creates an array regrouping the elements to their pre-zip
        configuration.
        
        @static
        @memberOf _
        @category Array
        @param {Array} array The array of grouped elements to process.
        @returns {Array} Returns the new array of regrouped elements.
        @example
        
        var zipped = _.zip(['fred', 'barney'], [30, 40], [true, false]);
        // => [['fred', 30, true], ['barney', 40, false]]
        
        _.unzip(zipped);
        // => [['fred', 'barney'], [30, 40], [true, false]]
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
