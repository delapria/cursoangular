var app = angular.module('app', ['ui.bootstrap']);

app.controller('Aula26Controller', function($scope){

    $scope.accor = { heading:"", content:"" };

    $scope.addAccordion = function(){
        $scope.grupos.push($scope.accor);
        $scope.accor = { heading:"", content:"" };
    }

    $scope.addAlert = function(){
       if (confirm('Tem certeza que deseja excluir?') ){
            console.log('OK');
       }else{
            console.log('Cancelou');
       }
    }

	 $scope.grupos = [
    {heading: "Conteudo dinãmico",content:"Conteudo do grupo dinamico"},
    {heading: "Conteudo dinãmico",content:"Conteudo do grupo dinamico"},
    {heading: "Conteudo dinãmico",content:"Conteudo do grupo dinamico"},
    {heading: "Conteudo dinãmico",content:"Conteudo do grupo dinamico"},
    {heading: "Conteudo dinãmico",content:"Conteudo do grupo dinamico"},
    {heading: "Conteudo dinãmico",content:"Conteudo do grupo dinamico"}


   ];

});