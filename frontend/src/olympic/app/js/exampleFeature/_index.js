'use strict';

var angular = require('angular');
var bulk = require('bulk-require');

module.exports = angular.module('tc.exampleFeature', []);

bulk(__dirname, ['./**/!(*_index|*Spec).js']);
