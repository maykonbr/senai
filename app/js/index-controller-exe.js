angular.module('senaix',['ui.growl','ui.grid']);

angular.module('senax')
    .controller('IndexController', IndexController);

IndexController.$inject = ['$scope', 'AlertService'];

function IndexController($scope, AlertService){
    $scope.listaDeCarros = [];
    $scope.entidade = {};

    $scope.salvar = salvar;
    $scope.limpar = limpar;

    $scope.gridItemClick = gridItemClick;
    $scope.getRowStyle = getRowStyle;

    $scope.gridOptions = {
        data: 'listaDeCarros',
        columnDefs: [
            {name: 'carro', field: 'carro', width: 150, cellTemplate: 'app/templates/cell-templates.html'},
            {name: 'cor', field: 'cor', minwidth: 250, cellTemplate: 'app/templates/cell-templates.html'},
            {name: '', field: 'editar', width: 50, cellTemplate: 'app/templates/cell-templates-btn-excluir.html'},
            {name: '', field: 'excluir', width: 50, cellTemplate: 'app/templates/cell-templates-btn-excluir.html'}
        ],
        enableRowSelection: true,
        enableColumnMenus: false,
        rowTemplate: 'app/templates/cell-templates.html'
    };

    function gridItemClick(row, col, index){
        var teste = row
    }

    function getRowStyle(registro){
        var rowStyle = {};
        if (registro.cor){
            rowStyle.backgroundColor = registro.cor;
        }
    }

    function salvar(){
        $scope.listaDeCarros.push($scope.entidade);
        limpar();
        AlertService.showInfo('Ok', 'Registro salvo com sucesso')
    }

    function limpar(){
        $scope.entidade = {};
    }
}