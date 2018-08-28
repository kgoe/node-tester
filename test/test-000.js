var assert = require('assert');
//var supertest = require("supertest");
//var should = require("should");

// DEMO
describe('DEMO Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1,2,3].indexOf(4), -1);
        });
    });
});

it('DEMO double done', function(done) {
    // Calling `done()` twice is an error
    setImmediate(done);
    setImmediate(done);
});

describe('DEMO User', function() {
    describe('#save()', function() {
        it('should save without error', function(done) {
        var user = new User('Luna');
        user.save(function(err) {
            if (err) done(err);
            else done();
        });
        });
    });
});

describe('DEMO User 2', function() {
    describe('#save()', function() {
        it('should save without error', function(done) {
        var user = new User('Luna');
        user.save(done);
        });
    });
});

beforeEach(function() {
    return db.clear()
    .then(function() {
        return db.save([tobi, loki, jane]);
    });
});
  
describe('DEMO #find()', function() {
    it('respond with matching records', function() {
        return db.find({ type: 'User' }).should.eventually.have.length(3);
    });
});