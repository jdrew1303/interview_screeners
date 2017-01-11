'use strict';

var exampleFeatureModule = require('./_index');

/**
 * @ngInject
 */
function ExampleService($q, $http) {

  var service = {};

  service.get = function() {
    var deferred = $q.defer();

    return $http.get('apiPath').success(function(data) {
        deferred.resolve(data);
    }).error(function(err, status) {
        deferred.reject(err, status);
    });

  };

  return service;

}

exampleFeatureModule.service('ExampleService', ExampleService);
