# mocha
cli
commands

# cli
mocha
mocha <file.js>
mocha --reporter=doc | cat docs/head.html - docs/tail.html > docs/test.html

# cli diffs
err.expected
err.actual

# usage
Usage: mocha [debug] [options] [files]

  Options:

    -V, --version                           output the version number
    -A, --async-only                        force all tests to take a callback (async) or return a promise
    -c, --colors                            force enabling of colors
    -C, --no-colors                         force disabling of colors
    -G, --growl                             enable growl notification support
    -O, --reporter-options <k=v,k2=v2,...>  reporter-specific options
    -R, --reporter <name>                   specify the reporter to use (default: spec)
    -S, --sort                              sort test files
    -b, --bail                              bail after first test failure
    -d, --debug                             enable node's debugger, synonym for node --debug
    -g, --grep <pattern>                    only run tests matching <pattern>
    -f, --fgrep <string>                    only run tests containing <string>
    -gc, --expose-gc                        expose gc extension
    -i, --invert                            inverts --grep and --fgrep matches
    -r, --require <name>                    require the given module
    -s, --slow <ms>                         "slow" test threshold in milliseconds [75]
    -t, --timeout <ms>                      set test-case timeout in milliseconds [2000]
    -u, --ui <name>                         specify user-interface (bdd|tdd|qunit|exports) (default: bdd)
    -w, --watch                             watch files for changes
    --check-leaks                           check for global variable leaks
    --full-trace                            display the full stack trace
    --compilers <ext>:<module>,...          use the given module(s) to compile files (default: )
    --debug-brk                             enable node's debugger breaking on the first line
    --globals <names>                       allow the given comma-delimited global [names] (default: )
    --es_staging                            enable all staged features
    --harmony<_classes,_generators,...>     all node --harmony* flags are available
    --preserve-symlinks                     Instructs the module loader to preserve symbolic links when resolving and caching modules
    --icu-data-dir                          include ICU data
    --inline-diffs                          display actual/expected differences inline within each string
    --no-diff                               do not show a diff on failure
    --inspect                               activate devtools in chrome
    --inspect-brk                           activate devtools in chrome and break on the first line
    --interfaces                            display available interfaces
    --no-deprecation                        silence deprecation warnings
    --exit                                  force shutdown of the event loop after test run: mocha will call process.exit
    --no-timeouts                           disables timeouts, given implicitly with --debug
    --no-warnings                           silence all node process warnings
    --opts <path>                           specify opts path (default: test/mocha.opts)
    --perf-basic-prof                       enable perf linux profiler (basic support)
    --napi-modules                          enable experimental NAPI modules
    --prof                                  log statistical profiling information
    --log-timer-events                      Time events including external callbacks
    --recursive                             include sub directories
    --reporters                             display available reporters
    --retries <times>                       set numbers of time to retry a failed test case
    --throw-deprecation                     throw an exception anytime a deprecated function is used
    --trace                                 trace function calls
    --trace-deprecation                     show stack traces on deprecations
    --trace-warnings                        show stack traces on node process warnings
    --use_strict                            enforce strict mode
    --watch-extensions <ext>,...            specify extensions to monitor with --watch (default: js)
    --delay                                 wait for async suite definition
    --allow-uncaught                        enable uncaught errors to propagate
    --forbid-only                           causes test marked with only to fail the suite
    --forbid-pending                        causes pending tests and test marked with skip to fail the suite
    --file <file>                           include a file to be ran during the suite (default: )
    --exclude <file>                        a file or glob pattern to ignore (default: )
    -h, --help                              output usage information

  Commands:

    init <path>  initialize a client-side mocha setup at <path>

    -w, --watch
    Executes tests on changes to JavaScript in the CWD, and once initially.

    --exit / --no-exit

# Mocha Reporters
  spec  
  dot matrix  
  nyan  
  tap ( test anything protocol )  
  landing strip ( landing )  
  list  
  progress  
  json  
  json stream  
  min  
  doc  

# Others
  markdown  
  xunit  