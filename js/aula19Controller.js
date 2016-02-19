var app = angular.module('app', ['ngCookies']);

app.controller('Aula19Controller', function($scope, $cookieStore){

	//$cookieStore.put("nome", "Devmedia.com")

	//$cookieStore.remove("nome");

	$scope.criarCookie = function(){
		$cookieStore.put("meusDados", {"nome" : "Douglas", "idade" : 31});
	}

	$scope.getValorCookie = function(){
		console.log($cookieStore.get("meusDados"));
	}

	$scope.removeCookie = function(){
		$cookieStore.remove("meusDados");
	}
  
})

app.controller('Aula19_2Controller', function($scope, $cookieStore){

	//$cookieStore.put("nome", "Devmedia.com")

	//$cookieStore.remove("nome");

	$scope.getValorCookieCtrl2 = function(){
		if ($cookieStore.get("meusDados") == undefined) {
			console.log('teste');
		} else {
		  console.log($cookieStore.get("meusDados"));	
		}
		
	}	
  
});