'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('archiveCtrl', function ($scope) {

    $scope.archiveList = [
      {
        title: "Note Bob",
        text: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ",
        taskCompleted: true,
        date: "Today at 7:48"
      }
    ];

  });//end of controller
