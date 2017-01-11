var _       = require('lodash-node');
var bulk    = require('bulk-require');
var Factory = require('rosie').Factory;
bulk(__dirname, ['../factory/**/*.js']);


// This should be run as a seperate test suite before all other tests. This means
// that if our factories are broken we fail fast and catch it before the main
// suite runs and we freakout. This is a generic factory tester. It will get
// the list of factories and make sure that they dont throw errors during the
// building of a list or a single factory. These are not to be confused with
// Angular factories.
_.map(_.keys(Factory.factories), function(factoryName) {

  describe('The ' + factoryName + ' factory', function() {

    it('should create a valid object', function() {
      var factoryUnderTest = Factory.build(factoryName);
      checkExists(factoryUnderTest);
    });

    it('should create a valid list', function() {
      var factoryListUnderTest = Factory.buildList(factoryName, 10);
      checkExists(factoryListUnderTest);
      expect(_.isArray(factoryListUnderTest)).toBe(true);
      expect(factoryListUnderTest.length).toEqual(10);
    });

    // basic helper to check for a proper object.
    function checkExists(item){
      expect(item).toBeDefined();
      expect(item).not.toBeNull();
    }
  });
});
