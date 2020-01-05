
const username = 'Vaspap';
const title = 'Dublin';
const timestamp = '16 Nov 20:00';
const numOfComments = 4;
const numOfLikes = 80;

// Angular
const App = angular.module("App", []);

App.controller("MainCtrl", function ($scope, $http) {

    $scope.username = username;
    $scope.title = title;
    $scope.timestamp = timestamp;
    $scope.numOfComments = numOfComments;
    $scope.numOfLikes = numOfLikes;

});