(function() {
    var app = angular.module('MyApp', ['library-directives']);

    app.controller("BookStore", function ($scope) {
        $scope.filtro = "";
        $scope.mostrar = false;        
        $scope.livros = [
            { ISBN: "5674789", Name: "Asp.Net MVC", Price: 560, Quantity: 20 },
            { ISBN: "4352134", Name: "AngularJS", Price: 450, Quantity: 25 },
            { ISBN: "2460932", Name: "Javascript", Price: 180, Quantity: 15 }
        ];
        $scope.editing = false;
        $scope.addItem = function (item) {
            $scope.livros.push(item);
            $scope.item = {};
        }

        $scope.totalPrice = function () {
            var total = 0;
            for (count = 0; count < $scope.livros.length; count++) {
                total += $scope.livros[count].Price * $scope.livros[count].Quantity;
            }
            return total;
        }

        $scope.removeItem = function (index) {
            $scope.livros.splice(index, 1);
        }
        $scope.editItem = function (index) {
            $scope.editing = $scope.livros.indexOf(index);

        }
        $scope.saveField = function (index) {
            if ($scope.editing !== false) {
                $scope.editing = false;
            }
        };

        $scope.cancel = function (index) {
            if ($scope.editing !== false) {
                $scope.editing = false;
            }
        };
    });
})();