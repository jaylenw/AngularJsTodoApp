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

  it('user should be defined', function () {
    expect(scope.user).toBeDefined();
  });

  it('token should be defined', function () {
    expect(scope.token).toBeDefined();
  });

  it('register should be defined', function () {
    expect(scope.register).toBeDefined();
  });

  it('login should be defined', function () {
    expect(scope.login).toBeDefined();
  });

  it('logout should be defined', function () {
    expect(scope.logout).toBeDefined();
  });
});
