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
  .controller('MainCtrl', function ($scope, $window, $showdown, Task, ngNotify) {

    //unit testing, make sure the controller is initialized properly
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //Getting user token and adding it to scope
    $scope.token = localStorage.getItem("token");

    //Redirect user to a passed in url page
    $scope.goTo = function(url){
      $window.location.href = url;
    }

    //Initializing variable to not show archive notes initially
    $scope.showArchive = false;

    //Run on page load to obtain tasks from server
    getTasks();

    //Initializing a blank note for ng-model in jumbotron of index.html
    $scope.note = {};

    //add note to todoList
    $scope.addNote = function(noteTitle, noteBody){
      var payload =  {
        "title": noteTitle,
        "body": noteBody,
        "token": $scope.token
      }
      Task.create(payload,
        function(response){
          //Get all tasks from server
          getTasks();
          //reset $scope.note to init values
          $scope.note = {};
          ngNotify.set("Syncing Note with the Server",'success');
          }, function(err){
               ngNotify.set('Error, Note Could Not be Added. Please try Again Later.','error');
      });
    };

    //update (edit) note content in todoList
    $scope.updateNoteContent = function(noteID, noteTitle, noteBody){
      var payload = {
        "id": noteID,
        "title": noteTitle,
        "body": noteBody,
        "token": $scope.token
      };
      Task.update(payload,function(success){
        ngNotify.set('Note Updated Successfully', 'success');
      }, function(err){
          ngNotify.set('Error Updating the Note','error');
      });
    };

    //update (edit) note archive status
    $scope.updateNoteArchive = function(noteID, noteArchive){
      var payload = {
        "id": noteID,
        "archive": noteArchive,
        "token": $scope.token
      };
      Task.update(payload ,function(success){
        ngNotify.set('Note Updated Successfully', 'success');
      }, function(err){
          ngNotify.set('Error Updating the Note','error');
      });
    }

    //Delete a specific note
    $scope.deleteNote = function(noteID){
      var payload = {
        "id": noteID,
        "token": $scope.token
      }
      Task.delete(payload,
        function(success){
          var index = $scope.todoList.map(function(e) { return e._id; }).indexOf(noteID);
          $scope.todoList.splice(index, 1);
          ngNotify.set('Note Deleted Successfully', 'success');
        },
        function(err){
          ngNotify.set('Error Deleting the Note', 'error');
        });
    }

    //function to return more of a nice date format
    $scope.formatDate = function(date){
      return moment.utc(date).toDate().toString();
    }

    //Obtain tasks from server and adding it to todolist
    function getTasks(){
      Task.get(
        {
          "token": $scope.token
        },
        function(response){
          $scope.todoList = response;
          }, function(err){
                switch (err) {
                  case 500:
                    ngNotify.set("Error Occured Connecting with the Server");
                  break;
                }
      });
    }

  });//end of controller
