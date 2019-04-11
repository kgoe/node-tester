;

/*
 * test.js entry point
 * executor : node.js + mocha
 *
 * Project Wide Test Entry Point
 * Load Files From Test Folder
 */

console.time('wholeTime');

var Mocha = require('mocha');
var fs = require('fs');
var path = require('path');

// Instantiate a Mocha instance.
var mocha = new Mocha();
var testDir = 'xxx-tests';
// Add each .js file to the mocha instance
fs.readdirSync(testDir)
    .filter(function(file) {
      // Only keep the .js files
      var check = file.substr(-3) === '.js';
      check = check && file.indexOf('testrun-') === 0;
      return check;
    })
    .forEach((file) => {
      mocha.addFile( path.join(testDir, file) );
    });

var onMochaSuccess = function onMochaSucess() {
  console.log('onMochaSuccess');
};

// Run the tests.
var mochaHandler = mocha.run(function mochaRun(failures) {
  process.exitCode = failures ? 1 : 0;
  // exit with non-zero status if there were failures

  if ( process.exitCode == 0 ) {
    onMochaSuccess();
  }
});

// console.log(mochaHandler);

console.timeEnd('wholeTime');

/**
Mocha {
  files: [ 'xxx-tests\\testrun-001.js' ],
  options:
   { diff: true,
     extension: [ 'js' ],
     opts: './test/mocha.opts',
     package: './package.json',
     reporter: 'spec',
     slow: 75,
     timeout: 2000,
     ui: 'bdd',
     grep: undefined,
     reporterOptions: undefined,
     useInlineDiffs: false,
     globals: [],
     hideDiff: false },
  suite:
   Suite {
     title: '',
     ctx: Context {},
     suites: [],
     tests: [],
     pending: false,
     _beforeEach: [],
     _beforeAll: [],
     _afterEach: [],
     _afterAll: [],
     root: true,
     _timeout: 2000,
     _enableTimeouts: true,
     _slow: 75,
     _bail: undefined,
     _retries: -1,
     _onlyTests: [],
     _onlySuites: [],
     delayed: false,
     _events: { newListener: [Function], 'pre-require': [Array] },
     _eventsCount: 2 },
  _reporter:
   { [Function: Spec]
     super_:
      { [Function: Base]
        useColors: [Object],
        inlineDiffs: false,
        colors: [Object],
        symbols: [Object],
        color: [Function],
        window: [Object],
        cursor: [Object],
        generateDiff: [Function],
        list: [Function],
        abstract: true },
     description: 'hierarchical & verbose [default]' } }
 */
