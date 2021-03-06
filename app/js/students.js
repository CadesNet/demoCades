angular.module('demoApp.students',[])

.controller('StudentsController', ["$scope", "Student", function($scope, Student){
    angular.extend($scope, Student);
	$scope.mensaje = "Hola estudiantes!";
	$scope.guardar = function(nombre, apellido, email){	
		console.log("nombre: " + nombre + " apellido: " + apellido + " email: "  +email);
		Student.guardarDatos(nombre, apellido, email);
	};
}]).
factory('Student', function($http){
	
	var guardarDatos = function(nombre, apellido, email){
		var Person = {
			nombre: nombre,
			apellido: apellido,
			email: email
		};
		console.log('la persona nueva es: ' , Person);
		$http.post('/user/new', Person).
			success(function(data, status, headers, config) {
		    	console.log(data);
		  	}).
		  	error(function(data, status, headers, config) {
		    	console.log('error: ', data);
		  	});
	}

	return {
		  	guardarDatos : guardarDatos
		  }

});