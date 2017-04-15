'use strict';

angular.module('myApp.activities', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/activities', {
    templateUrl: 'activities/activities.html',
    controller: 'ActivitiesCtrl'
  });
}])

.controller('ActivitiesCtrl', [function() {

}]);