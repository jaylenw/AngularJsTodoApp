'use strict';

describe('Controller: authCtrl', function () {

  // load the controller's module
  beforeEach(module('todoApp'));

  var authCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    authCtrl = $controller('authCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(authCtrl.awesomeThings.length).toBe(3);
  });
});
