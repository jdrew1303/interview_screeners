'use strict';

var angular = require('angular');
require('ng-mock-e2e');
require('./tcCore/_index');
require('./exampleFeature/_index');

// create and bootstrap application
angular.element(document).ready(function() {

  var moduleDependencies = [
    'tc.core',  // required by all applications and most modules.
    'tc.exampleFeature' // Dummy feature that can be erased. Ties into the home route in router.
  ];

  // mount on window for testing
  window.app = angular.module('app', moduleDependencies);

  angular.module('app').constant('AppSettings', require('./constants'));

  angular.module('app').config(require('./onConfig'));

  angular.module('app').run(require('./onRun'));

  angular.bootstrap(document, ['app']);

});
