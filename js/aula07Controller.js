app.controller("aula07Controller", function($scope){

	$scope.nomes = ['Douglas', 'Delapria', 'Leticia', 'Antonio', 'Fernando'];

	$scope.pessoas = [];

	$scope.pessoas.push(
		{nome : "Douglas", idade : 30, status : true});

	$scope.pessoas.push(
		{nome : "Douglas1", idade : 31, status : true});

	$scope.pessoas.push(
		{nome : "Douglas2", idade : 31, status : true});

	$scope.pessoas.push(
		{nome : "Douglas3", idade : 31, status : true});

	console.log($scope.pessoas);

	$scope.adicionaPessoa = function(){

		var nome = document.getElementById("nomepessoa");
		var idade = document.getElementById("idadepessoa");

		$scope.pessoas.push(
		{nome : nome.value, idade : idade.value});

		nome.value = "";
		idade.value = "";
	}

});