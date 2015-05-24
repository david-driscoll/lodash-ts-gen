import * as _ from 'lodash';
import fs = require('fs');
import os = require('os');
import path = require('path');

var Entry = require("docdown/lib/entry");
var getEntries: (source: string) => any[] = (<any>Entry).getEntries;
var lodashSource = fs.readFileSync('../lodash/lodash.src.js').toString();

function indent(value: string | string[], indent: number, trim = true) {
    if (typeof value === "string") {
        value = <any>[value];
    }

    return _.flatten((_.flatten(<any>value)).map(v => v.split(new RegExp(`[${os.EOL}]`, 'g'))
        .map(x => trim ? x.trim() : x)
        .map(x => _.startsWith(x, '*') ? ' ' + x : x)
        .map(x => _.repeat(' ', indent) + x)
        .filter(z => !!z.trim()))).join('\n');
}

var entries = _(getEntries(lodashSource))
    .map<IEntry>(z => <any>new Entry(z, lodashSource))
    .map(z => ({
        aliases: (z.getAliases() || []).map(z => z.getName()),
        //call: z.getCall(),
        category: z.getCategory(),
        //desc: z.getDesc(),
        //example: z.getExample(),
        //isAlias: z.isAlias(),
        isCtor: z.isCtor(),
        isFunction: z.isFunction(),
        isLicense: z.isLicense(),
        isPlugin: z.isPlugin(),
        isPrivate: z.isPrivate(),
        isStatic: z.isStatic(),
        //lineNumber: z.getLineNumber(),
        member: z.getMembers() && z.getMembers()[0],
        name: z.getName(),
        params: z.getParams(),
        returns: z.getReturns(),
        type: z.getType(),
        //hash: z.getHash(),
        comment: z.entry.substr(0, z.entry.indexOf('*/') + 2),
        lang: z.lang
    }))
    .filter(z => !z.isLicense)
    .filter(z => !z.isPrivate)
    .filter(z => !!z.name);


var root = entries.filter(z => !z.member).first();
var version = entries.filter(z => z.name === "VERSION").first();

//entries = entries.filter(z => !_.any(['inRange', 'range', 'mixin', 'bind', 'defer', 'delay', 'random', 'constant', 'identity', 'matches', 'matchesProperty', 'property', 'propertyOf', 'times', 'noop', 'uniq', 'isEqual', 'isMatch', 'now'], x => z.name === x));
var tempEntires = entries.value();

var commentContents = root.comment.split(os.EOL);
var readContents = commentContents.slice(), read = false;
var chainableMethods = [];
while (readContents.length) {
    var line = readContents.shift();
    if (line.trim() === '*') {
        read = false;
    }
    if (read) {
        var methodNames = _(line.replace('and ', '').split(','))
            .map(z => z.trim())
            .map(z => _.trim(z, '*'))
            .map(z => z.trim())
            .map(z => _.trim(z, '`'))
            .filter(z => !!z)
            .value();
        chainableMethods.push(...methodNames.map(z => {
            var found = _.find(tempEntires, x => x.name === z);
            if (found)
                return [z].concat(found.aliases || []);
            return [z];
        }));
    }
    if (line.indexOf('The wrapper methods that support shortcut fusion are:') > -1) {
        read = true;
    }
    if (line.indexOf('The chainable wrapper methods are:') > -1) {
        read = true;
    }
}

var readContents = commentContents.slice(), read = false;
var nonChainableMethods = [];
while (readContents.length) {
    var line = readContents.shift();
    if (line.trim() === '*') {
        read = false;
    }
    if (read) {
        var methodNames = _(line.replace('and ', '').split(','))
            .map(z => z.trim())
            .map(z => _.trim(z, '*'))
            .map(z => z.trim())
            .map(z => _.trim(z, '`'))
            .filter(z => !!z)
            .value();

        nonChainableMethods.push(...methodNames.map(z => {
            var found = _.find(tempEntires, x => x.name === z);
            if (found)
                return [z].concat(found.aliases || []);
            return [z];
        }));
    }
    if (line.indexOf('The wrapper methods that are **not** chainable by default are:') > -1) {
        read = true;
    }
}

fs.writeFileSync('./metadata.json', JSON.stringify(entries.value(), null, 4));
var fileEntries = entries.filter(z => z.isFunction).sortBy(z => z.name).value();

