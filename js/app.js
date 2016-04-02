var app = angular.module('FokoDecode', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    var resolveProjects = {
        projects: function(projectFactory) {
            return projectFactory.getProjects();
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
            templateUrl: 'templates/login.html'
        })
        .when('/project/:id', {
            controller: 'projectController',
            templateUrl: 'templates/project.html'
        })
        .when('/projects', {
            controller: 'projectsController',
            templateUrl: 'templates/projects.html',
            resolve: resolveProjects
        })
        .when('/createProject', {
            controller: 'createProjectController',
            templateUrl: 'templates/createProject.html'
        }).when('/main', {
            controller: 'loginController',
            templateUrl: 'templates/main.html'
        })
        /*.otherwise({
            redirectTo: '/'
        });*/

    // use the HTML5 History API
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});
