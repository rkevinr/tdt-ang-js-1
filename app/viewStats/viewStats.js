'use strict';

angular.module('myApp.viewStats', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewStats', {
    templateUrl: 'viewStats/viewStats.html',
    controller: 'ViewStatsCtrl'
  });
}])

.controller('ViewStatsCtrl', [function() {

}]);
