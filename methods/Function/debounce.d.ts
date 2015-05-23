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
    name: debounce
    params: 
        (0) func: Function
        (1) [wait=0]: number
        (2) [options]: Object
        (3) [options.leading=false]: boolean
        (4) [options.maxWait]: number
        (5) [options.trailing=true]: boolean
    returns: Function
    type: Function
    comment: 
        Creates a debounced function that delays invoking `func` until after `wait`
        milliseconds have elapsed since the last time the debounced function was
        invoked. The debounced function comes with a `cancel` method to cancel
        delayed invocations. Provide an options object to indicate that `func`
        should be invoked on the leading and/or trailing edge of the `wait` timeout.
        Subsequent calls to the debounced function return the result of the last
        `func` invocation.
        
        **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
        on the trailing edge of the timeout only if the the debounced function is
        invoked more than once during the `wait` timeout.
        
        See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
        for details over the differences between `_.debounce` and `_.throttle`.
        
        @static
        @memberOf _
        @category Function
        @param {Function} func The function to debounce.
        @param {number} [wait=0] The number of milliseconds to delay.
        @param {Object} [options] The options object.
        @param {boolean} [options.leading=false] Specify invoking on the leading
        edge of the timeout.
        @param {number} [options.maxWait] The maximum time `func` is allowed to be
        delayed before it is invoked.
        @param {boolean} [options.trailing=true] Specify invoking on the trailing
        edge of the timeout.
        @returns {Function} Returns the new debounced function.
        @example
        
        // avoid costly calculations while the window size is in flux
        jQuery(window).on('resize', _.debounce(calculateLayout, 150));
        
        // invoke `sendMail` when the click event is fired, debouncing subsequent calls
        jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
        'leading': true,
        'trailing': false
        }));
        
        // ensure `batchLog` is invoked once after 1 second of debounced calls
        var source = new EventSource('/stream');
        jQuery(source).on('message', _.debounce(batchLog, 250, {
        'maxWait': 1000
        }));
        
        // cancel a debounced call
        var todoChanges = _.debounce(batchLog, 1000);
        Object.observe(models.todo, todoChanges);
        
        Object.observe(models, function(changes) {
        if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
        todoChanges.cancel();
        }
        }, ['delete']);
        
        // ...at some point `models.todo` is changed
        models.todo.completed = true;
        
        // ...before 1 second has passed `models.todo` is deleted
        // which cancels the debounced `todoChanges` call
        delete models.todo;
    lang: js
***/
/// <reference path="_.d.ts"/>
