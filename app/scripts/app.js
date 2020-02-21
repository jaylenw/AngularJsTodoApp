'use strict';

/**
 * @ngdoc overview
 * @name todoApp
 * @description
 * # todoApp
 *
 * Main module of the application.
 */
angular
  .module('todoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngNotify',
    'ng-showdown',
    'angular-loading-bar'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/auth', {
        templateUrl: 'views/auth.html',
        controller: 'authCtrl',
        controllerAs: 'auth'
      })
      .when('/forgot', {
        templateUrl: 'views/forgot.html',
        controller: 'ForgotCtrl',
        controllerAs: 'forgot'
      })
      .when('/reset', {
        templateUrl: 'views/reset.html',
        controller: 'ResetCtrl',
        controllerAs: 'reset'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
