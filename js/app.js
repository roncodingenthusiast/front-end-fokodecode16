var app = angular.module('FokoDecode', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    var resolveProjects = {
        projects: function() {
            return 202;
        }
    };

    var resolveProject = {
        projects: function() {
            return 201;
        }
    };

    $routeProvider
        .when('/', {
            controller: 'loginController',
            templateUrl: 'templates/login.html',
            resolve: resolveProjects
        })
        .when('/project/:id', {
            controller: 'projectController',
            templateUrl: 'templates/project.html',
            resolve: resolveProject
        })
        .when('/projects', {
            controller: 'projectsController',
            templateUrl: 'templates/projects.html',
            resolve: resolveProjects
        })
        .when('/dash', {
            controller: 'dashController',
            templateUrl: 'templates/dashboard.html',
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
