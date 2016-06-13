'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('authCtrl', function ($scope, $window, User, ngNotify) {

    //Initializing our user object
    $scope.user = {};

    //Initializing our user token
    $scope.currentSavedToken = localStorage.getItem("token");

    //registering the user
    $scope.register = function() {
      User.register($scope.user, function(response) {
        ngNotify.set('You are now Registered. Redirecting...', 'success');
        //storing token from server into browser
        localStorage.setItem("token", response.token);
        //redirecting user to home page
        $window.location.href = '/';
      }, function(err) {

          switch(err.status){
            case 406:
              ngNotify.set(' Entered Email address is not valid. Please enter a valid Email address.', 'error');
              break;
            case 409:
              ngNotify.set('Entered Email has already been registerd. Please enter another Email address.', 'error');
              break;
            case 412:
              ngNotify.set('Entered Email address and Password were not entered successfully. Please enter them again.', 'error');
              break;
            case 500:
              ngNotify.set('We could not save your account. Please try again.', 'error');
              break;
            default:
              ngNotify.set('An error occured processing your request to the server. Please try again.', 'error');
          }
      });
    };

  //allowing the user to login
  $scope.login = function(){
    User.login($scope.user, function(response){
      //storing token from server into browser
      localStorage.setItem("token", response.token);
      //redirecting user to home page
      $window.location.href = '/';

    }, function(err){

        switch (err.status) {
          case 401:
            ngNotify.set('Entered Email address or Password are incorrect. Please try again.', 'error');
            break;
          case 412:
            ngNotify.set('Please enter an email address and password and try again.', 'error');
            break;
          case 500:
            ngNotify.set('Could not find your account. Please enter your credentials again.', 'error');
            break;
          default:
            ngNotify.set('An error occured processing your request to the server. Please try again.', 'error');
        }
    });
  };
  });//end of controller
