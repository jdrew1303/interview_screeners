'use strict';

exports.config = {

  allScriptsTimeout: 11000,

  baseUrl: 'http://localhost:3002/',

  rootElement: 'body',

  multiCapabilities: [
    //{ browserName: 'firefox', shardTestFiles: true, maxInstances: 2 },
    {
      browserName: 'chrome',
      shardTestFiles: true,
      maxInstances: 2,
      chromeOptions: {args: ['incognito', 'disable-extensions', 'start-maximized', 'enable-crash-reporter-for-testing']},
      loggingPrefs: {browser: 'ALL'}
    }
  ],

  framework: 'jasmine',

  jasmineNodeOpts: {
    isVerbose: true,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 30000
  },

  onPrepare: function(){
    browser.driver.manage().window().maximize();

    var loggingHelper = require('./e2e/helpers/crashReporter');

    afterEach(function () {
      var allTestsDidNotPass = (!jasmine.getEnv().currentSpec.results().passed());

      var space = /\s/g, withDash = '-',
        testDescription           = jasmine.getEnv().currentSpec.description,
        testDescriptionFormatted  = testDescription.replace(space, withDash),
        baseFileName              = testDescriptionFormatted + '-' + loggingHelper.getNowsTimestampAsFormattedString();

      loggingHelper.createDirectories();
      loggingHelper.flushConsoleToFile(browser, baseFileName);
      if (allTestsDidNotPass) { loggingHelper.takeScreenshot(baseFileName); }
    });
  },

  specs: [
    'e2e/**/*.js',
    'test/factorySpec.js'
  ]

};
