'use strict';
var Factory = require('rosie').Factory;
var bulk = require('bulk-require');

module.exports = Factory;

bulk(__dirname, ['./**/!(*index|*Spec).js']);
