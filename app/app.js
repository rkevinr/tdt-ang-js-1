'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.viewHome',
  'myApp.viewToDo',
  'myApp.viewActivities',
  'myApp.viewExpenses',
  'myApp.viewStats',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  myApp.userIsLoggedIn = false;
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/viewHome'});
}]).
run(function($rootScope) {
  $rootScope.doLogin = function() {
      console.log("EMPTY login func called");
  };
});
