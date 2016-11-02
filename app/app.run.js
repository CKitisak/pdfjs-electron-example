(function() {
    'use strict';

    angular
        .module('pdfElectronDemo')
        .run(appRun);

    appRun.$inject = ['$rootScope', '$state'];

    function appRun($rootScope, $state) {
        $rootScope.state = $state;
    }
})();
