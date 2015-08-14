(function () {
    var app = angular.module('rotas', []);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: 'templates/livraria.html',
                controller: 'BookStore'
            })
            .when("/login", {
                templateUrl: 'templates/login.html',
                controller: 'LoginController'
            })
            .when("/addLivro", {
                templateUrl: 'templates/formulario-livro.html',
                controller: 'BookStore'
            })
            .otherwise({
                redirectTo: "/"
            });            
    });
})();