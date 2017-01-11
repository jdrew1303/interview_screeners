'use strict';

var exampleFeatureModule = require('./_index');

/**
 * @ngInject
 */
function ExampleController(ExampleService) {

  // ViewModel
  var vm = this;

  vm.title = 'AngularJS, Gulp, and Browserify!';
  vm.number = 1234;

}

exampleFeatureModule.controller('ExampleController', ExampleController);
