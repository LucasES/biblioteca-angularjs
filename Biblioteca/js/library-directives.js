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

    app.directive('botaoSubmit', function () {
        return {
            restrict: 'E',
            require: '^form',
            scope: {
                submit: '&'
            },
            template: '<button type="submit" class="btn btn-primary">Adicionar Livro</button>',
            link: function ($scope, $element, $attrs, bookForm) {
                $element.on('click', function () {
                    if(bookForm.$valid){
                        $scope.submit();                       
                    } else {
                        alert('Formulário Inválido');
                    }
                });
            }
        }
    });

    app.directive( 'editInPlace', function() {
        return {
            restrict: 'E',
            scope: { value: '=' },
            template: '<span class="todoName" ng-dblclick="edit() ng-bind="value"></span><input class="todoField" ng-model="value"></input>',
            link: function ( $scope, element, attrs ) {
            var inputElement = angular.element( element.children()[1] );
            element.addClass( 'edit-in-place' );

            $scope.edit = function () {
                $scope.editing = true;
                element.addClass( 'active' );
                inputElement.focus();
            };
            inputElement.on("blur",function  () {
                $scope.editing = false;
                element.removeClass( 'active' );
            });

        }
    };
});
})();