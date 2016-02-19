app.controller('aula09Ctrl1Controler', ['$scope', 'operacoes', 'Pessoa', function($scope, operacoes, Pessoa){
 
		$scope.pessoa = new Pessoa();

		console.log("Entrou no controller 1");

		console.log(operacoes.somar(10,10));


}]);

app.controller("aula09Ctrl2Controler", ['$scope', 'operacoes','Pessoa', function($scope, operacoes, Pessoa){

		$scope.outraPessoa = new Pessoa();

		//$scope.outraPessoa.nome = "Delapria";
 		
 		console.log("Entrou no controller 2");

 		console.log(operacoes.subtrair(15,10));

}]);