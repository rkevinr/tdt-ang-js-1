'use strict';

angular.module('myApp.viewHome', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewHome', {
    templateUrl: 'viewHome/viewHome.html',
    controller: 'ViewHomeCtrl'
  });
}])

.controller('ViewHomeCtrl', [function() {

}]);
