'use strict';

angular.module('construction',['ngMaterial','ngRoute'])
//route tells ng-view what html and controller to use
.config(['$routeProvider',function ($routeProvider) {
	$routeProvider
		.when('/',{
			controller:'home', 
			templateUrl:'Templates/home.html'
		})
		.when('/projects',{
			controller:'projects',
			templateUrl:'Templates/projects.html'
		})
		.when('/aboutus',{
			controller: 'aboutus',
			templateUrl:'Templates/aboutus.html'
		})
		.otherwise({ redirectTo: '/' });
}])
//controller for Home view
.controller('home',['$scope',function($scope){

}])
//controller for projects view
.controller('projects', ['$scope', function($scope){
	
}])
//controller for aboutus view
.controller('aboutus',['$scope',function($scope){

}]);