'use strict';

angular.module('myApp.viewExpenses', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewExpenses', {
    templateUrl: 'viewExpenses/viewExpenses.html'
  });
}])

.controller('ViewExpensesCtrl', [function() {
    console.log("viewExpensesCtrl ctor called");
}]);
