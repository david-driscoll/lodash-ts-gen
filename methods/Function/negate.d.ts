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
    name: negate
    params: 
        (0) predicate: Function
    returns: Function
    type: Function
    comment: 
        Creates a function that negates the result of the predicate `func`. The
        `func` predicate is invoked with the `this` binding and arguments of the
        created function.
        
        @static
        @memberOf _
        @category Function
        @param {Function} predicate The predicate to negate.
        @returns {Function} Returns the new function.
        @example
        
        function isEven(n) {
        return n % 2 == 0;
        }
        
        _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
        // => [1, 3, 5]
    lang: js
***/
interface LoDashStatic {
    //:comment
    negate<T extends Function>(func: T): number;
    negate(func: () => boolean): () => boolean;
    negate<T1>(func: (arg1: T1) => boolean): (arg1: T1) => boolean;
    negate<T1, T2>(func: (arg1: T1, arg2: T2) => boolean): (arg1: T1, arg2: T2) => boolean;
    negate<T1, T2, T3>(func: (arg1: T1, arg2: T2, arg3: T3) => boolean): (arg1: T1, arg2: T2, arg3: T3) => boolean;
    negate<T1, T2, T3, T4>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => boolean): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => boolean;
    negate<T1, T2, T3, T4, T5>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => boolean): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => boolean;
    negate<T1, T2, T3, T4, T5, T6>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => boolean): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => boolean;
    negate<T1, T2, T3, T4, T5, T6, T7>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => boolean): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => boolean;
    negate<T1, T2, T3, T4, T5, T6, T7, T8>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => boolean): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => boolean;
    negate<T1, T2, T3, T4, T5, T6, T7, T8, T9>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) => boolean): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) => boolean;
    negate<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10) => boolean): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10) => boolean;
}
