(function() {
    'use strict';

    angular
        .module('pdfElectronDemo')
        .config(appConfig);

    appConfig.$inject = ['$urlRouterProvider'];

    function appConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise('main');
    }
})();
