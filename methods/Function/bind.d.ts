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
    name: bind
    params: 
        (0) func: Function
        (1) thisArg: *
        (2) [partials]: ...*
    returns: Function
    type: Function
    comment: 
        Creates a function that invokes `func` with the `this` binding of `thisArg`
        and prepends any additional `_.bind` arguments to those provided to the
        bound function.
        
        The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
        may be used as a placeholder for partially applied arguments.
        
        **Note:** Unlike native `Function#bind` this method does not set the "length"
        property of bound functions.
        
        @static
        @memberOf _
        @category Function
        @param {Function} func The function to bind.
        @param {*} thisArg The `this` binding of `func`.
        @param {...*} [partials] The arguments to be partially applied.
        @returns {Function} Returns the new bound function.
        @example
        
        var greet = function(greeting, punctuation) {
        return greeting + ' ' + this.user + punctuation;
        };
        
        var object = { 'user': 'fred' };
        
        var bound = _.bind(greet, object, 'hi');
        bound('!');
        // => 'hi fred!'
        
        // using placeholders
        var bound = _.bind(greet, object, _, '!');
        bound('hi');
        // => 'hi fred!'
    lang: js
***/
interface LoDashStatic {
    bind<T extends Function, TResult extends Function>(func: T, thisArg: any, ...partials: any[]): TResult;
    bind<TResult>(func: () => TResult, thisArg: any): () => TResult;
    bind<T1, TResult>(func: (arg1: T1) => TResult, thisArg: any): (arg1: T1) => TResult;
    bind<T1, TResult>(func: (arg1: T1) => TResult, thisArg: any, arg1: T1): () => TResult;
    bind<T1, T2, TResult>(func: (arg1: T1, arg2: T2) => TResult, thisArg: any): (arg1: T1, arg2: T2) => TResult;
    bind<T1, T2, TResult>(func: (arg1: T1, arg2: T2) => TResult, thisArg: any, arg1: T1): (arg2: T2) => TResult;
    bind<T1, T2, TResult>(func: (arg1: T1, arg2: T2) => TResult, thisArg: any, arg1: T1, arg2: T2): () => TResult;
    bind<T1, T2, T3, TResult>(func: (arg1: T1, arg2: T2, arg3: T3) => TResult, thisArg: any): (arg1: T1, arg2: T2, arg3: T3) => TResult;
    bind<T1, T2, T3, TResult>(func: (arg1: T1, arg2: T2, arg3: T3) => TResult, thisArg: any, arg1: T1): (arg2: T2, arg3: T3) => TResult;
    bind<T1, T2, T3, TResult>(func: (arg1: T1, arg2: T2, arg3: T3) => TResult, thisArg: any, arg1: T1, arg2: T2): (arg3: T3) => TResult;
    bind<T1, T2, T3, TResult>(func: (arg1: T1, arg2: T2, arg3: T3) => TResult, thisArg: any, arg1: T1, arg2: T2, arg3: T3): () => TResult;
    bind<T1, T2, T3, T4, TResult>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => TResult, thisArg: any): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => TResult;
    bind<T1, T2, T3, T4, TResult>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => TResult, thisArg: any, arg1: T1): (arg2: T2, arg3: T3, arg4: T4) => TResult;
    bind<T1, T2, T3, T4, TResult>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => TResult, thisArg: any, arg1: T1, arg2: T2): (arg3: T3, arg4: T4) => TResult;
    bind<T1, T2, T3, T4, TResult>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => TResult, thisArg: any, arg1: T1, arg2: T2, arg3: T3): (arg4: T4) => TResult;
    bind<T1, T2, T3, T4, TResult>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => TResult, thisArg: any, arg1: T1, arg2: T2, arg3: T3, arg4: T4): () => TResult;
    bind<T1, T2, T3, T4, T5, TResult>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => TResult, thisArg: any): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => TResult;
    bind<T1, T2, T3, T4, T5, TResult>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => TResult, thisArg: any, arg1: T1): (arg2: T2, arg3: T3, arg4: T4, arg5: T5) => TResult;
    bind<T1, T2, T3, T4, T5, TResult>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => TResult, thisArg: any, arg1: T1, arg2: T2): (arg3: T3, arg4: T4, arg5: T5) => TResult;
    bind<T1, T2, T3, T4, T5, TResult>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => TResult, thisArg: any, arg1: T1, arg2: T2, arg3: T3): (arg4: T4, arg5: T5) => TResult;
    bind<T1, T2, T3, T4, T5, TResult>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => TResult, thisArg: any, arg1: T1, arg2: T2, arg3: T3, arg4: T4): (arg5: T5) => TResult;
    bind<T1, T2, T3, T4, T5, TResult>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => TResult, thisArg: any, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5): () => TResult;
}
