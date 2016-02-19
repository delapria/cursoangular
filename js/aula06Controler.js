app.controller('aula06Controler', function($scope){

	$scope.nome = "Curso AngularJS";

	$scope.olaMundo = function(nome){
		alert("Olá " + nome);
	}

	console.log("Executou o controller aula06Controler")

});