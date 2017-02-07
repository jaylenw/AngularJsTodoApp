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

  it('shall be that user should be defined', function () {
    expect(scope.user).toBeDefined();
  });

  it('shall be that token should be defined', function () {
    expect(scope.token).toBeDefined();
  });

  it('shall be that register should be defined', function () {
    expect(scope.register).toBeDefined();
  });

  it('shall be that login should be defined', function () {
    expect(scope.login).toBeDefined();
  });

  it('shall be that logout should be defined', function () {
    expect(scope.logout).toBeDefined();
  });
});
