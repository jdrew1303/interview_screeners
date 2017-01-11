'use strict';

var istanbul = require('browserify-istanbul');
var isparta  = require('isparta');
var _        = require('lodash-node');

module.exports = function(config) {

  config.set({

    basePath: '../',

    frameworks: ['jasmine', 'browserify'],

    preprocessors: {
      'app/js/**/*.js': ['browserify', 'babel', 'coverage'],
      'test/unit/**/*.js': ['browserify', 'babel',],
      'factories/**/*.js': ['browserify', 'babel',],
      'test/factorySpec.js': ['browserify', 'babel',]
    },

    browsers: [
      //'Chrome',
      'PhantomJS'
    ],

    reporters: ['progress', 'coverage'],

    autoWatch: true,

    browserify: {
      debug: true,
      transform: [
        'bulkify',
        istanbul({
          instrumenter: isparta,
          ignore: ['**/node_modules/**', '**/test/**', 'factories/**/*.js']
        })
      ]
    },

    proxies: {
      '/': 'http://localhost:9876/'
    },

    urlRoot: '/__karma__/',

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    files: [
      // app-specific code
      'app/js/main.js',

      //  test data factories
      'factories/**/*.js',

      // test files
      'test/factorySpec.js',
      'test/unit/**/*Spec.js'
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    get singleRun(){

      var CI_ENVIRONMENTAL_VARS = [
        'CI',
        'CIRCLECI',
        'TRAVIS',
        'SEMAPHORE',
        'SNAP_CI',
        'TEAMCITY_VERSION',
        'JENKINS_URL',
        'MAGNUM'
      ];

      var isKnownCiService = _.map(CI_ENVIRONMENTAL_VARS, function(name){
        return (process.env[name]);
      })

      return !(_.isEqual(_.indexOf(isKnownCiService, true), -1));
    },

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    }

  });

};
