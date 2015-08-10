(function () {
    var app = angular.module('library-directives', []);

    app.directive('formularioLivro', function () {
        return {
            restrict: 'A',
            templateUrl: 'templates/formulario-livro.html'
        }
    })
    app.directive('dadosLivros', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/dados-livros.html'
        }
    })
    app.directive('filtrarLivro', function () {
        return {
            restrict: 'AE',
            templateUrl: 'templates/filtrar-livro.html'
        }
    });

    app.directive('gerarJson', function () {
        return {
            restrict: 'AE',
            templateUrl: 'templates/gerar-json.html'
        }
    });

})();