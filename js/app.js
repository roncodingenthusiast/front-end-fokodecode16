var app = angular.module('FokoDecode', ['ngRoute']);

app.service("projectService", ["$http", "$q", function($http, $q) {
    var urlBase = 'localhost:3000/api/projects';

    this.getProjects = function() {
        var deferred = $q.defer();
        $http.get(urlBase)
            .then(function(result) {
                    deferred.resolve(result.data);
                },
                function() {
                    deferred.reject();
                });
        return deferred.promise;
    };

    this.getProject = function(id) {
        var deferred = $q.defer();
        $http.get(urlBase + '/' + id)
            .then(function(result) {
                    deferred.resolve(result.data);
                },
                function() {
                    deferred.reject();
                });
        return deferred.promise;
    };

    this.insertProject = function(project) {
        var deferred = $q.defer();
        $http.post(project, cust)
            .then(function(result) {
                    deferred.resolve(result.data);
                },
                function() {
                    deferred.reject();
                });
        return deferred.promise;
    };

    this.updateProject = function(project) {
        var deferred = $q.defer();
        $http.put(urlBase + '/' + cust.ID, cust)
            .then(function(result) {
                    deferred.resolve(result.data);
                },
                function() {
                    deferred.reject();
                });
        return deferred.promise;
    };

}]);


app.config(function($routeProvider, $locationProvider) {
    var resolveProjects = {
        projects: function(projectFactory) {
            projectFactory.getProjects()
                .then(function(result) {
                    //success
                    console.log(result);
                    return result;
                }, function() {
                    //error
                    console.log('Error');
                    return 'Error';
                });
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
