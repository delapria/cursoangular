function Aula10Controller($scope, $filter){

	console.log("Iniciou o controller");

	//console.log(retornaoiFilter('DouglasD'));

	console.log($filter('retornaoi')('DouglasDD'));

	$scope.pessoa = {
		nome : "Douglas",
		idade : 30
	}
}

app.controller('Aula10Controller', Aula10Controller);