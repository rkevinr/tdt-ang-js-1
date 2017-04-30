'use strict';


/*
function writeSomeFbData(stringOne, stringTwo) {
  var db = firebase.database();
  var usersRef = db.ref('/user_list');
  var newUserRef = usersRef.push();
  var userKey = newUserRef.key;
  firebase.database().ref('/user_list/' + userKey).set({
        username: stringOne,
        nickname: stringTwo
  });
}
*/


function writeSomeFbData(stringOne, stringTwo) {
  var db = firebase.database();
  var activsRef = db.ref('/activities');
  var neRef = usersRef.push();
  var userKey = newUserRef.key;
  firebase.database().ref('/activities/' + userKey).set({
        blah: stringOne,
        dee: stringTwo
  });
}


function readSomeFbData() {
  var db = firebase.database();
  var usersRef = db.ref('user_list');
  
}

angular.module('myApp.viewActivities', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  // $routeProvider.when('/viewActivities', {
  $routeProvider.when('/viewActivities', {
    templateUrl: 'viewActivities/viewActivities.html' /*,
    controller: 'ViewActivitiesCtrl' */
  })
  .when('/viewActivities/from/:fromDate/to/:toDate', {
    templateUrl: 'viewActivities/viewActivities.html' /* ,
    controller: 'ViewActivitiesCtrl' */
  })
}])

.controller('ViewActivitiesCtrl', ['$route', '$routeParams', '$location', '$scope',
  function ViewActivitiesCtrl($route, $routeParams, $location, $scope) {
    
    // console.log("activsCtlr ctor called");

    $scope.route = $route;
    $scope.location = $location;
    $scope.routeParams = $routeParams;
    $scope.activity_str = "";
      
    for (var key in $scope.routeParams) {
      console.log("rte param key/val: " + key + ", " + $scope.routeParams[key]);
    }
    
    $scope.doClick = function() {
      console.log($scope.activity_str);
      
      /*
      var provider = new firebase.auth.GoogleAuthProvider();
      
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token.
        //    You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        console.log("login succeeded; user is: ");
        try {
          // writeSomeFbData("Moe Larry Curley Shemp", "NOT The Pep Boys");
          console.log("empty try block.");
        } catch(error) {
          console.log("ERROR on write:  " + error + "\n===================");
        }
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
      */
      
    }
  }
]);
