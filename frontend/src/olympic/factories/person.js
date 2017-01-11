var Factory = require('rosie').Factory;

// The actual factory. See https://github.com/bkeepers/rosie for documentation.
Factory.define('person')
  .sequence('id')
  .attr('createdAt', function() { return new Date(); });

module.exports = Factory;
