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
    name: throttle
    params: 
        (0) func: Function
        (1) [wait=0]: number
        (2) [options]: Object
        (3) [options.leading=true]: boolean
        (4) [options.trailing=true]: boolean
    returns: Function
    type: Function
    comment: 
        Creates a throttled function that only invokes `func` at most once per
        every `wait` milliseconds. The throttled function comes with a `cancel`
        method to cancel delayed invocations. Provide an options object to indicate
        that `func` should be invoked on the leading and/or trailing edge of the
        `wait` timeout. Subsequent calls to the throttled function return the
        result of the last `func` call.
        
        **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
        on the trailing edge of the timeout only if the the throttled function is
        invoked more than once during the `wait` timeout.
        
        See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
        for details over the differences between `_.throttle` and `_.debounce`.
        
        @static
        @memberOf _
        @category Function
        @param {Function} func The function to throttle.
        @param {number} [wait=0] The number of milliseconds to throttle invocations to.
        @param {Object} [options] The options object.
        @param {boolean} [options.leading=true] Specify invoking on the leading
        edge of the timeout.
        @param {boolean} [options.trailing=true] Specify invoking on the trailing
        edge of the timeout.
        @returns {Function} Returns the new throttled function.
        @example
        
        // avoid excessively updating the position while scrolling
        jQuery(window).on('scroll', _.throttle(updatePosition, 100));
        
        // invoke enewToken` when the click event is fired, but not more than once every 5 minutes
        jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
        'trailing': false
        }));
        
        // cancel a trailing throttled call
        jQuery(window).on('popstate', throttled.cancel);
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
