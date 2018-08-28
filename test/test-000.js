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

/*
describe('Array', function() {
  describe.only('#indexOf()', function() {
    it('should return -1 unless present', function() {
      // this test will be run
    });

    it('should return the index when present', function() {
      // this test will also be run
    });
  });

  describe.only('#concat()', function () {
    it('should return a new Array', function () {
      // this test will also be run
    });
  });

  describe('#slice()', function () {
    it('should return a new Array', function () {
      // this test will not be run
    });
  });
});
//*/

/*
describe('Array', function() {
  describe.only('#indexOf()', function() {
    it.only('should return -1 unless present', function() {
      // this test will be run
    });

    it('should return the index when present', function() {
      // this test will not be run
    });
  });
});
//*/

/*
describe('Array', function() {
  describe.skip('#indexOf()', function() {
    // ...
  });
});
//*/

/*
describe('Array', function() {
  describe('#indexOf()', function() {
    it.skip('should return -1 unless present', function() {
      // this test will not be run
    });

    it('should return the index when present', function() {
      // this test will be run
    });
  });
});
//*/

/* Check Environment
it('should only test in the correct environment', function() {
  if ( true ) { // check environment here
    // make assertions
} else {
    this.skip();
  }
});
//*/

/*
it('should only test in the correct environment', function() {
    if ( true ) { // check test environment
      // make assertions
    } else {
      // do nothing
    }
});
//*/

/*
before(function() {
  if ( true ) { // check test environment
    // setup code
} else {
    this.skip();
  }
});
//*/

/* RETRIES
describe('retries', function() {
  // Retry all tests in this suite up to 4 times
  this.retries(4);

  beforeEach(function () {
    browser.get('http://www.yahoo.com');
  });

  it('should succeed on the 3rd try', function () {
    // Specify this test to only retry up to 2 times
    this.retries(2);
    expect($('.foo').isDisplayed()).to.eventually.be.true;
  });
});
//*/

/* DYNAMICALLY GENERATED TESTS
var assert = require('chai').assert;

function add() {
  return Array.prototype.slice.call(arguments).reduce(function(prev, curr) {
    return prev + curr;
  }, 0);
}

describe('add()', function() {
  var tests = [
    {args: [1, 2],       expected: 3},
    {args: [1, 2, 3],    expected: 6},
    {args: [1, 2, 3, 4], expected: 10}
  ];

  tests.forEach(function(test) {
    it('correctly adds ' + test.args.length + ' args', function() {
      var res = add.apply(null, test.args);
      assert.equal(res, test.expected);
    });
  });
});
//*/

/* Update Slow
describe('something slow', function() {
  this.slow(10000);

  it('should take long enough for me to go make a sandwich', function() {
    // ...
  });
});
//*/

/* Timeout Suite Level
describe('a suite of tests', function() {
  this.timeout(500);

  it('should take less than 500ms', function(done){
    setTimeout(done, 300);
  });

  it('should take less than 500ms as well', function(done){
    setTimeout(done, 250);
  });
})
//*/

/* Timeout Test Level
it('should take less than 500ms', function(done){
  this.timeout(500);
  setTimeout(done, 300);
});
//*/

/* Timeout Hook Level
describe('a suite of tests', function() {
  beforeEach(function(done) {
    this.timeout(3000); // A very long environment setup.
    setTimeout(done, 2500);
  });
});
//*/