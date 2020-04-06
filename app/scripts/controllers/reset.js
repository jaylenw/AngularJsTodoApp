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
    $scope.changePasswd = function() {
      var payload = {
        email: $scope.user.email,
        reset_token: $scope.user.reset_token,
        password: $scope.user.password
      }
      User.reset(payload, function(response) {
        $scope.user.email = "";
        $scope.user.reset_token = "";
        $scope.user.password = "";

        function ngNotifyCallBack() {
          // redirect the user to the authentication page
          $window.location.href = '#/auth';
        }
        ngNotify.set('Your password has been successfully changed.', 'success', ngNotifyCallBack);
      }, function(err) {

          switch(err.status){
            case 406:
              ngNotify.set('Entered Email Address is not Valid. Please Enter a Valid Email Address.', 'error');
              break;
            case 500:
              ngNotify.set('We Could not Update Your Account. Please try Again.', 'error');
              break;
            default:
              ngNotify.set('An Error Occured Processing Your Request to the Server. Please try Again.', 'error');
          }
      });
    };

  });//end of controller
