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
    name: partial
    params: 
        (0) func: Function
        (1) [partials]: ...*
    returns: Function
    type: Function
    comment: 
        Creates a function that invokes `func` with `partial` arguments prepended
        to those provided to the new function. This method is like `_.bind` except
        it does **not** alter the `this` binding.
        
        The `_.partial.placeholder` value, which defaults to `_` in monolithic
        builds, may be used as a placeholder for partially applied arguments.
        
        **Note:** This method does not set the "length" property of partially
        applied functions.
        
        @static
        @memberOf _
        @category Function
        @param {Function} func The function to partially apply arguments to.
        @param {...*} [partials] The arguments to be partially applied.
        @returns {Function} Returns the new partially applied function.
        @example
        
        var greet = function(greeting, name) {
        return greeting + ' ' + name;
        };
        
        var sayHelloTo = _.partial(greet, 'hello');
        sayHelloTo('fred');
        // => 'hello fred'
        
        // using placeholders
        var greetFred = _.partial(greet, _, 'fred');
        greetFred('hi');
        // => 'hi fred'
    lang: js
***/
interface LoDashStatic {
    //:comment
    partial<T extends Function, TResult extends Function>(func: T, ...partials: any[]): TResult;
    //:comment
    partial<TResult>(func: () => TResult): () => TResult;
    //:comment
    partial<T1, TResult>(func: (partial1: T1) => TResult): (partial1: T1) => TResult;
    //:comment
    partial<T1, TResult>(func: (partial1: T1) => TResult, partial1: T1): () => TResult;
    //:comment
    partial<T1, T2, TResult>(func: (partial1: T1, partial2: T2) => TResult): (partial1: T1, partial2: T2) => TResult;
    //:comment
    partial<T1, T2, TResult>(func: (partial1: T1, partial2: T2) => TResult, partial1: T1): (partial2: T2) => TResult;
    //:comment
    partial<T1, T2, TResult>(func: (partial1: T1, partial2: T2) => TResult, partial1: T1, partial2: T2): () => TResult;
    //:comment
    partial<T1, T2, T3, TResult>(func: (partial1: T1, partial2: T2, partial3: T3) => TResult): (partial1: T1, partial2: T2, partial3: T3) => TResult;
    //:comment
    partial<T1, T2, T3, TResult>(func: (partial1: T1, partial2: T2, partial3: T3) => TResult, partial1: T1, partial2: LoDashStatic): (partial2: T2, partial3: T3) => TResult;
    //:comment
    partial<T1, T2, T3, TResult>(func: (partial1: T1, partial2: T2, partial3: T3) => TResult, partial1: T1): (partial2: T2, partial3: T3) => TResult;
    //:comment
    partial<T1, T2, T3, TResult>(func: (partial1: T1, partial2: T2, partial3: T3) => TResult, partial1: T1, partial2: T2): (partial3: T3) => TResult;
    //:comment
    partial<T1, T2, T3, TResult>(func: (partial1: T1, partial2: T2, partial3: T3) => TResult, partial1: T1, partial2: T2, partial3: T3): () => TResult;
    //:comment
    partial<T1, T2, T3, T4, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4) => TResult): (partial1: T1, partial2: T2, partial3: T3, partial4: T4) => TResult;
    //:comment
    partial<T1, T2, T3, T4, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4) => TResult, partial1: T1, partial2: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4) => TResult;
    //:comment
    partial<T1, T2, T3, T4, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4) => TResult, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4) => TResult;
    //:comment
    partial<T1, T2, T3, T4, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4) => TResult, partial1: T1, partial2: T2, partial3: LoDashStatic): (partial3: T3, partial4: T4) => TResult;
    //:comment
    partial<T1, T2, T3, T4, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4) => TResult, partial1: T1): (partial2: T2, partial3: T3, partial4: T4) => TResult;
    //:comment
    partial<T1, T2, T3, T4, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4) => TResult, partial1: T1, partial2: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4) => TResult;
    //:comment
    partial<T1, T2, T3, T4, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4) => TResult, partial1: T1, partial2: T2): (partial3: T3, partial4: T4) => TResult;
    //:comment
    partial<T1, T2, T3, T4, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4) => TResult, partial1: T1, partial2: T2, partial3: T3): (partial4: T4) => TResult;
    //:comment
    partial<T1, T2, T3, T4, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4) => TResult, partial1: T1, partial2: T2, partial3: T3, partial4: T4): () => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult): (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult, partial1: T1, partial2: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult, partial1: T1, partial2: T2, partial3: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic, partial4: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult, partial1: T1, partial2: T2, partial3: LoDashStatic, partial4: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult, partial1: T1, partial2: T2, partial3: T3, partial4: LoDashStatic): (partial4: T4, partial5: T5) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult, partial1: T1): (partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult, partial1: T1, partial2: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult, partial1: T1, partial2: T2, partial3: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult, partial1: T1, partial2: T2): (partial3: T3, partial4: T4, partial5: T5) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult, partial1: T1, partial2: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult, partial1: T1, partial2: T2, partial3: T3): (partial4: T4, partial5: T5) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult, partial1: T1, partial2: T2, partial3: T3, partial4: T4): (partial5: T5) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5) => TResult, partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5): () => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult): (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, partial1: T1, partial2: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, partial1: T1, partial2: T2, partial3: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic, partial4: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, partial1: T1, partial2: T2, partial3: LoDashStatic, partial4: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, partial1: T1, partial2: T2, partial3: T3, partial4: LoDashStatic): (partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic, partial4: LoDashStatic, partial5: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, partial1: T1, partial2: T2, partial3: LoDashStatic, partial4: LoDashStatic, partial5: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, partial1: T1, partial2: T2, partial3: T3, partial4: LoDashStatic, partial5: LoDashStatic): (partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: LoDashStatic): (partial5: T5, partial6: T6) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, partial1: T1): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, partial1: T1, partial2: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, partial1: T1, partial2: T2, partial3: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic, partial4: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, partial1: T1, partial2: T2, partial3: LoDashStatic, partial4: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, partial1: T1, partial2: T2, partial3: T3, partial4: LoDashStatic): (partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, partial1: T1, partial2: T2): (partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, partial1: T1, partial2: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, partial1: T1, partial2: T2, partial3: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, partial1: T1, partial2: T2, partial3: T3): (partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, partial1: T1, partial2: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, partial1: T1, partial2: T2, partial3: T3, partial4: T4): (partial5: T5, partial6: T6) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5): (partial6: T6) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6) => TResult, partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6): () => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult): (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: T2, partial3: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic, partial4: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: T2, partial3: LoDashStatic, partial4: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: T2, partial3: T3, partial4: LoDashStatic): (partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic, partial4: LoDashStatic, partial5: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: T2, partial3: LoDashStatic, partial4: LoDashStatic, partial5: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: T2, partial3: T3, partial4: LoDashStatic, partial5: LoDashStatic): (partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: LoDashStatic): (partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic, partial4: LoDashStatic, partial5: LoDashStatic, partial6: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: T2, partial3: LoDashStatic, partial4: LoDashStatic, partial5: LoDashStatic, partial6: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: T2, partial3: T3, partial4: LoDashStatic, partial5: LoDashStatic, partial6: LoDashStatic): (partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: LoDashStatic, partial6: LoDashStatic): (partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: LoDashStatic): (partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: T2, partial3: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic, partial4: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: T2, partial3: LoDashStatic, partial4: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: T2, partial3: T3, partial4: LoDashStatic): (partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic, partial4: LoDashStatic, partial5: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: T2, partial3: LoDashStatic, partial4: LoDashStatic, partial5: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: T2, partial3: T3, partial4: LoDashStatic, partial5: LoDashStatic): (partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: LoDashStatic): (partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: T2): (partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: T2, partial3: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic, partial4: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: T2, partial3: LoDashStatic, partial4: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: T2, partial3: T3, partial4: LoDashStatic): (partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: T2, partial3: T3): (partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: LoDashStatic, partial3: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: T2, partial3: LoDashStatic): (partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: T2, partial3: T3, partial4: T4): (partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: LoDashStatic): (partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5): (partial6: T6, partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6): (partial7: T7) => TResult;
    //:comment
    partial<T1, T2, T3, T4, T5, T6, T7, TResult>(func: (partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7) => TResult, partial1: T1, partial2: T2, partial3: T3, partial4: T4, partial5: T5, partial6: T6, partial7: T7): () => TResult;
}
