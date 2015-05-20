angular.module('demoApp.students',[])

.controller('StudentsController', ["$scope", function($scope){
    
	$scope.mensaje = "Hola estudiantes!";
	
}]);