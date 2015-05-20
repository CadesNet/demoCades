var demoApp =  angular.module('demoApp',['ui.router', 'demoApp.home','demoApp.students'])


.config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise("/home");

	$stateProvider
	    .state('home', {
	      url: "/home",
	      templateUrl: "views/home.html",
	      controller: 'HomeController'
	    })
	    .state('students', {
	      url: "/students",
	      templateUrl: "views/students.html",
	      controller: 'StudentsController'
	    })


});