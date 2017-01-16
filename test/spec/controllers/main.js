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

  it('MainCtrl should attach a list of awesomeThings to the scope', function () {
    expect(MainCtrl.awesomeThings.length).toBe(3);
  });

  it('token should be defined', function () {
    expect(scope.token).toBeDefined();
  });

  it('note should be defined', function () {
    expect(scope.note).toBeDefined();
  });

  it('addNote should be defined', function () {
    expect(scope.addNote).toBeDefined();
  });

  it('updateNoteContent should be defined', function () {
    expect(scope.updateNoteContent).toBeDefined();
  });

  it('updateNoteArchive should be defined', function () {
    expect(scope.updateNoteArchive).toBeDefined();
  });

  it('deleteNote should be defined', function () {
    expect(scope.deleteNote).toBeDefined();
  });

  it('formatDate should be defined', function () {
    expect(scope.formatDate).toBeDefined();
  });

});
