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
    name: defer
    params: 
        (0) func: Function
        (1) [args]: ...*
    returns: number
    type: Function
    comment: 
        Defers invoking the `func` until the current call stack has cleared. Any
        additional arguments are provided to `func` when it is invoked.
        
        @static
        @memberOf _
        @category Function
        @param {Function} func The function to defer.
        @param {...*} [args] The arguments to invoke the function with.
        @returns {number} Returns the timer id.
        @example
        
        _.defer(function(text) {
        console.log(text);
        }, 'deferred');
        // logs 'deferred' after one or more milliseconds
    lang: js
***/
interface LoDashStatic {
    //:comment
    defer<T extends Function>(func: T, ...args: any[]): number;
    defer(func: () => void): number;
    defer<T1>(func: (arg1: T1) => void, arg1: T1): number;
    defer<T1, T2>(func: (arg1: T1, arg2: T2) => void, arg1: T1, arg2: T2): number;
    defer<T1, T2, T3>(func: (arg1: T1, arg2: T2, arg3: T3) => void, arg1: T1, arg2: T2, arg3: T3): number;
    defer<T1, T2, T3, T4>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => void, arg1: T1, arg2: T2, arg3: T3, arg4: T4): number;
    defer<T1, T2, T3, T4, T5>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => void, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5): number;
    defer<T1, T2, T3, T4, T5, T6>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => void, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6): number;
    defer<T1, T2, T3, T4, T5, T6, T7>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => void, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7): number;
    defer<T1, T2, T3, T4, T5, T6, T7, T8>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => void, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8): number;
    defer<T1, T2, T3, T4, T5, T6, T7, T8, T9>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) => void, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9): number;
    defer<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10) => void, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10): number;
}
