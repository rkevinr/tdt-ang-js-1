'use strict';

angular.module('myApp.viewHome', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewHome', {
    templateUrl: 'viewHome/viewHome.html' /*,
    controller: 'ViewHomeCtrl' */
  });
}])

.controller('ViewHomeCtrl', ['$route', '$routeParams', '$location', '$scope',
  function ViewHomeCtrl($route, $routeParams, $location, $scope) {
    $scope.userIsLoggedIn = myApp.userIsLoggedIn;
    console.log("checking isUserLoggedIn var from myApp:  " + myApp.userIsLoggedIn);
}]);
