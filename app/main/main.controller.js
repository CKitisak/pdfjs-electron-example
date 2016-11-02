(function() {
    'use strict';

    angular
        .module('pdfElectronDemo')
        .controller('MainController', MainController);

    MainController.$inject = ['$http'];

    function MainController($http) {
        var vm = this;

        vm.openPdf = openPdf;

        function openPdf() {
            var reqData = {
                method: 'GET',
                headers: {
                    'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsYXN0X2xvZ2luX2F0IjoxNDc4MDU4MTAxLCJ1c2VyX29ubGluZSI6MCwibGFzdF9sb2dvdXRfYXQiOjE0NzgwNjA4MDgsInNlY3VyZUNvZGUiOiJJTVRBU0U2OSIsImlwIjoiOjpmZmZmOjE5Mi4xNjguMC4yMjEiLCJtb2JpbGUiOiIrNjY4OTczODE4NzAiLCJvbmxpbmVfc29ja2V0IjoiIiwibGlnbmVfZGlyZWN0ZSI6IiIsImxhc3RfbmFtZSI6IkNoYWVuZ3NpcmkiLCJjcmVhdGVkX2F0IjoiMTQzMjAwMjY4OSIsInZhbGlkZXVyIjoxLCJoYXNBdmF0YXIiOjEsImJsb2NrX3VzZXIiOjAsImFjdGl2ZV91c2VyIjoxLCJwYXNzd29yZCI6Inh4eHh4IiwidXNlcl9pZCI6Im1kb1VmWDJrU29XSWJXa05zUTI5QmciLCJzZXJ2aWNlIjoiRGV2ZWxvcGVyIiwid2ViX3VzZXIiOjAsImZpcnN0X25hbWUiOiJLaXRpc2FrIiwiZGFzaGJvYXJkIjoiIiwiZW1haWwiOiJraXRpc2FrQGltdC1hc2UuY29tIiwiaWF0IjoxNDc4MDYxMjExfQ.8SHl6g9-VTbCBQ7hcCV6z0Pq8KuChEekl5a6g3bLQI4'
                },
                responseType:'arraybuffer',
                url: 'https://192.168.0.5/webservices/pdf/commandes?order_id=CO712000237&type=commande'
            };

            $http(reqData).then(
                function(response) {
                    var file    = new Blob([response.data], {type: 'application/pdf'});
                    var fileURL = URL.createObjectURL(file);

                    //
                    // `fileURL` can be url or blob
                    //
                    IPC.send('open-pdf-window', encodeURIComponent(fileURL));
                }
            );
        }

        IPC.on('open-pdf-window-callback', function(event, error) {
            if (error) {
                // error handler
            } else {
                // do something more...
            }
        });
    }
})();
