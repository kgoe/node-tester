var assert = require('assert');

if ( typeof describe == 'function') {

  describe('Array', function() {
    describe('#indexOf()', function() {
      it('should return -1 when the value is not present', function() {
        assert.equal([1,2,3].indexOf(4), -1);
      });
    });
  });
  
  
  describe('js core constructor properties', function() {
    
    
    it('js environment', function() {
      assert.equal(typeof arguments,'object');
      assert.equal(typeof this, 'object');
      assert.equal(typeof Object, 'function');
      assert.equal(typeof Function, 'function');
      assert.equal(typeof Number, 'function');
      assert.equal(typeof String, 'function');
      assert.equal(typeof Symbol, 'function');
      assert.equal(typeof Boolean, 'function');
      assert.equal(typeof Array, 'function');
      assert.equal(typeof Date, 'function');
      assert.equal(typeof Math, 'object');
      assert.equal(typeof JSON, 'object');
      if ( typeof global !== 'undefined') {
        // node js
        assert.equal(typeof global, 'object');
      } else if ( typeof window !== 'undefined' ) {
        // browser
        assert.equal(typeof widnow, 'object');
      } else {
        assert.equal(true, false);
      }
    });
    

    it('js core literals', function() {
      assert.equal(typeof function() {}, 'function');
      assert.equal(typeof {}, 'object');
      assert.equal(typeof [], 'object');
      assert.equal(typeof 5, 'number');
      assert.equal(typeof true, 'boolean');
      assert.equal(typeof false, 'boolean');
      assert.equal(typeof 'test', 'string');
      assert.equal(typeof /i/g, 'object');
      assert.equal(typeof Symbol('s'), 'symbol');
      assert.equal(typeof Error('err'), 'object');
      assert.equal(typeof undefined, 'undefined');
      assert.equal(typeof Infinity, 'number');
      assert.equal(typeof NaN, 'number');
      assert.equal(typeof null, 'object');
      assert.equal(typeof globalThis, 'object'); // new property
    });
    

    it('js core constructors', function() {
      assert.equal(typeof Object, 'function');
      assert.equal(typeof Function, 'function');
      assert.equal(typeof Array, 'function');
      assert.equal(typeof Number, 'function');
      assert.equal(typeof Boolean, 'function');
      assert.equal(typeof String, 'function');
      assert.equal(typeof RegExp, 'function');
      assert.equal(typeof Symbol, 'function');
      assert.equal(typeof Error, 'function');
      assert.equal(typeof JSON, 'object');
      assert.equal(typeof Math, 'object');
      assert.equal(typeof Map, 'function');
      assert.equal(typeof Set, 'function');
      assert.equal(typeof WeakMap, 'function');
      assert.equal(typeof WeakSet, 'function');
      
      assert.equal(typeof EvalError, 'function');
      assert.equal(typeof InternalError, 'function'); // Internal
      assert.equal(typeof RangeError, 'function');
      assert.equal(typeof ReferenceError, 'function');
      assert.equal(typeof SyntaxError, 'function');
      assert.equal(typeof TypeError, 'function');
      assert.equal(typeof URIError, 'function');
      
      assert.equal(typeof BigInt, 'function');
      assert.equal(typeof Math, 'object');
      assert.equal(typeof Date, 'function');

      assert.equal(typeof Array, 'function');
      assert.equal(typeof Int8Array, 'function');
      assert.equal(typeof Uint8Array, 'function');
      assert.equal(typeof Uint8ClampedArray, 'function');
      assert.equal(typeof Int16Array, 'function');
      assert.equal(typeof Uint16Array, 'function');
      assert.equal(typeof Int32Array, 'function');
      assert.equal(typeof Uint32Array, 'function');
      assert.equal(typeof Float32Array, 'function');
      assert.equal(typeof Float64Array, 'function');
      assert.equal(typeof BigInt64Array, 'function');
      assert.equal(typeof BigUint64Array, 'function');
      
      assert.equal(typeof Map, 'function');
      assert.equal(typeof Set, 'function');
      assert.equal(typeof WeakMap, 'function');
      assert.equal(typeof WeakSet, 'function');
      
      assert.equal(typeof ArrayBuffer, 'function');
      assert.equal(typeof SharedArrayBuffer, 'function');
      assert.equal(typeof Atomics, 'function');
      assert.equal(typeof DataView, 'function');
      assert.equal(typeof JSON, 'object');

      assert.equal(typeof Reflect, 'object');
      assert.equal(typeof Proxy, 'object');
      
      assert.equal(typeof Intl, 'object');
      assert.equal(typeof WebAssembly, 'object');
      
      assert.equal(this.constructor.toString(), 'function Context() {}');
      assert.equal(Object.constructor.toString(), 'function Function() { [native code] }');
      assert.equal(Function.constructor.toString(), 'function Function() { [native code] }');
      assert.equal(Array.constructor.toString(), 'function Function() { [native code] }');
      assert.equal(Number.constructor.toString(), 'function Function() { [native code] }');
      assert.equal(Boolean.constructor.toString(), 'function Function() { [native code] }');
      assert.equal(String.constructor.toString(), 'function Function() { [native code] }');
      assert.equal(RegExp.constructor.toString(), 'function Function() { [native code] }');
      assert.equal(Symbol.constructor.toString(), 'function Function() { [native code] }');
      assert.equal(Error.constructor.toString(), 'function Function() { [native code] }');
      assert.equal(JSON.constructor.toString(), 'function Object() { [native code] }');
      assert.equal(Math.constructor.toString(), 'function Object() { [native code] }');
      assert.equal(Map.constructor.toString(), 'function Function() { [native code] }');
      assert.equal(Set.constructor.toString(), 'function Function() { [native code] }');
      assert.equal(WeakMap.constructor.toString(), 'function Function() { [native code] }');
      assert.equal(WeakSet.constructor.toString(), 'function Function() { [native code] }');

      assert.equal(function() {}.constructor.toString(), 'function Function() { [native code] }');
      assert.equal(function() {}.prototype.toString(), '[object Object]');
      assert.equal(function() {}.__proto__.toString(), 'function () { [native code] }');

      assert.equal(Object.prototype.toString(), '[object Object]');
      assert.equal(Function.prototype.toString(), 'function () { [native code] }');
      assert.equal(Array.prototype.toString(), '');
      assert.equal(Number.prototype.toString(), '0');
      assert.equal(Boolean.prototype.toString(), 'false');
      assert.equal(String.prototype.toString(), '');
      assert.equal(RegExp.prototype.toString(), '/(?:)/');
      assert.equal(Symbol('s').toString(), 'Symbol(s)');
      assert.equal(Error.prototype.toString(), 'Error');

      assert.equal(Object.__proto__.toString(), 'function () { [native code] }');
      assert.equal(Function.__proto__.toString(), 'function () { [native code] }');
      assert.equal(Array.__proto__.toString(), 'function () { [native code] }');
      assert.equal(Number.__proto__.toString(), 'function () { [native code] }');
      assert.equal(Boolean.__proto__.toString(), 'function () { [native code] }');
      assert.equal(String.__proto__.toString(), 'function () { [native code] }');
      assert.equal(RegExp.__proto__.toString(), 'function () { [native code] }');
      assert.equal(Symbol.__proto__.toString(), 'function () { [native code] }');
      assert.equal(Error.__proto__.toString(), 'function () { [native code] }');
      assert.equal(JSON.__proto__.toString(), '[object Object]');
      assert.equal(Math.__proto__.toString(), '[object Object]');
    });
  });
  
  
  it('js core functions', function() {
    assert.equal(typeof eval, 'function');
    assert.equal(typeof uneval, 'function');
    assert.equal(typeof isFinite, 'function');
    assert.equal(typeof isNaN, 'function');
    assert.equal(typeof parseFloat, 'function');
    assert.equal(typeof parseInt, 'function');
    assert.equal(typeof decodeURI, 'function');
    assert.equal(typeof decodeURIComponent, 'function');
    assert.equal(typeof encodeURI, 'function');
    assert.equal(typeof encodeURIComponent, 'function');
    assert.equal(typeof escape, 'function');
    assert.equal(typeof unescape, 'function');
  });

  // before
  // after
  // beforeEach
  // afterEach
  // run
  // context
  // describe
  // xcontext
  // xit

  /*
  after('after', function() {
    // console.log(context);
    // console.log(run);
    console.log('after test');
  });
  */

} else {
  log('!!! no mocha running !!!');
}
