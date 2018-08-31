var nodeArray =
[
  'Object',
  'Function',
  'Array',
  'Number',
  'parseFloat',
  'parseInt',
  'Infinity',
  'NaN',
  'undefined',
  'Boolean',
  'String',
  'Symbol',
  'Date',
  'Promise',
  'RegExp',
  'Error',
  'EvalError',
  'RangeError',
  'ReferenceError',
  'SyntaxError',
  'TypeError',
  'URIError',
  'JSON',
  'Math',
  'console',
  'Intl',
  'ArrayBuffer',
  'Uint8Array',
  'Int8Array',
  'Uint16Array',
  'Int16Array',
  'Uint32Array',
  'Int32Array',
  'Float32Array',
  'Float64Array',
  'Uint8ClampedArray',
  'DataView',
  'Map',
  'Set',
  'WeakMap',
  'WeakSet',
  'Proxy',
  'Reflect',
  'decodeURI',
  'decodeURIComponent',
  'encodeURI',
  'encodeURIComponent',
  'escape',
  'unescape',
  'eval',
  'isFinite',
  'isNaN',
  'SharedArrayBuffer',
  'Atomics',
  'WebAssembly',
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
  'setTimeout'
];

var mochaProperties = 
[
  'before',     // function
  'after',      // function
  'beforeEach', // function
  'afterEach',  // function
  'run',        // undefined
  'context',    // function
  'describe',   // function
  'xcontext',   // function
  'xdescribe',  // function
  'specify',    // function
  'it',         // function
  'xspecify',   // function
  'xit'         // function
];

nodeArray.map(function(item){
  console.log(item,typeof global[item]);
});

mochaProperties.map(function(item){
  console.log(item,typeof global[item]);
});