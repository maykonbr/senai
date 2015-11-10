/**
 * Created by Aluno on 03/11/2015.
 */
angular.module('senai',[]);

angular.module('senai').controller('IndexController',IndexController);

function IndexController($scope){
    $scope.nome = 'Daniel';

    $scope.click = function(){
        $scope.nome = 'Senai';
    }
}