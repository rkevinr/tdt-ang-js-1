'use strict';

angular.module('myApp.viewActivities', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewActivities', {
    templateUrl: 'viewActivities/viewActivities.html',
    controller: 'ViewActivitiesCtrl'
  });
}])

.controller('ViewActivitiesCtrl', ['$route', '$routeParams', '$location', '$scope',
  function ViewActivitiesCtrl($route, $routeParams, $location, $scope) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;
    
    $scope.doClick = function() {
      console.log("got click!");
    }
  }
]);
