/*global angular */

'use strict';

var angular = require('angular');
var angularMocks = require('angular-mocks');

xdescribe('Unit: ExampleService', function() {

  var service;

  beforeEach(function() {
    // instantiate the app module
    angular.mock.module('app');

    // mock the service
    angular.mock.inject(function(ExampleService) {
      service = ExampleService;
    });
  });

  it('should exist', function() {
    expect(service).toBeDefined();
  });

});
