(function () {
    angular.module('Authentication', []);

    var app = angular.module('MyApp', ['library-directives',
        'ngRoute', 'rotas', 'LocalStorageModule', 'Authentication', 'ngCookies']);
       
})();