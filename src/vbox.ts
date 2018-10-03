import vm = require('vm')

import builtInModules = require('@fibjs/builtin-modules')

const defaultModules = {}
if (!builtInModules.includes('https')) {
    defaultModules['https'] = require('http')
}
const vbox = new vm.SandBox(
    {
        zlib: require('zlib'),
        util: require('util'),
        tty: require('tty'),
        stream: require('stream'),
        assert: require('assert'),
        url: require('url'),
        http: require('http'),
        https: require('http')
    }
)

export = vbox
