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
  .controller('MainCtrl', function ($scope, Task) {

    //Initializing variable to false for showing archive notes
    $scope.showArchive = false;

    //making an object of todos notes in the object of todos list
      $scope.todoList = Task.get(null, function(response){
        console.log("success");
      }, function(err){
        console.log("error");
      });
      //Initializing a blank note for ng-model in jumbotron of index.html
        $scope.note = {
          title: "",
          text: "",
          taskCompleted: false,
          date: ""
        };

        //add note to todoList
        $scope.addNote = function(noteTitle, noteText){
          //create temp note
          var note = {
            title: noteTitle,
            body: noteText,
            archive: false
          };
          var serverNode = Task.create(note);

          //push temp note to todoList
          $scope.todoList.push(serverNode);
          //reset $scope.note to init values
          $scope.note.title = "";
          $scope.note.text = "";
          $scope.note.taskCompleted = false;


        };

        //marking passed in note to noteArchived to true
        $scope.archiveNote = function(note){
          note.noteArchived = true;
        };

        //setting taskCompleted attribute to completed
        $scope.markCompleted = function(note) {
          note.taskCompleted = true;
        };

        $scope.test = function(){
          alert($scope.showArchive);
        }

  });//end of controller
