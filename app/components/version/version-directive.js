'use strict';

angular.module('myApp.version.version-directive', [])

.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    // console.log("version-directive");
    elm.text(version);
  };
}]);
