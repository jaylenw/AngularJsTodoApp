'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:ResetCtrl
 * @description
 * # ResetCtrl
 * Controller of the todoApp
 */

angular.module('todoApp')
  .controller('ResetCtrl', function ($scope, $window, User, ngNotify) {

    //Initializing our user object
    $scope.user = {};

    //send request to start reset password
    $scope.register = function() {
      var payload = $scope.user;
      User.register(payload, function(response) {
        //storing token from server into browser
        localStorage.setItem("token", response.token);
        //redirecting user to home page
        $window.location.href = '/';
      }, function(err) {

          switch(err.status){
            case 406:
              ngNotify.set(' Entered Email Address is not Valid. Please Enter a Valid Email Address.', 'error');
              break;
            case 409:
              ngNotify.set('Entered Email has already been Registered. Please Enter another Email Address.', 'error');
              break;
            case 412:
              ngNotify.set('Entered Email address and Password were not Entered Successfully. Please Enter them Again.', 'error');
              break;
            case 500:
              ngNotify.set('We Could not Save Your Account. Please try Again.', 'error');
              break;
            default:
              ngNotify.set('An Error Occured Processing Your Request to the Server. Please try Again.', 'error');
          }
      });
    };

  });//end of controller
