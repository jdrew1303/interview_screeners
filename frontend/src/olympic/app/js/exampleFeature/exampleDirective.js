'use strict';

var exampleFeatureModule = require('./_index');

/**
 * @ngInject
 */
function exampleDirective() {

  return {
    restrict: 'EA',
    link: function(scope, element) {
      element.on('click', function() {
        console.log('element clicked');
      });
    }
  };

}

exampleFeatureModule.directive('exampleDirective', exampleDirective);
