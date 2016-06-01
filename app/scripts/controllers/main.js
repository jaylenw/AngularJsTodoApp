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
          taskCompleted: true,
          date: "Today at 7:48"
        },
        {
          title: "Note B",
          text: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ",
          taskCompleted: false,
          date: "Today at 7:48"
        },
        {
          title: "Note C",
          text: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ",
          taskCompleted: false,
          date: "Today at 7:48"
        }];

        //making an object of archived notes
        $scope.archiveList = [
          {
            title: "Note Bob",
            text: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ",
            taskCompleted: true,
            date: "Today at 7:48"
          }
        ];

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
            text: noteText,
            taskCompleted: false,
            date: moment().calendar() //moment uses moment.js
            //Today at 7:48
          };
          //push temp note to todoList
          $scope.todoList.push(note);
          //reset $scope.note to init values
          $scope.note.title = "";
          $scope.note.text = "";
          $scope.note.taskCompleted = false;
        };

        //deleting selected note from todoList
        $scope.archiveNote = function(note){
          //adding note to archiveList
          $scope.archiveList.push(note);

          //getting index of the note in the array in the
          //todoList
          var indexOf = $scope.todoList.indexOf(note);

          //removing particular note from todoList
          if(indexOf !== -1){
            $scope.todoList.splice(indexOf, 1);
          }
        };

        //setting taskCompleted attribute to completed
        $scope.markCompleted = function(note) {
          note.taskCompleted = true;
        };

  });//end of controller
