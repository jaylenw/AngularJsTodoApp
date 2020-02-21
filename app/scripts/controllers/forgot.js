'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:ForgotCtrl
 * @description
 * # ForgotCtrl
 * Controller of the todoApp
 */

angular.module('todoApp')
  .controller('ForgotCtrl', function ($scope, $window, User, ngNotify) {

    //Initializing our user object
    $scope.user = {};

    //Getting user token and adding it to scope
    $scope.token = localStorage.getItem("token");

    //send request to start reset password
    $scope.forgotReq = function() {
      var payload = $scope.user;
      User.forgot(payload, function(response) {
        $scope.user.email = ""; // clear out email address
        ngNotify.set('Please check your inbox for an email to reset your password.', 'success');
      }, function(err) {
          switch(err.status){
            case 406:
              ngNotify.set(' Entered Email Address is not Valid. Please Enter a Valid Email Address.', 'error');
              break;
            case 412:
              ngNotify.set('Entered Email address was not Entered Successfully. Please Enter it Again.', 'error');
              break;
            default:
              ngNotify.set('An Error Occured Processing Your Request to the Server. Please try Again.', 'error');
          }
      });
    };

  });//end of controller
