(function() {
    'use strict';

    angular
        .module('pdfElectronDemo')
        .config(mainConfig);

    mainConfig.$inject = ['$stateProvider'];

    function mainConfig($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
        ;
    }
})();
