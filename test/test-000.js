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

describe('DEMO User 1', function() {
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

/*
beforeEach(function() {
    return db.clear()
    .then(function() {
        return db.save([tobi, loki, jane]);
    });
});
//*/
  
describe('DEMO #find() 1', function() {
    it('respond with matching records', function() {
        return db.find({ type: 'User' }).should.eventually.have.length(3);
    });
});

it('DEMO should complete this test', function (done) {
    return new Promise(function (resolve) {
        assert.ok(true);
        resolve();
    })
    .then(done);
});

/*
beforeEach(async function() {
    await db.clear();
    await db.save([tobi, loki, jane]);
});
//*/

describe('DEMO #find() 2', function() {
    it('responds with matching records', async function() {
        const users = await db.find({ type: 'User' });
        users.should.have.length(3);
    });
});

describe('DEMO Array 2', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
        [1,2,3].indexOf(5).should.equal(-1);
        [1,2,3].indexOf(0).should.equal(-1);
        });
    });
});

describe('DEMO Arrow My Suite', () => {
    it('my test', () => {
        // should set the timeout of this test to 1000 ms; instead will fail
        this.timeout(1000);
        assert.ok(true);
    });
});

/*
describe('DEMO hooks', function() {

    before(function() {
        // runs before all tests in this block
    });

    after(function() {
        // runs after all tests in this block
    });

    beforeEach(function() {
        // runs before each test in this block
    });

    afterEach(function() {
        // runs after each test in this block
    });

    // test cases
});
//*/

/*
beforeEach(function() {
  // beforeEach hook
});

beforeEach(function namedFun() {
  // beforeEach:namedFun
});

beforeEach('some description', function() {
  // beforeEach:some description
});
//*/

/*
describe('DEMO Connection', function() {
    var db = new Connection,
      tobi = new User('tobi'),
      loki = new User('loki'),
      jane = new User('jane');
  
    beforeEach(function(done) {
      db.clear(function(err) {
        if (err) return done(err);
        db.save([tobi, loki, jane], done);
      });
    });
  
    describe('#find()', function() {
      it('respond with matching records', function(done) {
        db.find({type: 'User'}, function(err, res) {
          if (err) return done(err);
          res.should.have.length(3);
          done();
        });
      });
    });
});
//*/

/*
ROOT Level Hook
beforeEach(function() {
  console.log('before every test in every file');
});
//*/

/*
DELAYED Root Suite
setTimeout(function() {
  // do some setup

  describe('my suite', function() {
    // ...
  });

  run();
}, 5000);
//*/

describe('DEMO Pending Array', function() {
    //describe('#indexOf()', function() {
      // pending test below
      //it('should return -1 when the value is not present');
    //});
});

describe('DEMO Exclusive Array 2', function() {
    //describe.only('#indexOf()', function() {
      // ...
    //});
});

/*
describe('Array', function() {
  describe('#indexOf()', function() {
    it.only('should return -1 unless present', function() {
      // ...
    });

    it('should return the index when present', function() {
      // ...
    });
  });
});
//*/

/*
describe('Array', function() {
  describe('#indexOf()', function() {
    it.only('should return -1 unless present', function() {
      // this test will be run
    });

    it.only('should return the index when present', function() {
      // this test will also be run
    });

    it('should return -1 if called with a non-Array context', function() {
      // this test will not be run
    });
  });
});
//*/