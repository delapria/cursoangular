var app = angular.module('app', ['ui.highlight', 'ui.mask', 'ngSanitize']);

app.controller('Aula22Controller', function($scope){
    
  $scope.texto = "Essa é uma testeEssa é uma testeEssa é uma testeEssa é uma testeEssa é uma testeEssa é uma testeEssa é uma testeEssa é uma testeEssa é uma testeEssa é uma testeEssa é uma testeEssa é uma testeEssa é uma teste";

  $scope.maskCpf = '999.999.999-99';
  $scope.maskFone = '(99) 9999-9999';
  $scope.maskProc = '99999999.999.9999';

  //9 numero
  //A letra
  //* qualquer coisa

});