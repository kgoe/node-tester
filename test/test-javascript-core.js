var assert = require('assert');

describe('JavaScript Core', function() {
    describe('Value Properties', function() {
        it('Infinity', function() {
            assert.equal(typeof Infinity, 'number');
        });
        it('NaN', function() {
            assert.equal(typeof Infinity, 'number');
        });
        it('undefined', function() {
            assert.equal(typeof undefined, 'undefined');
        });
        it('null', function() {
            assert.equal(typeof null, 'object');
        });
        it('{}', function() {
            assert.equal(typeof {}, 'object');
        });
        it('[]', function() {
            assert.equal(typeof [], 'object');
        });
        it('function(){}', function() {
            assert.equal(typeof function(){}, 'function');
        });
    });
    describe('Function Properties', function() {
        it('function(){}', function() {
            assert.equal(typeof function(){}, 'function');
        });
        it('eval', function() {
            assert.equal(typeof eval, 'function');
        });
        it.skip('uneval', function() {
            assert.equal(typeof uneval, 'function');
        });
        it('isFinite', function() {
            assert.equal(typeof isFinite, 'function');
        });
        it('isNaN', function() {
            assert.equal(typeof isNaN, 'function');
        });
        it('parseFloat', function() {
            assert.equal(typeof parseFloat, 'function');
        });
        it('parseInt', function() {
            assert.equal(typeof parseInt, 'function');
        });
        it('decodeURI', function() {
            assert.equal(typeof decodeURI, 'function');
        });
        it('decodeURIComponent', function() {
            assert.equal(typeof decodeURIComponent, 'function');
        });
        it('encodeURI', function() {
            assert.equal(typeof encodeURI, 'function');
        });
        it('encodeURIComponent', function() {
            assert.equal(typeof encodeURIComponent, 'function');
        });
        it('escape', function() {
            assert.equal(typeof escape, 'function');
        });
        it('unescape', function() {
            assert.equal(typeof unescape, 'function');
        });
        it('clearImmediate', function() {
            assert.equal(typeof clearImmediate, 'function');
        });
        it('clearInterval', function() {
            assert.equal(typeof clearInterval, 'function');
        });
        it('clearTimeout', function() {
            assert.equal(typeof clearTimeout, 'function');
        });
        it('setImmediate', function() {
            assert.equal(typeof setImmediate, 'function');
        });
        it('setInterval', function() {
            assert.equal(typeof setInterval, 'function');
        });
        it('setTimeout', function() {
            assert.equal(typeof setTimeout, 'function');
        });
    });
    describe('Fundamental Constructors', function() {
        it('Object', function() {
            assert.equal(typeof Object, 'function');
        });
        it('Function', function() {
            assert.equal(typeof Function, 'function');
        });
        it('Boolean', function() {
            assert.equal(typeof Boolean, 'function');
        });
        it('Number', function() {
            assert.equal(typeof Number, 'function');
        });
        it('Symbol', function() {
            assert.equal(typeof Symbol, 'function');
        });
        it('String', function() {
            assert.equal(typeof String, 'function');
        });
        it('Array', function() {
            assert.equal(typeof Array, 'function');
        });
        it('Error', function() {
            assert.equal(typeof Error, 'function');
        });
        it('EvalError', function() {
            assert.equal(typeof EvalError, 'function');
        });
        it.skip('InternalError', function() {
            assert.equal(typeof InternalError, 'function');
        });
        it('RangeError', function() {
            assert.equal(typeof RangeError, 'function');
        });
        it('ReferenceError', function() {
            assert.equal(typeof ReferenceError, 'function');
        });
        it('SyntaxError', function() {
            assert.equal(typeof SyntaxError, 'function');
        });
        it('TypeError', function() {
            assert.equal(typeof TypeError, 'function');
        });
        it('URIError', function() {
            assert.equal(typeof URIError, 'function');
        });
    });
    describe('Numbers and Dates', function() {
        it('Number', function() {
            assert.equal(typeof Number, 'function');
        });
        it('Math', function() {
            assert.equal(typeof Math, 'object');
        });
        it('Date', function() {
            assert.equal(typeof Date, 'function');
        });
    });
    describe('Text Processing', function() {
        it('String', function() {
            assert.equal(typeof String, 'function');
        });
        it('RegExp', function() {
            assert.equal(typeof RegExp, 'function');
        });
    });
    describe('Indexed Collection', function() {
        it('Array', function() {
            assert.equal(typeof Array, 'function');
        });
        it('Int8Array', function() {
            assert.equal(typeof Int8Array, 'function');
        });
        it('Uint8Array', function() {
            assert.equal(typeof Uint8Array, 'function');
        });
        it('Uint8ClampedArray', function() {
            assert.equal(typeof Uint8ClampedArray, 'function');
        });
        it('Int16Array', function() {
            assert.equal(typeof Int16Array, 'function');
        });
        it('Uint16Array', function() {
            assert.equal(typeof Uint16Array, 'function');
        });
        it('Int32Array', function() {
            assert.equal(typeof Int32Array, 'function');
        });
        it('Uint32Array', function() {
            assert.equal(typeof Uint32Array, 'function');
        });
        it('Uint32Array', function() {
            assert.equal(typeof Uint32Array, 'function');
        });
        it('Float32Array', function() {
            assert.equal(typeof Float32Array, 'function');
        });
        it('Float64Array', function() {
            assert.equal(typeof Float64Array, 'function');
        });
    });
    describe('Keyed collections', function() {
        it('Map', function() {
            assert.equal(typeof Map, 'function');
        });
        it('Set', function() {
            assert.equal(typeof Set, 'function');
        });
        it('WeakMap', function() {
            assert.equal(typeof WeakMap, 'function');
        });
        it('WeakSet', function() {
            assert.equal(typeof WeakSet, 'function');
        });
    });
    describe('Structured data', function() {
        it('ArrayBuffer', function() {
            assert.equal(typeof ArrayBuffer, 'function');
        });
        it('SharedArrayBuffer ', function() {
            assert.equal(typeof SharedArrayBuffer , 'function');
        });
        it('Atomics', function() {
            assert.equal(typeof Atomics , 'object');
        });
        it('DataView', function() {
            assert.equal(typeof Atomics , 'object');
        });
        it('JSON', function() {
            assert.equal(typeof Atomics , 'object');
        });
    });
    describe('Control abstraction objects', function() {
        it('Promise', function() {
            assert.equal(typeof Promise, 'function');
        });
        it.skip('Generator', function() {
            assert.equal(typeof Generator, 'function');
        });
        it.skip('GeneratorFunction', function() {
            assert.equal(typeof GeneratorFunction, 'function');
        });
        it.skip('AsyncFunction', function() {
            assert.equal(typeof AsyncFunction, 'function');
        });
    });
    describe('Reflection', function() {
        it('Reflect', function() {
            assert.equal(typeof Reflect, 'object');
        });
        it('Proxy', function() {
            assert.equal(typeof Proxy, 'function');
        });
    });
    describe('Internationalization', function() {
        it('Intl', function() {
            assert.equal(typeof Intl, 'object');
        });
        it('Intl.Collator', function() {
            assert.equal(typeof Intl.Collator, 'function');
        });
        it('Intl.DateTimeFormat', function() {
            assert.equal(typeof Intl.DateTimeFormat, 'function');
        });
        it('Intl.NumberFormat', function() {
            assert.equal(typeof Intl.NumberFormat, 'function');
        });
    });
    describe('WebAssembly', function() {
        it('WebAssembly', function() {
            assert.equal(typeof WebAssembly, 'object');
        });
        it('WebAssembly.Module', function() {
            assert.equal(typeof WebAssembly.Module, 'function');
        });
        it('WebAssembly.Instance', function() {
            assert.equal(typeof WebAssembly.Instance, 'function');
        });
        it('WebAssembly.Memory', function() {
            assert.equal(typeof WebAssembly.Memory, 'function');
        });
        it('WebAssembly.Table', function() {
            assert.equal(typeof WebAssembly.Table, 'function');
        });
        it('WebAssembly.CompileError', function() {
            assert.equal(typeof WebAssembly.CompileError, 'function');
        });
        it('WebAssembly.LinkError', function() {
            assert.equal(typeof WebAssembly.LinkError, 'function');
        });
        it('WebAssembly.RuntimeError', function() {
            assert.equal(typeof WebAssembly.RuntimeError, 'function');
        });
    });
    describe('Function Properties', function() {
        it('arguments', function() {
            assert.equal(typeof arguments, 'object');
        });
    });
});

