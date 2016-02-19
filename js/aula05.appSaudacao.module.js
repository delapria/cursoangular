var appSaudacao = angular.module('appSAudacao', []);


appSaudacao.filter('ola',function(){
	return function(nome){
		return "Olá - " + nome + ";";
	}
});