_.each(fileEntries, entry => {
    entry.comment = os.EOL + '        ' + entry.comment.split(os.EOL).map(z => '        ' + _.trim(z.trim(), '/*').trim()).join(os.EOL).trim();
    entry.returns = <any> entry.returns[0];
    entry.params = <any> (os.EOL + entry.params.map((z, i) => '        ' + '(' + i + ') ' + z[1] + ': ' + z[0]).join(os.EOL));
    var header = '/*' + os.EOL + _.map(entry, (entry, key) => {
        return `    ${key}: ${entry}`;
    }).join(os.EOL) + os.EOL + '***/';

    if (_.any(fileEntries, z => _.contains(z.aliases, entry.name))) {
        return;
    }

    if (!fs.existsSync(path.resolve('./methods', entry.category))) {
        fs.mkdirSync(path.resolve('./methods', entry.category));
    }

    if (!fs.existsSync(path.resolve('./methods-tests', entry.category))) {
        fs.mkdirSync(path.resolve('./methods-tests', entry.category));
    }

    var filename = path.resolve('./methods/', entry.category, entry.name + '.js');
    var computedContents: { [interface: string]: string[] };
    if (fs.existsSync(filename)) {
        let method : Function = require(filename);
        computedContents = method();
    }

    var filename = path.resolve('./methods/', entry.category, entry.name + '.d.ts');
    if (fs.existsSync(filename)) {
        var content;
        if (computedContents) {
            content = header;

            content += _.map(computedContents, (methods, interface) => {
                return `\ninterface ${interface} {\n${indent(methods, 4)}\n}\n`;
            }).join('\n');
        } else {
            content = fs.readFileSync(filename).toString()
                .replace(new RegExp('\n', 'g'), '`n')
                .replace(new RegExp('\r', 'g'), '`r');

            content = content
                .replace(/^\/\*(.*)\*\*\*\//, header)
                .replace(new RegExp('`n', 'g'), '\n')
                .replace(new RegExp('`r', 'g'), '\r');
        }

        fs.writeFileSync(filename, content);
    } else {
        header += os.EOL + '/// <reference path="../Chain/_.d.ts"/>' + os.EOL;
        fs.writeFileSync(filename, header);
    }

    var testName = path.resolve('./methods-tests/', entry.category, entry.name + '.ts');
    if (fs.existsSync(testName)) {
        var content;
        content = fs.readFileSync(testName).toString()
            .replace(new RegExp('\n', 'g'), '`n')
            .replace(new RegExp('\r', 'g'), '`r');

        content = content
            .replace(/^\/\*(.*)\*\*\*\//, header)
            .replace(new RegExp('`n', 'g'), '\n')
            .replace(new RegExp('`r', 'g'), '\r');
        fs.writeFileSync(testName, content);
    } else {
        header += os.EOL + '/// <reference path="../../methods/'+entry.category+'/'+entry.name+'.d.ts"/>' + os.EOL;
        fs.writeFileSync(testName, header);
    }

});

process.exit();

entries = entries.filter(z => z.member);

var staticEntries = entries.filter(z => z.isStatic);
var instanceEntries = entries.filter(z => !z.isStatic);

function isGeneric({params, returns}: { params: [string, string, string][]; returns: [string, string]; }) {
    return isReturnsGeneric(returns) || isFirstParamGeneric(params);
}

function isReturnsGeneric([returnType]: [string, string]) {
    if (returnType === "Array") {
        return true;
    }

    return false;
}

function isFirstParamGeneric(params: [string, string, string][]) {
    if (params[0] && params[0][0] === "Array") {
        return true;
    }

    return false;
}

function makeReturn(propertyName: string, params: [string, string, string][], [type, comment]: [string, string], genericResultType: string, currentParams: any[], category: string, options: { isWrapper: boolean; wrapper?: string; wrapperType?: string; category?: string; }) {

    if (type === '*') {
        type = 'any';
    }

    if (_.any(['each', 'for'], z => _.startsWith(propertyName.toLowerCase(), z))) {
        type = 'T';
    }

    if (type === "Array") {
        if (options.wrapper) {
            type = (genericResultType ? (genericResultType) : "T");
        } else {
            type = (genericResultType ? (genericResultType + '[]') : "T[]");
        }
    }

    if (_.contains(['assign', 'extend', 'defaults', 'create', 'invert', 'get', 'toPlainObject', 'mapKeys',
        'merge', 'omit', 'pick', 'result', 'set', 'clone', 'cloneDeep'], propertyName)) {
        type = 'TResult';
    }

    if (type === "Object") {
        if (_.contains(['zipObject', 'object', 'mapValues'], propertyName)) {
            type = '{ [key: string]: T; }'
        }
    }

    if (propertyName === "countBy") {
        type = "{ [key: string]: number; }";
    }

    if (propertyName === "partition") {
        if (options.isWrapper)
            type = "[T[], T[]]";
        else
            type = "[T[], T[]]"
    }

    if (propertyName === "unzip" || propertyName === "zip") {
        if (options.isWrapper)
            type = "T[]";
        else
            type = "T[][]";
    }

    if (propertyName === "chunk") {
        if (options.isWrapper)
            type = "T[]";
        else
            type = "T[][]";
    }

    if (propertyName === "pairs") {
        if (options.isWrapper)
            type = "[string, T]";
        else
            type = "[string, T][]";
    }

    if (propertyName === "groupBy") {
        var p = currentParams[0].split(':')[1].trim();
        if (p === "Object") {
            type = "{ [key: string]: T[]; }";
        } else if (p === "string") {
            type = "{ [key: string]: string[]; }";
        } else {
            type = "{ [key: string]: T[]; }";
        }
    }

    if (propertyName === "indexBy") {
        var p = currentParams[0].split(':')[1].trim();
        if (p === "Object") {
            type = "{ [key: string]: T; }";
        } else if (p === "string") {
            type = "{ [key: string]: string; }";
        } else {
            type = "{ [key: string]: T; }";
        }
    }

    if (_.findIndex(params, z => z[1].indexOf("[accumulator]") > -1) > -1) {
        type = 'TResult';
    }

    if (_.findIndex(params, z => z[1].indexOf("func") > -1) > -1) {
        type = 'T';
    }

    if (type === 'string|undefined')
        type = 'string';

    if (options.isWrapper && _.contains(nonChainableMethods, propertyName)) {
        if (type !== 'TResult')
            type = (genericResultType ? (genericResultType) : "T");
    }

    if (comment && comment.match(/Returns `(.*?)`/)) {
        // [type, name, c]:
        var param = comment.split('`')[1];
        var paramIndex = _.findIndex(params, z => z[1] === param);
        if (paramIndex > -1)
            type = currentParams[paramIndex].split(':')[1].trim();
    }

    if (options && options.wrapper) {
        type = options.wrapper.replace('T', type);

        if (category !== options.category) {
            if (propertyName === "groupBy") console.log('start', type, options.category, category);
            if (_.endsWith(propertyName, 'By')) {
                if (options.category.indexOf("Chain") > -1) {
                    type = type.replace('LoDashChain' + options.category.replace('Any', '').replace('Chain', ''), 'LoDashChainObject');
                } else {
                    type = type.replace('LoDash' + options.category.replace('Any', ''), 'LoDashObject');
                }
            } else if (options.category.indexOf("Chain") > -1) {
                if (category === "Object" || category === "Array") {
                    type = type.replace('LoDashChain' + options.category.replace('Any', '').replace('Chain', ''), 'LoDashChain' + category.replace('Any', ''));
                }
                if (category === "Collection") {
                    type = type.replace('LoDashChain' + options.category.replace('Any', '').replace('Chain', ''), 'LoDashChain' + 'Array'.replace('Any', ''));
                }
            } else {
                if (category === "Object" || category === "Array") {
                    type = type.replace('LoDash' + options.category.replace('Any', ''), 'LoDash' + category.replace('Any', ''));
                }
                if (category === "Collection") {
                    type = type.replace('LoDash' + options.category.replace('Any', ''), 'LoDash' + 'Array'.replace('Any', ''));
                }
            }

            if (propertyName === "groupBy") console.log('end  ', type)
        }
    }

    return type;
}

function hasGenericResultType(propertyName: string, paramType: string, paramName: string) {
    if (_.contains(["map", "collect"], propertyName))
        return true;

    if (paramName === "path" && paramType === "Array|Function|string") {
        return true;
    }

    return false;
}

function makeMethodReturn(propertyName: string, methodName: string, type: string, paramNames: string[], genericResultType: string) {

    if (_.any(['each', 'for'], z => _.startsWith(propertyName.toLowerCase(), z))) {
        return 'void | boolean';
    }

    if (propertyName === "countBy" || propertyName === "groupBy") {
        return 'string';
    }

    if (paramNames.indexOf("accumulator") > -1) {
        return 'TResult';
    }

    if (paramNames[0] === "object") {
        return "any";
    }

    if (methodName === 'func') {
        return 'T';
    }

    if (genericResultType)
        return genericResultType;

    return 'T';
}

function replaceT(str: string) {
    return str.replace(/T/g, 'any').replace(/anyResult/, 'TResult');
}

function replaceObjectInGenericT(isGenericT: boolean, str: string) {
    if (!isGenericT)
        return str;
    return str.replace(': Object', ': T');
}

function makeCall({name, params, returns, category, comment}: { name: string; params: [string, string, string][]; returns: [string, string]; category: string; comment: string },
    options: { isWrapper: boolean; wrapper?: string; wrapperType?: string; category?: string; }) {

    var propertyName = name;

    var ps = params.filter(z => !_.contains(z[1].split('=')[0], '.'));
    var emulateRestParams;

    var paramNames = ps.map(function([type, name, c]: [string, string, string], index: number) {
        var isOptional = _.startsWith(name, '[');
        if (isOptional) {
            name = _.trim(name.split('=')[0], '[]');
        }

        return name;
    });

    var genericResultType: string;
    if (_.any(ps, function([type, name, c]: [string, string, string], index: number) {
        type = _.trim(type, '()');

        var isOptional = _.startsWith(name, '[');
        if (isOptional) {
            name = _.trim(name.split('=')[0], '[]');
        }

        return hasGenericResultType(propertyName, type, name);
    })) {
        genericResultType = 'TResult';
    }
    var result = _.map(ps, function([type, name, c]: [string, string, string], index: number) {

        var types = [];
        var originalType = type;

        type = _.trim(type, '()');

        var isOptional = _.startsWith(name, '[');
        if (isOptional) {
            name = _.trim(name.split('=')[0], '[]');
        }

        var objectParams = params.filter(z => _.contains(z[1].split('=')[0], name + '.'));
        if (objectParams.length || _.contains(name, 'options'))
            var isObjectParam = objectParams.length > 0;

        if (_.contains(type, "Function")) {
            // handle functions
            if (name === "predicate") {
                if (category === "Collection" || category === "Array" || category === "Math") {
                    types.push(type.replace('Function', '((value: T, index: number, array: T[]) => boolean)'));
                }
                if (category === "Collection" || category === "Math") {
                    types.push(type.replace('Function', '((value: string, index: number, array: string) => boolean)')); // string
                }
                if (category === "Collection" || category === "Object" || category === "Math") {
                    types.push(type.replace('Function', '((value: any, key: string, colletion: any) => boolean)'));
                }
            }

            if (name === "iteratee") {
                if (paramNames.indexOf("accumulator") > -1) {
                    //accumulator, value, index|key, collection
                    if (category === "Collection" || category === "Array" || category === "Math") {
                        if (genericResultType) {
                            types.push('((accumulator: TResult, value: T, index: number, array: T[]) => ' + (makeMethodReturn(propertyName, name, type, paramNames, genericResultType)) + ')');
                        } else {
                            types.push(type.replace('Function', '((accumulator: TResult, value: T, index: number, array: T[]) => ' + (makeMethodReturn(propertyName, name, type, paramNames, genericResultType)) + ')'));
                        }
                    }
                    if (category === "Collection" || category === "Math") {
                        types.push('((accumulator: TResult, value: string, index: number, array: string) => ' + (makeMethodReturn(propertyName, name, type, paramNames, 'string')) + ')'); // string
                    }
                    if (category === "Collection" || category === "Object" || category === "Math") {
                        if (genericResultType) {
                            types.push('((accumulator: TResult, value: any, key: string, colletion: any) => ' + (makeMethodReturn(propertyName, name, type, paramNames, genericResultType)) + ')');
                        } else {
                            types.push(type.replace('Function', '((accumulator: TResult, value: any, key: string, colletion: any) => ' + (makeMethodReturn(propertyName, name, type, paramNames, genericResultType))) + ')');
                        }
                    }
                } else {
                    if (category === "Collection" || category === "Array" || category === "Math") {
                        if (genericResultType) {
                            types.push('((value: T, index: number, array: T[]) => ' + (makeMethodReturn(propertyName, name, type, paramNames, genericResultType)) + ')');
                        } else {
                            types.push(type.replace('Function', '((value: T, index: number, array: T[]) => ' + (makeMethodReturn(propertyName, name, type, paramNames, genericResultType)) + ')'));
                        }
                    }
                    if (category === "Collection" || category === "Math") {
                        types.push('((value: string, index: number, array: string) => ' + (makeMethodReturn(propertyName, name, type, paramNames, 'string')) + ')'); // string
                    }
                    if (category === "Collection" || category === "Object") {
                        if (genericResultType) {
                            types.push('((value: any, key: string, colletion: any) => ' + (makeMethodReturn(propertyName, name, type, paramNames, genericResultType)) + ')');
                        } else {
                            types.push(type.replace('Function', '((value: any, key: string, colletion: any) => ' + (makeMethodReturn(propertyName, name, type, paramNames, genericResultType)) + ')'));
                        }
                    }
                    if (category === "Math") {
                        if (genericResultType) {
                            types.push('((value: any, key: string, colletion: any) => any)');
                        } else {
                            types.push(type.replace('Function', '((value: any, key: string, colletion: any) => any)'));
                        }
                    }
                }
            }

            if (name === 'customizer') {
                types.push('(objectValue: any, sourceValue: any, key: string, object: Object, source: Object) => TResult');
                //(objectValue, sourceValue, key, object, source)
            }
        }

        if (name === "path" && type === "Array|Function|string") {
            type = "Function|string[]|string";
        }

        if (name === "path" && type === "Array|string") {
            type = "string[]|string";
        }

        if (isObjectParam) {
            type = '{ ';
            if (propertyName === "options") {
            }

            _.each(objectParams, function([t, name, c]: [string, string, string], index: number) {
                var isOptional = _.startsWith(name, '[');
                if (isOptional) {
                    name = _.trim(name.split('=')[0], '[]');
                }

                name = _.last(name.split('.'));


                if (name === "imports") {
                    t = "{ [key: string]: any; }";
                }

                type += `${name}${isOptional ? '?' : ''}: ${t}; `;
            });

            type += '}';
        }

        if ((name === "collection") && type === "Array|Object|string") {
            types.push("T[]", "string", "Object");
        }

        var rest = false;
        if (_.contains(type.trim(), '...')) {
            rest = true;
            type = type.replace('...', '')
            type = _.trim(type, '()');
        }

        if (rest && (ps.length - 1 !== index)) {
            rest = false;
            emulateRestParams = index;
        }

        if (type === '*') {
            type = 'any';
        }

        if (name === "arrays" && type === "Array" && isGeneric({ params, returns })) {
            type = "any[]";
        }

        if ((name === "array") && type === "Array" && isGeneric({ params, returns })) {
            type = "T[]";
        }

        if (type === "Array") {
            type = "any[]";
        }

        if (rest && !_.endsWith(type, "[]")) {
            type = '(' + type + ')[]';
        }

        if (name === "accumulator") {
            type = "TResult";
        }

        if (name === "func") {
            type = "T";
        }

        if (_.contains(type, "|")) {
            var restTypes = type.split('|').map(z => _.trim(z, '.('));
            if (!rest && _.contains(type, '...')) {
                types.push(...restTypes.map((z, i) => {
                    if (z === "Function") {
                        var t = types.shift().split('|')[i];
                        return `${name}${isOptional ? '?' : ''}: ${t}`;
                    } else if (_.endsWith(z, "[]")) {
                        return `${name}${isOptional ? '?' : ''}: ${z}`;
                    } else {
                        return `...${name}: ${z}[]`;
                    }
                }));
                return types;
            } else if (rest) {
                types.push(...restTypes.map(z => {
                    if (_.endsWith(z, "[]")) {
                        return `${name}${isOptional ? '?' : ''}: ${z}`;
                    } else {
                        return `...${name}: ${z}[]`;
                    }
                }))
                return types;
            } else if (_.contains(originalType, "|Object") || _.contains(originalType, "Object|")) {
                // assume the type is object, and the other value can fit in as well.
                if (_.contains(type, '|')) {
                    type = type.split('|').join(' | ').replace("Array", "any[]");
                } else {
                    type = [type].concat(originalType.split('|').filter(z => z !== "Object")).join(' | ');
                }
            }
        }

        if (!types.length)
            types.push(type);

        return types.map(type => `${rest ? '...' : ''}${name}${!rest && isOptional ? '?' : ''}: ${type}`);
    });

    if (_.any(result, z => z.length > 1)) {
        var max = _.max(result, z => z.length).length;

        result.forEach(z => {
            if (z.length < max) {
                for (var i = z.length; i < max; i++) {
                    z.push(z[0]);
                }
            }
        });
    }

    result = _.unzip(result);

    var n = name;
    var genericType = undefined;
    if (!options.isWrapper && !genericResultType && isGeneric({ params, returns })) {
        genericType = "<T>"
    } else if (!options.isWrapper && isGeneric({ params, returns }) && genericResultType) {
        genericType = "<T, " + genericResultType + ">";
    } else if (genericResultType) {
        genericType = "<" + genericResultType + ">";
    }

    var isGenericT = _.startsWith(genericType, "<T");

    let addToRet = function(result: any[][]) {
        if (result.length === 0)
            result.push([]);

        //if (propertyName === 'compact' && options.isWrapper) console.log('compact', result);
        let ret = result.map(p => {
            let r = makeReturn(propertyName, params, returns, genericResultType, p, category, options);

            var localGenericType = undefined;
            if (!isGenericT && r && r.indexOf('TResult') > -1) {
                localGenericType = '<TResult>';

                if (!options.isWrapper && paramNames.indexOf("accumulator") > -1 && _.any(p, z => _.contains(z, 'T[]'))) {
                    localGenericType = '<T, TResult>';
                }
            } else if (r && r.indexOf('T') > -1) {
                if (genericResultType) {
                    localGenericType = "<T, TResult>";
                } else if (!options.isWrapper) {
                    if (propertyName.indexOf('chunk') > -1)
                        console.log(propertyName, name);
                    localGenericType = '<T>';
                }
            }

            if (paramNames.indexOf('func') > -1) {
                localGenericType = "<T extends Function>";
            }

            var parm = replaceObjectInGenericT(genericResultType && isGenericT, p.join(', '));

            return `${n}${localGenericType || genericType || (_.any(p, z => _.contains(z, 'T[]')) && !options.isWrapper && '<T>') || ''}(${parm}): ${r};`;
        });

        if (_.startsWith(genericType, "<T")) {
            if (genericResultType) {
                ret.push(...result.map(p => {
                    let r = makeReturn(propertyName, params, returns, genericResultType, p, category, options);
                    return `${n}<${genericResultType}>(${replaceT(p.join(', ')) }): ${replaceT(r) };`;
                }));
            } else {
                ret.push(...result.map(p => {
                    let r = makeReturn(propertyName, params, returns, genericResultType, p, category, options);
                    return `${n}(${replaceT(p.join(', ')) }): ${replaceT(r) };`
                }));
            }
        }

        return ret;
    }

    if (emulateRestParams !== undefined) {
        var baseResults = result.slice();//.filter(z => _.any(z, x => x.indexOf('...') > -1 && x.indexOf('...') < x.length - 1));

        if (result.filter(z => _.any(z, x => x.indexOf('...') > -1 && x.indexOf('...') < x.length - 1)).length) {
            baseResults = [];

            var modifiedResults = result.slice().reverse();
            _.each(modifiedResults, (res) => {
                var resultIndex = _.findIndex(result, res);
                var index = _.findIndex(res, z => _.contains(z, '|'));
                if (index > -1) {
                    var item = res[index];
                    name = item.split(':')[0];
                    item = item.split(':').slice(1).join(':');
                    result.splice(resultIndex, 1);
                    var items: string[] = item.split('|');
                    if (items) {
                        _.each(items, i => {
                            var insert = res.slice();
                            if (_.startsWith(i, '...')) {
                                insert[index] = name + ': ' + _.trim(i, '.()');
                                baseResults.push(insert);
                            } else {
                                insert[index] = name + ': ' + i;
                                result.push(insert);
                            }
                        })
                    }
                }
            })
        }

        if (baseResults.length) {
            for (var i = 1; i <= 10; i++) {
                result.push(..._.map(baseResults, params => {
                    var item = params[emulateRestParams];
                    var items: string[] = [];
                    for (let id = 0; id < i; id++) {
                        items.push(`item${id + 1}: ` + item.split(':').slice(1).join(':'));
                    }

                    var slice = params.slice();
                    slice.splice(emulateRestParams, 0, ...items);
                    return slice;
                }))
            }
        }
    }

    return addToRet(result);
}

function makeProperty({name, type}: { name: string; type: string; }) {
    if (name === "accumulator")
        type = "TResult";
    if (name === "func")
        type = "T";
    return [`${name}: ${type};`];
}


var lodashStaticEntries = staticEntries
    .filter(z => z.isFunction)
    .filter(z => z.member === "_")
    .filter(z => z.name !== "chain")
    .value()

function getStaticMethods() {
    return _.flatten<string>(_.map(lodashStaticEntries, entry => {
        entry = _.cloneDeep(entry);
        var lines = [];
        lines.push('interface LoDashStatic {');
        lines.push(entry.comment);
        if (entry.isFunction) {
            lines.push(..._.flatten(makeCall(entry, { isWrapper: false })));
        } else {
            lines.push(..._.flatten(makeProperty(entry)))
        }

        if (entry.aliases) {
            var oldName = entry.name;
            _.each(entry.aliases, alias => {
                entry.name = alias;
                lines.push(entry.comment);
                if (entry.isFunction) {
                    lines.push(..._.flatten(makeCall(entry, { isWrapper: false })));
                } else {
                    lines.push(..._.flatten(makeProperty(entry)))
                }
            });
            entry.name = oldName;
        }
        lines.push('}');

        return lines;
    }));
}

var supportInterfaces = staticEntries
    .filter(z => z.member !== "_")
// not documenting because this just a dictionary for the template settings
    .filter(z => z.member !== "_.templateSettings.imports")
    .groupBy(z => z.member)
    .map((members, key) => {
        var name = key.substr(2);
        var type = _.capitalize(key.substr(2));
        var comment = entries.filter(z => z.name === name).first().comment;

        var lines = [`interface ${type} {`];
        _.each(members, (member: any) => {
            lines.push(indent(member.comment, 4));
            if (member.name === "imports") {
                member.type = "{ [key: string]: any; }";
            }
            lines.push(indent(<any>makeProperty(member), 4))
        });

        lines.push('}');
        lines.push('');
        var text = indent(lines, 0, false);
        return { name, type, result: [indent(comment, 0), text] };
    }).value();

var wrappers = [];
var wrappedMethods = nonChainableMethods.concat(chainableMethods);
var wrappedEntries = staticEntries.filter(z => _.any(wrappedMethods, x => x === z.name));
var exclude = {
    "Array": ["Object", "Number", "String", "Function"],
    "Object": ["Array", "Number", "String", "Function"],
    "Any": ["Function"],
    "ChainArray": ["Object", "Number", "String", "Function"],
    "ChainObject": ["Array", "Number", "String", "Function"],
    "ChainAny": ["Function"]
}
function getWrapperMethods(wrapperType: string) {
    var wrapperName = `LoDash${wrapperType}Wrapper<T>`.replace('Any', '');
    var lines = [`interface ${wrapperName} {`];
    var isChain = _.contains(wrapperName, 'Chain');

    lines.push(...[
        isChain ? `   chain(): ${`LoDash${wrapperType}Wrapper<T>`.replace('Any', '') };` : `    chain(): ${`LoDashChain${wrapperType}Wrapper<T>`.replace('Any', '') };`,
        //`${indent(uniq.comment, 4) }`,
        `    uniq(isSorted?: boolean, thisArg?: any): ${wrapperName};`,
        `    uniq(iteratee?: ((value: T, index: number, array: T[]) => T)|Object|string, thisArg?: any): ${wrapperName};`,
        //`${indent(uniq.comment, 4) }`,
        `    unique(isSorted?: boolean, thisArg?: any): ${wrapperName};`,
        `    unique(iteratee?: ((value: T, index: number, array: T[]) => T)|Object|string, thisArg?: any): ${wrapperName};`,
    ]);

    var excludes = exclude[wrapperType];

    var filteredEntries = wrappedEntries
        .filter(z => !_.any(excludes, x => x === z.category))
        .value();
    lines.push('}');

    _.each(filteredEntries, entry => {
        entry = _.cloneDeep(entry);
        var lines = [`interface ${wrapperName} {`];
        var comments = entry.comment.split(os.EOL);
        comments.splice(_.findIndex(comments, z => z.indexOf('@param') > -1), 1);
        //lines.push(indent(comments, 4));

        if (!_.contains(['intersection', 'union', 'xor', 'zip', 'unzip'], entry.name))
            entry.params.shift();

        if (entry.isFunction) {
            var options = { isWrapper: true };
            if (!_.any(nonChainableMethods, z => z === entry.name) || _.contains(wrapperName, "Chain"))
                options = { isWrapper: true, wrapper: wrapperName, category: wrapperType };
            lines.push(indent(<any>makeCall(entry, <any>options), 4));
        }

        if (entry.aliases) {
            var oldName = entry.name;
            _.each(entry.aliases, alias => {
                entry.name = alias;
                var comments = entry.comment.split(os.EOL);
                comments.splice(_.findIndex(comments, z => z.indexOf('@param') > -1), 1);
                //lines.push(indent(comments, 4));

                if (entry.isFunction) {
                    var options = { isWrapper: true };
                    if (!_.any(nonChainableMethods, z => z === entry.name) || _.contains(wrapperName, "Chain"))
                        options = { isWrapper: true, wrapper: wrapperName, category: wrapperType };
                    lines.push(indent(<any>makeCall(entry, <any>options), 4));
                }
            });
            entry.name = oldName;
        }
        lines.push('}');
    });

    lines.push('');
    var text = indent(lines, 0, false);
    return { wrapperName, result: [text] };
}

wrappers = _.keys(exclude).map(x => getWrapperMethods(x));

var makeArgReplacementMethods = function(methods: string[], name: string, middleArg: string, returns: boolean) {
    for (var size = 0; size <= max; size++) {
        var inbound = _.range(1, size - 1).map(z => `T${z}`).join(', ');
        var funcs = _.range(1, size - 1).map(z => `arg${z}: T${z}`).join(', ');

        for (var outSize = 1; outSize < size; outSize++) {
            var partials = _.range(1, outSize).map(z => `arg${outSize - z}: T${outSize - z}`).reverse().join(', ');
            var outbound = _.range(1, size - outSize).map(z => `arg${size - z - 1}: T${size - z - 1}`).reverse().join(', ');
            var method = `${name}${inbound.length || returns ? '<' : ''}${inbound.length ? inbound + (returns && ', ' || '') : ''}${returns && 'TResult' || ''}${inbound.length || returns ? '>' : ''}(func: (${funcs}) => ${returns && 'TResult' || 'void'}, ${middleArg ? middleArg : ''}${partials.length ? (returns && ', ' || '') + partials : ''})`
            var endReturn = `: (${outbound}) => ${returns && 'TResult' || 'void'};`
            if (returns) {
                methods.push(method + endReturn);
            } else {
                if (outSize === size - 1)
                    methods.push(method.replace(', )', ')') + ': void;')
            }
        }
    }
}

var max = 12;
var bindMethods = (function() {
    var methods = [];
    methods.push('bind<T extends Function, TResult extends Function>(func: T, thisArg: any, ...partials: any[]): TResult;');

    makeArgReplacementMethods(methods, 'bind', 'thisArg: any', true);
    return methods;
})();
var deferMethods = (function() {
    var methods = [];
    methods.push('defer<T extends Function>(func: T, ...args: (any)[]): void;');

    makeArgReplacementMethods(methods, 'defer', '', false);
    return methods;
})();
var delayMethods = (function() {
    var methods = [];
    methods.push('delay<T extends Function>(func: T, wait: number, ...args: (any)[]): void;');

    makeArgReplacementMethods(methods, 'delay', 'wait: number, ', false);
    return methods;
})();

var flowMethods = (function() {

});
// flowRight
// backflow
// compose
// partial
// partialRight
// restParam
// wrap
// method
// methodOf

//defer<T extends Function>(func: T, ...args: (any)[]): T;
//delay<T extends Function>(func: T, wait: number, ...args: (any)[]): T;

// Array wrapper
// Number[] wrapper
// Object wrapper
// String Wrapper
/*
var interface = `
interface LoDashStatic {
${indent(root.comment, 4) }
    (value: number): LoDashWrapper<number>;
    (value: string): LoDashWrapper<string>;
    (value: boolean): LoDashWrapper<boolean>;
    <T>(value: Array<T>): LoDashArrayWrapper<T>;
    <T extends {}>(value: T): LoDashObjectWrapper<T>;
    (value: any): LoDashWrapper<any>;
}
interface LoDashStatic {
${indent(chain.comment, 4) }
    chain(value: number): LoDashChainWrapper<number>;
    chain(value: string): LoDashChainWrapper<string>;
    chain(value: boolean): LoDashChainWrapper<boolean>;
    chain<T>(value: Array<T>): LoDashChainArrayWrapper<T>;
    chain<T extends {}>(value: T): LoDashChainObjectWrapper<T>;
    chain(value: any): LoDashChainWrapper<any>;
}
interface LoDashStatic {
${indent(inRange.comment, 4) }
    inRange(n: number, end: number): boolean;
    inRange(n: number, start: number, end: number): boolean;

${indent(mixin.comment, 4) }
    mixin(source: Object): Object;
    mixin(object: Object, source: Object, options?: { chain?: boolean; }): Object;
    mixin(object: Function, source: Object, options?: { chain?: boolean; }): Function;

${indent(range.comment, 4) }
    range<T>(end: number): T[];
    range<T>(start: number, end: number, step?: number): T[];

${indent(random.comment, 4) }
    random(max: number, floating?: boolean): number;
    random(min: number, max:number, floating?: boolean): number;
}
interface LoDashStatic {
${indent(constant.comment, 4) }
    constant<T>(value: T): () => T;

${indent(identity.comment, 4) }
    identity<T>(value: T, ...args: any[]): () => T;

${indent(matches.comment, 4) }
    matches(source: Object): (object: Object) => boolean;

${indent(matchesProperty.comment, 4) }
    matchesProperty(path: string[]|string, srcValue: any): (object: Object) => boolean;

${indent(property.comment, 4) }
    property<TResult>(path: string[]|string): (object: Object) => TResult;

${indent(propertyOf.comment, 4) }
    propertyOf<TResult>(object: Object): (path: string) => TResult;

${indent(times.comment, 4) }
    times<TResult>(n: number, iteratee?: (index: number) => TResult, thisArg?: any): TResult[];
    times(n: number, iteratee?: (index: number) => any, thisArg?: any): any[];

${indent(noop.comment, 4) }
    noop(): any;
}
interface LoDashStatic {
${indent(uniq.comment, 4) }
    uniq<T>(array: T[], isSorted?: boolean, thisArg?: any): T[];
    uniq<T>(array: T[], iteratee?: ((value: T, index: number, array: T[]) => T)|Object|string, thisArg?: any): T[];
    uniq(array: any[], isSorted?: boolean, thisArg?: any): any[];
    uniq(array: any[], iteratee?: ((value: any, index: number, array: any[]) => any)|Object|string, thisArg?: any): any[];

${indent(uniq.comment, 4) }
    unique<T>(array: T[], isSorted?: boolean, thisArg?: any): T[];
    unique<T>(array: T[], iteratee?: ((value: T, index: number, array: T[]) => T)|Object|string, thisArg?: any): T[];
    unique(array: any[], isSorted?: boolean, thisArg?: any): any[];
    unique(array: any[], iteratee?: ((value: any, index: number, array: any[]) => any)|Object|string, thisArg?: any): any[];

${indent(isEqual.comment, 4) }
    isEqual(value: any, other: any, customizer?: (value: any, other: any, key: string | number) => boolean, thisArg?: any): boolean;
${indent(isEqual.comment, 4) }
    eq(value: any, other: any, customizer?: (value: any, other: any, key: string | number) => boolean, thisArg?: any): boolean;

${indent(isMatch.comment, 4) }
    isMatch(object: Object, source: Object, customizer?: (value: any, other: any, key: string | number) => boolean, thisArg?: any): boolean;
}
${indent(getStaticMethods(), 4) }
interface LoDashStatic {
${indent(bind.comment, 4) }
${indent(bindMethods, 4) }

${indent(defer.comment, 4) }
${indent(deferMethods, 4) }

${indent(defer.comment, 4) }
${indent(delayMethods, 4) }
}
interface LoDashStatic {
${indent(supportInterfaces.map(z => `${z.name}: ${z.type};`), 4) }
${indent([version.comment], 4) }
    VERSION: string;
}`
*/
