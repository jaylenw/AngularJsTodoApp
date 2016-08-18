'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:AboutCtrl
 * @description
 * # AuthCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('authCtrl', function ($scope, $window, User, ngNotify) {

    //Initializing our user object
    $scope.user = {};

    //Initializing our user token
    $scope.token = localStorage.getItem("token");

    //registering the user
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
              ngNotify.set('Entered Email has already been Registerd. Please Enter another Email Address.', 'error');
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

  //allowing the user to login
  $scope.login = function(){
    var payload = $scope.user;
    User.login(payload, function(response){
      //storing token from server into browser
      localStorage.setItem("token", response.token);
      //redirecting user to home page
      $window.location.href = '/';

    }, function(err){

        switch (err.status) {
          case 401:
            ngNotify.set('Entered Email address or Password are Incorrect. Please try Again.', 'error');
            break;
          case 412:
            ngNotify.set('Please Enter an Email Address and Password and try Again.', 'error');
            break;
          case 500:
            ngNotify.set('Could not Find Your Account. Please Enter Your Credentials Again.', 'error');
            break;
          default:
            ngNotify.set('An Error Occured Processing Your Request to the Server. Please try Again.', 'error');
        }
    });
  };

  //allowing the user to logout
  $scope.logout = function(){
    var payload = {
      "token": $scope.token
    }
    User.logout(payload,
      function(success){
        //Removing Local Token From Browser
        localStorage.removeItem("token");
        //redirecting user to home page
        $window.location.href = '/';
      },
      function(err){
        switch(err.status){
          case 500:
            ngNotify.set('Error occured Logging Out', 'error');
          default:
            ngNotify.set('An Error Occured Processing Your Request. Please try Again.', 'error');
        }
      }
    );
  }
});//end of controller
