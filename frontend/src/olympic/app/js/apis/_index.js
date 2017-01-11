'use strict';

var angular = require('angular');
var bulk = require('bulk-require');

// This is the main module to load for generated APIs. This gives us
// a single point to mount on our application.
module.exports = angular.module('tc.apis', []);

bulk(__dirname, ['./**/!(*_index|*Spec).js']);
