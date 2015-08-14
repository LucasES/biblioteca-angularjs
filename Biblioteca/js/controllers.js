(function () {

    var app = angular.module('Authentication');


app.controller("BookStore", function ($scope, $location) {
    $scope.filtro = "";
    $scope.mostrar = false;
    $scope.items = extractJSONFromLocalStorage();

    $scope.editing = false;

    //Desta forma não verifica se o formulário está valido, se for usar este método certificar de remover o segundo 
    //parametro trodo botão submit no arquivo formulario-livro.html
    $scope.addItem = function (item) {
        $scope.items.push(item);
        jsonToLocalStorage($scope.items);
        $scope.item = {};
        $scope.bookForm.$setPristine();
        $location.path("/");
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
        //var localData = $scope.items;
        $scope.editing = $scope.items.indexOf(index);
        //for (var i = 0; i < localData.length; i++){
        //console.log(localData[i].ISBN);
        //localData[i].Name = "Teste";
        //}
        //localStorage["todo"] = JSON.stringify(localData);
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

app.controller('LoginController',['$scope', '$rootScope', '$location', 'AuthenticationService',
function ($scope, $rootScope, $location, AuthenticationService) {
    // reset login status
    AuthenticationService.ClearCredentials();

    $scope.login = function () {
        $scope.dataLoading = true;
        AuthenticationService.Login($scope.username, $scope.password, function (response) {
            if (response.success) {
                AuthenticationService.SetCredentials($scope.username, $scope.password);
                $location.path('/');
            } else {
                $scope.error = response.message;
                $scope.dataLoading = false;
            }
        });
    };
}]);

})();