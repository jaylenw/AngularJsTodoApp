'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('todoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('shall be that token should be defined', function () {
    expect(scope.token).toBeDefined();
  });

  it('shall be that note should be defined', function () {
    expect(scope.note).toBeDefined();
  });

  it('shall be that addNote should be defined', function () {
    expect(scope.addNote).toBeDefined();
  });

  it('shall be that updateNoteContent should be defined', function () {
    expect(scope.updateNoteContent).toBeDefined();
  });

  it('shall be that updateNoteArchive should be defined', function () {
    expect(scope.updateNoteArchive).toBeDefined();
  });

  it('shall be that deleteNote should be defined', function () {
    expect(scope.deleteNote).toBeDefined();
  });

  it('shall be that formatDate should be defined', function () {
    expect(scope.formatDate).toBeDefined();
  });

});
