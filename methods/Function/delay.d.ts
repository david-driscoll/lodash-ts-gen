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
    name: delay
    params: 
        (0) func: Function
        (1) wait: number
        (2) [args]: ...*
    returns: number
    type: Function
    comment: 
        Invokes `func` after `wait` milliseconds. Any additional arguments are
        provided to `func` when it is invoked.
        
        @static
        @memberOf _
        @category Function
        @param {Function} func The function to delay.
        @param {number} wait The number of milliseconds to delay invocation.
        @param {...*} [args] The arguments to invoke the function with.
        @returns {number} Returns the timer id.
        @example
        
        _.delay(function(text) {
        console.log(text);
        }, 1000, 'later');
        // => logs 'later' after one second
    lang: js
***/
interface LoDashStatic {
    //:comment
    defer<T extends Function>(func: T, wait: number, ...args: any[]): number;
    delay(func: () => void, wait: number): number;
    delay<T1>(func: (arg1: T1) => void, wait: number, arg1: T1): number;
    delay<T1, T2>(func: (arg1: T1, arg2: T2) => void, wait: number, arg1: T1, arg2: T2): number;
    delay<T1, T2, T3>(func: (arg1: T1, arg2: T2, arg3: T3) => void, wait: number, arg1: T1, arg2: T2, arg3: T3): number;
    delay<T1, T2, T3, T4>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => void, wait: number, arg1: T1, arg2: T2, arg3: T3, arg4: T4): number;
    delay<T1, T2, T3, T4, T5>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => void, wait: number, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5): number;
    delay<T1, T2, T3, T4, T5, T6>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => void, wait: number, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6): number;
    delay<T1, T2, T3, T4, T5, T6, T7>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => void, wait: number, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7): number;
    delay<T1, T2, T3, T4, T5, T6, T7, T8>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => void, wait: number, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8): number;
    delay<T1, T2, T3, T4, T5, T6, T7, T8, T9>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) => void, wait: number, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9): number;
    delay<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10) => void, wait: number, arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10): number;
}
