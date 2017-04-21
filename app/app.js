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
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/viewHome'});
}]);
