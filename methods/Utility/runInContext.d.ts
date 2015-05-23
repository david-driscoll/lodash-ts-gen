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
    name: runInContext
    params: 
        (0) [context=root]: Object
    returns: Function
    type: Function
    comment: 
        Create a new pristine `lodash` function using the given `context` object.
        
        @static
        @memberOf _
        @category Utility
        @param {Object} [context=root] The context object.
        @returns {Function} Returns a new `lodash` function.
        @example
        
        _.mixin({ 'foo': _.constant('foo') });
        
        var lodash = _.runInContext();
        lodash.mixin({ 'bar': lodash.constant('bar') });
        
        _.isFunction(_.foo);
        // => true
        _.isFunction(_.bar);
        // => false
        
        lodash.isFunction(lodash.foo);
        // => false
        lodash.isFunction(lodash.bar);
        // => true
        
        // using `context` to mock `Date#getTime` use in `_.now`
        var mock = _.runInContext({
        'Date': function() {
        return { 'getTime': getTimeMock };
        }
        });
        
        // or creating a suped-up `defer` in Node.js
        var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
    lang: js
***/
/// <reference path="_.d.ts"/>
