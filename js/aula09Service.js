app.service('operacoes', function(){
    
    console.log("Criou o service operaçoes");
    this.somar = function(valor1, valor2){
        return valor1 + valor2;
    };

    this.subtrair = function(valor1, valor2){
        return valor1 - valor2;

    }
});
