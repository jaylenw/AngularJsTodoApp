'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('authCtrl', function ($scope, User, ngNotify) {

    $scope.user = {};

    $scope.register = function() {
      User.register($scope.user, function(response) {
        ngNotify.set('You are now Registered.', 'success');
        console.log(response)
        localStorage.setItem("token", response.token);
      }, function(err) {

        switch(err.status){
          case 406:
            ngNotify.set('Email address is not valid. Please enter a valid Email address.', 'error');
            break;
          case 409:
            ngNotify.set('Email has already been registerd. Please enter another Email address.', 'error');
            break;
          case 412:
            ngNotify.set('Email address and Password were not entered successfully. Please enter them again.', 'error');
            break;
          case 500:
            ngNotify.set('We could not save your account. Please try again.', 'error');
            break;
          default:
            ngNotify.set('An error occured processing your request to the server. Please try again.', 'error');
        }
        console.log(err);
      });

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
