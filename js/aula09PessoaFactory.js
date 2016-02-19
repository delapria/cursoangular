app.factory('Pessoa', function(){

	console.log("Criou o objeto");

	var Pessoa = function(){

		console.log("Instanciou o objeto");

		this.nome = "Douglas";
		this.idade = "30";

		this.cumprimentar = function(){
			return "Olá " + this.nome;
		}
	}

	return Pessoa;
});