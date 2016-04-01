var app = angular.module('FokoDecode', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    var resolveProjects = {
        projects: function() {
            return 202;
        }	
    };

    $routeProvider
        .when('/', {
            controller: 'mainController',
            templateUrl: 'templates/main.html',
            resolve: resolveProjects
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
