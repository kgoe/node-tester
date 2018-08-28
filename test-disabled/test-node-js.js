var assert = require('assert');
var async_hooks = require('async_hooks');
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
var perf_hooks = require('perf_hooks');
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

describe('Node.JS Core', function() {
  it('assert', function() {
      assert.equal(typeof assert, 'object');
  });
  it('async_hooks', function() {
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
});
