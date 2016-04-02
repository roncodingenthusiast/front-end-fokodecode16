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
    	.when('/dsadsads', {
    		controller: 'loginController',
    		templateURL: 'templates/login.html'
    	})
    	.when ('/project/:id', {
    		controller: 'projectController',
    		templateUrl: 'templates/project.html',
    		resolve: resolveProject
    	})
        .when('/', {
            controller: 'projectsController',
            templateUrl: 'templates/projects.html',
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
