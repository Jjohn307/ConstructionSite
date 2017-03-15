'use strict';

angular.module('construction',['ngMaterial','ngRoute','jkAngularCarousel'])
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
	$scope.data = [ {src:"images/IMG_20170306_092627385.jpg"},
					{src:"images/IMG_20170306_092632168.jpg"}

	]
	$scope.windowWidth  = $(window).width();

}])
//controller for projects view
.controller('projects', ['$scope', function($scope){
	
}])
//controller for aboutus view
.controller('aboutus',['$scope',function($scope){

}]);



var header = $('header');
var theWindow = $(window);

$(document).scroll(function() {
	if(theWindow.scrollTop() >= 20) {
		if (!header.hasClass('fixed')) {
			header.addClass('fixed');
		}
	} else {
		if (header.hasClass('fixed')) {
			header.removeClass('fixed');
		}
	}
});