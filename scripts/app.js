<reference path="angular.min.js" />

var myApp = angular.module("myModule",[]);

var myController = function($scope){
	$scope.message = "AngularJS Tutorial";
};

myApp.controller("myController", myController);

