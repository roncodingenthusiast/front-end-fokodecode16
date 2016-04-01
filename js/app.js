var app = angular.module('FokoDecode', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    var resolveProjects = {
        projects: function(Projects) {
            return Projects.fetch();
        }
    };

    $routeProvider
        .when('/', {
            controller: 'mainController',
            templateUrl: 'templates/main.html',
            resolve: 'mainResolve'
        })
        .otherwise({
            redirectTo: '/'
        });

    // use the HTML5 History API
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
})
