/*
    aliases: 
    category: String
    isCtor: false
    isFunction: true
    isLicense: false
    isPlugin: false
    isPrivate: false
    isStatic: true
    member: _
    name: template
    params: 
        (0) [string='']: string
        (1) [options]: Object
        (2) [options.escape]: RegExp
        (3) [options.evaluate]: RegExp
        (4) [options.imports]: Object
        (5) [options.interpolate]: RegExp
        (6) [options.sourceURL]: string
        (7) [options.variable]: string
    returns: Function
    type: Function
    comment: 
        Creates a compiled template function that can interpolate data properties
        in "interpolate" delimiters, HTML-escape interpolated data properties in
        "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
        properties may be accessed as free variables in the template. If a setting
        object is provided it takes precedence over `_.templateSettings` values.
        
        **Note:** In the development build `_.template` utilizes
        [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
        for easier debugging.
        
        For more information on precompiling templates see
        [lodash's custom builds documentation](https://lodash.com/custom-builds).
        
        For more information on Chrome extension sandboxes see
        [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
        
        @static
        @memberOf _
        @category String
        @param {string} [string=''] The template string.
        @param {Object} [options] The options object.
        @param {RegExp} [options.escape] The HTML "escape" delimiter.
        @param {RegExp} [options.evaluate] The "evaluate" delimiter.
        @param {Object} [options.imports] An object to import into the template as free variables.
        @param {RegExp} [options.interpolate] The "interpolate" delimiter.
        @param {string} [options.sourceURL] The sourceURL of the template's compiled source.
        @param {string} [options.variable] The data object variable name.
        @param- {Object} [otherOptions] Enables the legacy `options` param signature.
        @returns {Function} Returns the compiled template function.
        @example
        
        // using the "interpolate" delimiter to create a compiled template
        var compiled = _.template('hello <%= user %>!');
        compiled({ 'user': 'fred' });
        // => 'hello fred!'
        
        // using the HTML "escape" delimiter to escape data property values
        var compiled = _.template('<b><%- value %></b>');
        compiled({ 'value': '<script>' });
        // => '<b>&lt;script&gt;</b>'
        
        // using the "evaluate" delimiter to execute JavaScript and generate HTML
        var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
        compiled({ 'users': ['fred', 'barney'] });
        // => '<li>fred</li><li>barney</li>'
        
        // using the internal `print` function in "evaluate" delimiters
        var compiled = _.template('<% print("hello " + user); %>!');
        compiled({ 'user': 'barney' });
        // => 'hello barney!'
        
        // using the ES delimiter as an alternative to the default "interpolate" delimiter
        var compiled = _.template('hello ${ user }!');
        compiled({ 'user': 'pebbles' });
        // => 'hello pebbles!'
        
        // using custom template delimiters
        _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
        var compiled = _.template('hello {{ user }}!');
        compiled({ 'user': 'mustache' });
        // => 'hello mustache!'
        
        // using backslashes to treat delimiters as plain text
        var compiled = _.template('<%= "\\<%- value %\\>" %>');
        compiled({ 'value': 'ignored' });
        // => '<%- value %>'
        
        // using the `imports` option to import `jQuery` as `jq`
        var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
        var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
        compiled({ 'users': ['fred', 'barney'] });
        // => '<li>fred</li><li>barney</li>'
        
        // using the `sourceURL` option to specify a custom sourceURL for the template
        var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
        compiled(data);
        // => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector
        
        // using the `variable` option to ensure a with-statement isn't used in the compiled template
        var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
        compiled.source;
        // => function(data) {
        //   var __t, __p = '';
        //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
        //   return __p;
        // }
        
        // using the `source` property to inline compiled templates for meaningful
        // line numbers in error messages and a stack trace
        fs.writeFileSync(path.join(cwd, 'jst.js'), '\
        var JST = {\
        "main": ' + _.template(mainText).source + '\
        };\
        ');
    lang: js
***/
/// <reference path="../Chain/_.d.ts"/>
