'use strict';

materialApp.controller('ClientDetailsCtrl',
    function ClientDetailsCtrl($scope) {

        $scope.client = {
            firstName: "Ignacio",
            lastName: "Antonelli",
            cuil: "20-33333333-3",
            documentType: 1,
            documentNumber: "33333333",
            address: {
                street: "San Luis",
                number: "145",
                floor: "18",
                apt: "C"
            }
        }
    }
);