describe('JavaScript Core Statements', function() {
  describe('Control Flow',function(){
    it('block',function(done){
      try {
        if ( true ) {
          debugger;
        }
        var test = 'test';
        if ( test === 'test' ) {
          Labeled: {
            done();
          }
        }
      } catch ( err ) {
      }
    });
    it('break',function(done){
      try {
        var test = 'test';
        for ( var i = 0; i<10; i++ ) {
          break;
        }
        if ( test === 'test' ) {
          done();
        }
      } catch ( err ) {
      }
    });
    it('continue',function(done){
      try {
        var test = 'test';
        for ( var i = 0; i<10; i++ ) {
          continue;
        }
        if ( test === 'test' ) {
          done();
        }
      } catch ( err ) {
      }
    });

    it('empty',function(done){
      try {
        var test = 'test';
        var array1 = [1, 2, 3];
        // Assign all array values to 0
        for (i = 0; i < array1.length; array1[i++] = 0) /* empty statement */ ;
        
        if ( test === 'test' ) {
          done();
        }
      } catch ( err ) {
      }
    });

    it('if ... else',function(done){
      try {
        var test = 'test';
        var a = -5;
        if (a > 0) {
          a = "positive";
        } else {
          a = "NOT positive";
        }
        if ( test === 'test' ) {
          done();
        }
      } catch ( err ) {
      }
    });

    it('switch',function(done){
      try {
        var test = 'test';
        var expr = 'Papayas';
        switch (expr) {
          case 'Oranges':
            //console.log('Oranges are $0.59 a pound.');
            break;
          case 'Mangoes':
          case 'Papayas':
            //console.log('Mangoes and papayas are $2.79 a pound.');
            // expected output: "Mangoes and papayas are $2.79 a pound."
            break;
          default:
            //console.log('Sorry, we are out of ' + expr + '.');
        }
        if ( test === 'test' ) {
          done();
        }
      } catch ( err ) {
      }
    });

    it('throw',function(done){
      try {
        var test = 'test';
        throw "Parameter is not a number!";
      } catch ( err ) {
        done();
      }
    });

    it('try ... catch ... finally',function(done){
      try {
        var test = 'test';
        throw "Parameter is not a number!";
      } catch ( err ) {
        test = 'test 2';
      } finally {
        done();
      }
    });

  });
  describe('Declarations', function() {
      it('var',function(done){
          try {
              var test = 'test';
              if ( test === 'test' ) {
                  done();
              }
          } catch ( err ) {
          }
      });
      it('let',function(done){
          try {
              let test = 'test';
              if ( test === 'test' ) {
                  done();
              }
          } catch ( err ) {
          }
      });
      it('const',function(done){
          try {
              const test = 'test';
              if ( test === 'test' ) {
                  done();
              }
          } catch ( err ) {
          }
      });
  });
  describe('Functions and Classes',function(){});
  describe('Iterations',function(){});
  describe('Others',function(){
    it('debugger',function(done){
      try {
        debugger;
        var test = 'test';
        if ( test === 'test' ) {
          done();
        }
      } catch ( err ) {
      }
    });

    /*
    it.skip('export', function() {
      try {
        export { true };
        //var test = 'test';
        if ( test == 'test' ) {
          done();
        }
      } catch ( err ) {
      }
    });
    //*/

    /*
    it.skip('import', function() {
      try {
        import * as name from "assert";;
        var test = 'test';
        if ( test === 'test' ) {
          done();
        }
      } catch ( err ) {
      }
    });
    //*/

    /*
    it('import.meta',function(done){
      try {
        import.meta;
        var test = 'test';
        if ( test === 'test' ) {
          done();
        }
      } catch ( err ) {
      }
    });
    //*/

    it('label',function(done){
      try {
        labeler:
        var test = 'test';
        if ( test === 'test' ) {
          done();
        }
      } catch ( err ) {
      }
    });

    it('with',function(done){
      try {
        labeler:
        var test = 'test';

        // Not Recommended
        with ( test === 'test' ) {
          done();
        }
      } catch ( err ) {
      }
    });
  });
});
