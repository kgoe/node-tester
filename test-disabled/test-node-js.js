var assert = require('assert');
//var async_hooks = require('async_hooks'); // not available node 6.x
var buffer = require('buffer');
var child_process = require('child_process');
var cluster = require('cluster');
var crypto = require('crypto');
var dgram = require('dgram');
var dns = require('dns');
var domain = require('domain');
var events = require('events');
var fs = require('fs');
var http = require('http');
var https = require('https');
var net = require('net');
var os = require('os');
var path = require('path');
//var perf_hooks = require('perf_hooks'); // not available node 6.x
var punycode = require('punycode');
var querystring = require('querystring');
var readline = require('readline');
var repl = require('repl');
var stream = require('stream');
var string_decoder = require('string_decoder');
var tls = require('tls');
var tty = require('tty');
var url = require('url');
var util = require('util');
var v8 = require('v8');
var vm = require('vm');
var zlib = require('zlib');

//console.log(Object.getOwnPropertyNames(global));

describe('Node.JS Core Global', function() {
  it('escape', function() {
    assert.equal(typeof escape, 'function');
  });
  it('Object', function() {
    assert.equal(typeof Object, 'function');
  });
  it('Proxy', function() {
    assert.equal(typeof Proxy, 'function');
  });
  it('SyntaxError', function() {
    assert.equal(typeof SyntaxError, 'function');
  });
  it('global', function() {
    assert.equal(typeof global, 'object');
  });
  it('GLOBAL', function() {
    assert.equal(typeof GLOBAL, 'object');
  });
  it('root', function() {
    assert.equal(typeof root, 'object');
  });
  it('Math', function() {
    assert.equal(typeof Math, 'object');
  });
  it('Intl', function() {
    assert.equal(typeof Intl, 'object');
  });
  it('JSON', function() {
    assert.equal(typeof JSON, 'object');
  });
  it('console', function() {
    assert.equal(typeof console, 'object');
  });
  it('process', function() {
    assert.equal(typeof process, 'object');
  });
  it('require', function() {
    assert.equal(typeof require, 'function');
  });
  it('module', function() {
    assert.equal(typeof module, 'object');
  });
});

/*
[ 'Intl',
  'escape',
  'Object',
  'Proxy',
  'SyntaxError',
  'NaN',
  'Symbol',
  'Int16Array',
  'Uint8ClampedArray',
  'undefined',
  'parseInt',
  'WeakSet',
  'isNaN',
  'decodeURI',
  'decodeURIComponent',
  'WeakMap',
  'encodeURIComponent',
  'ReferenceError',
  'Float32Array',
  'Function',
  'Array',
  'RegExp',
  'Map',
  'RangeError',
  'JSON',
  'encodeURI',
  'Uint8Array',
  'String',
  'ArrayBuffer',
  'Boolean',
  'Promise',
  'URIError',
  'Date',
  'Float64Array',
  'Number',
  'Uint16Array',
  'parseFloat',
  'TypeError',
  'DataView',
  'EvalError',
  'unescape',
  'Uint32Array',
  'eval',
  'isFinite',
  'Int32Array',
  'Error',
  'Reflect',
  'Int8Array',
  'Set',
  'Infinity',
  'Math',
  'DTRACE_NET_SERVER_CONNECTION',
  'DTRACE_NET_STREAM_END',
  'DTRACE_HTTP_SERVER_REQUEST',
  'DTRACE_HTTP_SERVER_RESPONSE',
  'DTRACE_HTTP_CLIENT_REQUEST',
  'DTRACE_HTTP_CLIENT_RESPONSE',
  'COUNTER_NET_SERVER_CONNECTION',
  'COUNTER_NET_SERVER_CONNECTION_CLOSE',
  'COUNTER_HTTP_SERVER_REQUEST',
  'COUNTER_HTTP_SERVER_RESPONSE',
  'COUNTER_HTTP_CLIENT_REQUEST',
  'COUNTER_HTTP_CLIENT_RESPONSE',
  'global',
  'process',
  'GLOBAL',
  'root',
  'Buffer',
  'clearImmediate',
  'clearInterval',
  'clearTimeout',
  'setImmediate',
  'setInterval',
  'setTimeout',
  'console',
  'before',
  'after',
  'beforeEach',
  'afterEach',
  'run',
  'context',
  'describe',
  'xcontext',
  'xdescribe',
  'specify',
  'it',
  'xspecify',
  'xit' ]
  */

describe('Node.JS Core Modules', function() {
  it('assert', function() {
    assert.equal(typeof assert, 'function');
  });
  it.skip('async_hooks', function() {
    assert.equal(typeof async_hooks, 'object');
  });
  it('buffer', function() {
    assert.equal(typeof buffer, 'object');
  });
  it('child_process', function() {
    assert.equal(typeof child_process, 'object');
  });
  it('cluster', function() {
    assert.equal(typeof cluster, 'object');
  });
  it('crypto', function() {
    assert.equal(typeof crypto, 'object');
  });
  it('dgram', function() {
    assert.equal(typeof dgram, 'object');
  });
  it('dns', function() {
    assert.equal(typeof dns, 'object');
  });
  it('domain', function() {
    assert.equal(typeof domain, 'object');
  });
  it('events', function() {
    assert.equal(typeof events, 'function');
  });
  it('fs', function() {
    assert.equal(typeof fs, 'object');
  });
  it('http', function() {
    assert.equal(typeof http, 'object');
  });
  it('https', function() {
    assert.equal(typeof https, 'object');
  });
  it('net', function() {
    assert.equal(typeof net, 'object');
  });
  it('os', function() {
    assert.equal(typeof os, 'object');
  });
  it('path', function() {
    assert.equal(typeof path, 'object');
  });  
  it.skip('perf_hooks', function() {
    assert.equal(typeof perf_hooks, 'object');
  });
  it('punycode', function() {
    assert.equal(typeof punycode, 'object');
  });
  it('querystring', function() {
    assert.equal(typeof querystring, 'object');
  });
  it('readline', function() {
    assert.equal(typeof readline, 'object');
  });
  it('repl', function() {
    assert.equal(typeof repl, 'object');
  });
  it('stream', function() {
    assert.equal(typeof stream, 'function');
  });
  it('string_decoder', function() {
    assert.equal(typeof string_decoder, 'object');
  });
  it('tls', function() {
    assert.equal(typeof tls, 'object');
  });
  it('tty', function() {
    assert.equal(typeof tty, 'object');
  });
  it('url', function() {
    assert.equal(typeof url, 'object');
  });
  it('util', function() {
    assert.equal(typeof util, 'object');
  });
  it('v8', function() {
    assert.equal(typeof v8, 'object');
  });
  it('vm', function() {
    assert.equal(typeof vm, 'object');
  });
  it('zlib', function() {
    assert.equal(typeof zlib, 'object');
  });
});
