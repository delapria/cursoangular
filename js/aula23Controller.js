var app = angular.module('app', ['ui.unique', 'ui.validate']);

app.controller('Aula23Controller', function($scope){

	// ui.unique
	$scope.usuarios = [
		{nome : "Douglas", email : "teste@teste.com"},
		{nome : "Douglas1", email : "teste1@teste.com"},
		{nome : "Douglas", email : "teste2@teste.com"},
		{nome : "Douglas3", email : "teste3@teste.com"},
		{nome : "Douglas", email : "teste@teste.com"},
		{nome : "Douglas3", email : "teste5@teste.com"}
	];

	$scope.validar = function(valor){
		return valor === $scope.senha1;
	}

});