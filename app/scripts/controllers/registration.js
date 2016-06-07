'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('registrationCtrl', function ($scope, User) {

    $scope.user = {};

    $scope.register = function() {
      User.register($scope.user, function(response) {
        console.log(response)
        localStorage.setItem("token", response.token);
      }, function(err) {
        console.log("oh shit")
      });
      //console.log($scope.user);
    };




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
