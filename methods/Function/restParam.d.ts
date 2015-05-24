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
    name: restParam
    params: 
        (0) func: Function
        (1) [start=func.length-1]: number
    returns: Function
    type: Function
    comment: 
        Creates a function that invokes `func` with the `this` binding of the
        created function and arguments from `start` and beyond provided as an array.
        
        **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
        
        @static
        @memberOf _
        @category Function
        @param {Function} func The function to apply a rest parameter to.
        @param {number} [start=func.length-1] The start position of the rest parameter.
        @returns {Function} Returns the new function.
        @example
        
        var say = _.restParam(function(what, names) {
        return what + ' ' + _.initial(names).join(', ') +
        (_.size(names) > 1 ? ', & ' : '') + _.last(names);
        });
        
        say('hello', 'fred', 'barney', 'pebbles');
        // => 'hello fred, barney, & pebbles'
    lang: js
***/
interface LoDashStatic {
    //:comment
    restParam<T extends Function>(func: Function, start?: number): T;
    restParam<T1[], TResult>(func: (arg1: T1) => TResult): (...arg1: T1) => TResult;
    restParam<T1, T2[], TResult>(func: (arg1: T1, arg2: T2) => TResult): (arg1: T1, ...arg2: T2) => TResult;
    restParam<T1, T2, T3[], TResult>(func: (arg1: T1, arg2: T2, arg3: T3) => TResult): (arg1: T1, arg2: T2, ...arg3: T3) => TResult;
    restParam<T1, T2, T3, T4[], TResult>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => TResult): (arg1: T1, arg2: T2, arg3: T3, ...arg4: T4) => TResult;
    restParam<T1, T2, T3, T4, T5[], TResult>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => TResult): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, ...arg5: T5) => TResult;
    restParam<T1, T2, T3, T4, T5, T6[], TResult>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => TResult): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, ...arg6: T6) => TResult;
    restParam<T1, T2, T3, T4, T5, T6, T7[], TResult>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7) => TResult): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, ...arg7: T7) => TResult;
    restParam<T1, T2, T3, T4, T5, T6, T7, T8[], TResult>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8) => TResult): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, ...arg8: T8) => TResult;
    restParam<T1, T2, T3, T4, T5, T6, T7, T8, T9[], TResult>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9) => TResult): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, ...arg9: T9) => TResult;
    restParam<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10[], TResult>(func: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, arg10: T10) => TResult): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, arg7: T7, arg8: T8, arg9: T9, ...arg10: T10) => TResult;
}
