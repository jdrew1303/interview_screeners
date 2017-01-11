// This function converts the mock function into a string
// and encloses it into an angular.run() block - which runs
// when the AngurlarJS application initializes. You can pass this an array of functions and it will create a string from them that can be consumed from ptor.addMockModule
module.exports.build = function(funcs) {
  var funcStr = "angular.module('httpBackEndMock', ['ngMockE2E'])";

  if (Array.isArray(funcs)) {
    for (var i = 0; i &lt; funcs.length; i++) {
      funcStr += "\r.run(" + funcs[i] + ")"
    };
  } else {
    funcStr += "\r.run(" + funcs + ")"
  }

  funcStr += "\r.run(" + passThrough + ")";

  var funcTyped = Function(funcStr);

  return funcTyped;
}

function passThrough($httpBackend) {
  $httpBackend.whenGET(/^\/scripts\//).passThrough();
};
