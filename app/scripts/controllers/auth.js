'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('authCtrl', function ($scope, User) {

    $scope.user = {};
    $scope.userResponse = "";
    $scope.asdf = true;

    $scope.register = function() {
      User.register($scope.user, function(response) {
        console.log(response)
        localStorage.setItem("token", response.token);
      }, function(err) {
        console.log(err);
        //alert(err.data.msg);
        //client entered wrong information for our backend
        //400 level errors
        if(err.status > 399 && err.status < 500){
          $scope.userResponse = err.data.msg + " Please try again.";
        }
        else{//something is wrong with the backend. 500 level errors
          $scope.userResponse = err.data.msg + " Server error. Please try again later.";
        }

      });
      //console.log($scope.user);
    };

    $scope.login = function(){

    }




  });//end of controller

// var mytokenisthis = localStorage.getItem("token");
// if(!mytokenisthis){
//   //boot the user to the login/register page
// }
// var mynewtask = {
//   title: asdfasdf,
//   body: asdfsadf,
//   created: asdfasfsaf,
//   token: mytokenisthis
// }
