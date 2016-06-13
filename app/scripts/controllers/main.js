'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */
//Initializing AngularJS app by creating a module, app name is 'todoApp'

 //Creating a controller named 'MainCtrl' and adding it to our app
 //adding '$scope' into the function so that our view has access to the controller's
 //data. This is called dependency injection

angular.module('todoApp')
  .controller('MainCtrl', function ($scope, $window, Task, ngNotify) {

    //Getting user token and adding it to scope
    $scope.token = localStorage.getItem("token");

    //Redirect user to a passed in url page
    $scope.goTo = function(url){
      $window.location.href = url;
    }

    //Initializing variable to false for showing archive notes
    $scope.showArchive = false;

    //making an object of todos notes in the object of todos list
    $scope.todoList = Task.get(
      {
        "token":$scope.token
      },
      function(response){
        }, function(err){
              switch (err) {
                case 500:
                  ngNotify.set("Error occured connecting with the Server.");
                break;
              }
    });
    //Initializing a blank note for ng-model in jumbotron of index.html
    $scope.note = {};

    //add note to todoList
    $scope.addNote = function(noteTitle, noteBody){
      var serverNode = Task.create(
        {
          "title": noteTitle,
          "body":noteBody,
          "token":$scope.token
        }, function(response){
            ngNotify.set("Syncing Note with the Server.",'success');
          }, function(err){
              ngNotify.set('Error, Note could not be added. Try again later.','error');
      });
      //push temp note to todoList
      $scope.todoList.push(serverNode);
      //reset $scope.note to init values
      $scope.note = {};
    };

    //update (edit) note content in todoList
    $scope.updateNoteContent = function(noteID, noteTitle, noteBody){
      var payload = {
        id:noteID,
        "title": noteTitle,
        "body": noteBody,
        "token":$scope.token
      };
      Task.update(payload,function(success){
        ngNotify.set('Note updated Successfully', 'success');
      }, function(err){
          ngNotify.set('Error updating the Note','error');
      });
    };

    //update (edit) note archive status
    $scope.updateNoteArchive = function(noteID, noteArchive){
      var payload = {
        id:noteID,
        "archive":noteArchive,
        "token":$scope.token
      };
      Task.update(payload ,function(success){
        ngNotify.set('Note updated Successfully', 'success');
      }, function(err){
          ngNotify.set('Error updating the Note','error');
      });
    }

    //function to return more of a nice date format
    $scope.formatDate = function(date){
      return moment.utc(date).toDate().toString();
    }

  });//end of controller
