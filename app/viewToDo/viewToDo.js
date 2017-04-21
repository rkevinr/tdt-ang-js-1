'use strict';

angular.module('myApp.viewToDo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewToDo', {
    templateUrl: 'viewToDo/viewToDo.html',
    controller: 'ViewToDoCtrl'
  });
}])

.controller('ViewToDoCtrl', [function() {

}]);
