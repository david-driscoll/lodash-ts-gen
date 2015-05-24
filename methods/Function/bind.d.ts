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
    //:comment
    bind<T extends Function, TResult extends Function>(func: T, thisArg: any, ...partials: any[]): TResult;
    //:comment
    bind<TResult>(func: () => TResult, thisArg: any): () => TResult;
    //:comment
    bind<T1, TResult>(func: (partial1: T1) => TResult, thisArg: any): (partial1: T1) => TResult;
    //:comment
    bind<T1, TResult>(func: (partial1: T1) => TResult, thisArg: any, partial1: T1): () => TResult;
    //:comment
    bind<T1, T2, TResult>(func: (partial1: T1, partial2: T2) => TResult, thisArg: any): (partial1: T1, partial2: T2) => TResult;
    //:comment
    bind<T1, T2, TResult>(func: (partial1: T1, partial2: T2) => TResult, thisArg: any, partial1: T1): (partial2: T2) => TResult;
    //:comment
    bind<T1, T2, TResult>(func: (partial1: T1, partial2: T2) => TResult, thisArg: any, partial1: T1, partial2: T2): () => TResult;
    //:comment
    bind<T1, T2, T3, TResult>(func: (partial1: T1, partial2: T2, partial3: T3) => TResult, thisArg: any): (partial1: T1, partial2: T2, partial3: T3) => TResult;
    //:comment
    bind<T1, T2, T3, TResult>(func: (partial1: T1, partial2: T2, partial3: T3) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic): (partial2: T2, partial3: T3) => TResult;
    //:comment
    bind<T1, T2, T3, TResult>(func: (partial1: T1, partial2: T2, partial3: T3) => TResult, thisArg: any, partial1: T1): (partial2: T2, partial3: T3) => TResult;
    //:comment
    bind<T1, T2, T3, TResult>(func: (partial1: T1, partial2: T2, partial3: T3) => TResult, thisArg: any, partial1: T1, partial2: T2): (partial3: T3) => TResult;
    //:comment
    bind<T1, T2, T3, TResult>(func: (partial1: T1, partial2: T2, partial3: T3) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: T3): () => TResult;
    //:comment
    bind<T1, T2, T3, T4, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4) => TResult, thisArg: any): (partial1: T1, partial2: T2, partial3: T3, partial4: T4) => TResult;
    //:comment
    bind<T1, T2, T3, T4, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4) => TResult;
    //:comment
    bind<T1, T2, T3, T4, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4) => TResult;
    //:comment
    bind<T1, T2, T3, T4, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: LoDashStatic): (partial3: T3, partial4: T4) => TResult;
    //:comment
    bind<T1, T2, T3, T4, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4) => TResult, thisArg: any, partial1: T1): (partial2: T2, partial3: T3, partial4: T4) => TResult;
    //:comment
    bind<T1, T2, T3, T4, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4) => TResult;
    //:comment
    bind<T1, T2, T3, T4, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4) => TResult, thisArg: any, partial1: T1, partial2: T2): (partial3: T3, partial4: T4) => TResult;
    //:comment
    bind<T1, T2, T3, T4, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: T3): (partial4: T4) => TResult;
    //:comment
    bind<T1, T2, T3, T4, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: T3, partial4: T4): () => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult, thisArg: any): (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic, partial4: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: LoDashStatic, partial4: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: T3, partial4: LoDashStatic): (partial4: T4, partial5: T5) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult, thisArg: any, partial1: T1): (partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult, thisArg: any, partial1: T1, partial2: T2): (partial3: T3, partial4: T4, partial5: T5) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: T3): (partial4: T4, partial5: T5) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: T3, partial4: T4): (partial5: T5) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5): () => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, thisArg: any): (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic, partial4: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: LoDashStatic, partial4: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: T3, partial4: LoDashStatic): (partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic, partial4: LoDashStatic, partial5: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: LoDashStatic, partial4: LoDashStatic, partial5: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: T3, partial4: LoDashStatic, partial5: LoDashStatic): (partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: LoDashStatic): (partial5: T5, partial6: T6) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, thisArg: any, partial1: T1): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic, partial4: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: LoDashStatic, partial4: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: T3, partial4: LoDashStatic): (partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, thisArg: any, partial1: T1, partial2: T2): (partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: T3): (partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: T3, partial4: T4): (partial5: T5, partial6: T6) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5): (partial6: T6) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6): () => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any): (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic, partial4: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: LoDashStatic, partial4: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: T3, partial4: LoDashStatic): (partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic, partial4: LoDashStatic, partial5: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: LoDashStatic, partial4: LoDashStatic, partial5: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: T3, partial4: LoDashStatic, partial5: LoDashStatic): (partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: LoDashStatic): (partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic, partial4: LoDashStatic, partial5: LoDashStatic, partial6: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: LoDashStatic, partial4: LoDashStatic, partial5: LoDashStatic, partial6: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: T3, partial4: LoDashStatic, partial5: LoDashStatic, partial6: LoDashStatic): (partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: LoDashStatic, partial6: LoDashStatic): (partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: LoDashStatic): (partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic, partial4: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: LoDashStatic, partial4: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: T3, partial4: LoDashStatic): (partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic, partial4: LoDashStatic, partial5: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: LoDashStatic, partial4: LoDashStatic, partial5: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: T3, partial4: LoDashStatic, partial5: LoDashStatic): (partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: LoDashStatic): (partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: T2): (partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic, partial4: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: LoDashStatic, partial4: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: T3, partial4: LoDashStatic): (partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: T3): (partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: T3, partial4: T4): (partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5): (partial6: T6, partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6): (partial7: T7) => TResult;
    //:comment
    bind<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, thisArg: any, partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7): () => TResult;
}
