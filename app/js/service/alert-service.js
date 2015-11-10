angular.module('senai')
    .service('AlertService',AlertService);

AlertService.$inject = ['$growl'];

function AlertService($growl){
    this.showOk = showOk;
    this.showError = showError;
    this.showAlert = showAlert;
    this.showInfo = showInfo;

    function showOk(titulo, mensagem){
        $growl.box(titulo,mensagem, {
            class: 'sucess',
            timeout: 3000
        }).open();
    }

    function showError(titulo, mensagem){
        $growl.box(titulo,mensagem, {
            class: 'danger',
            timeout: 3000
        }).open();
    }

    function showAlert(titulo, mensagem){
        $growl.box(titulo,mensagem, {
            class: 'warning',
            timeout: 3000
        }).open();
    }

    function showInfo(titulo, mensagem){
        $growl.box(titulo,mensagem, {
            class: 'private',
            timeout: 3000
        }).open();
    }
}