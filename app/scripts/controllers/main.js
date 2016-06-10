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
    $scope.userToken = localStorage.getItem("token");

    //Redirect user to Authentication page
    $scope.toAuthpage = function(){
      $window.location.href = '#/auth';
    }


    //Initializing variable to false for showing archive notes
    $scope.showArchive = false;

    //making an object of todos notes in the object of todos list
    $scope.todoList = Task.get({"token":$scope.userToken}, function(response){
      console.log("got tasks");
    }, function(err){
      console.log("did not obtain tasks");
    });
    //Initializing a blank note for ng-model in jumbotron of index.html
    $scope.note = {
      title: "",
      body: "",
      date: ""
    };

    //add note to todoList
    $scope.addNote = function(noteTitle, noteBody){
      var serverNode = Task.create({"title": noteTitle,"body":noteBody ,"token":$scope.userToken}, function(response){
      console.log("note added successfully ");
      ngNotify.set("Syncing Note with the Server.",'success');
      }, function(err){
          console.log("error while adding note" + err.status );
          ngNotify.set('Error, Note could not be added. Try again later.','error');
      });
      //push temp note to todoList
      $scope.todoList.push(serverNode);
      //reset $scope.note to init values
      $scope.note.title = "";
      $scope.note.body = "";
      $scope.note.taskCompleted = false;
    };

    //update (edit) note in todoList


    //marking passed in note to noteArchived to true
    // $scope.archiveNote = function(note){
    //   note.archive = true;
    // };

  });//end of controller
