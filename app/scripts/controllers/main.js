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
  .controller('MainCtrl', function ($scope) {

    //making an object of todos notes in the object of todos list
      $scope.todoList = [
        {
          title: "Note A",
          text: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ",
          taskCompleted: true
        },
        {
          title: "Note B",
          text: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ",
          taskCompleted: false
        },
        {
          title: "Note C",
          text: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ",
          taskCompleted: false
        }];

      //Initializing a blank note for ng-model in jumbotron of index.html
        $scope.note = {
          title: "",
          text: "",
          taskCompleted: false
        };

        //add note to todoList
        $scope.addNote = function(noteTitle, noteText){
          //create temp note
          var note = {
            title: noteTitle,
            text: noteText,
            taskCompleted: false
          };
          //push temp note to todoList
          $scope.todoList.push(note);
          //reset $scope.note to init values
          $scope.note.title = "";
          $scope.note.text = "";
          $scope.note.taskCompleted = false;

        };

  });//end of controller
