var assert = require('assert');
//var supertest = require("supertest");
//var should = require("should");

// DEMO
describe('JavaScript Core', function() {
    describe('Constructors', function() {
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
    });
});