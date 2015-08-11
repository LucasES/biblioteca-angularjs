(function() {
    var app = angular.module('MyApp', ['library-directives']);

    app.controller("BookStore", function ($scope) {
        $scope.filtro = "";
        $scope.mostrar = false;
        $scope.items = extractJSONFromLocalStorage();

        $scope.editing = false;

        $scope.addItem = function (item) {
            $scope.items.push(item);
            jsonToLocalStorage($scope.items);
            $scope.item = {};
        }

        $scope.totalPrice = function () {
            var total = 0;
            for (count = 0; count < $scope.items.length; count++) {
                total += $scope.items[count].Price * $scope.items[count].Quantity;
            }
            return total;
        }

        $scope.removeItem = function (index) {            
            $scope.items.splice(index, 1);
            localStorage.removeItem(index);

            jsonToLocalStorage($scope.items);
        }
        $scope.editItem = function (index) {
            $scope.editing = $scope.items.indexOf(index);
        }

        $scope.saveField = function (index) {
            if ($scope.editing !== false) {
                $scope.editing = false;
            }
        }

        $scope.cancel = function (index) {
            if ($scope.editing !== false) {
                $scope.editing = false;
            }
        }

        function extractJSONFromLocalStorage() {
            return JSON.parse(localStorage.getItem("todo")) || [
              { ISBN: "5674789", Name: "Asp.Net MVC", Price: 560, Quantity: 20 },
            { ISBN: "4352134", Name: "AngularJS", Price: 450, Quantity: 25 },
            { ISBN: "2460932", Name: "Javascript", Price: 180, Quantity: 15 }
            ];
        }


        function jsonToLocalStorage(items) {
            var jsonTodo = angular.toJson(items);

            if (jsonTodo != 'null') {
                localStorage.setItem("todo", jsonTodo);
            } else {
                alert("Invalid JSON!");
            }
        }

    });



})();