app.factory("projectFactory", ["$http", "$q", function($http, $q) {
    var urlBase = 'localhost:3000/api/projects';
    var projectFactory = {};

    $http.defaults.useXDomain = true;

    projectFactory.getProjects = function() {
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

    projectFactory.getProject = function(id) {
        var deferred = $q.defer();
        $http.get(urlBase + '/' + id)
            then(function(result) {
                deferred.resolve(result.data);
            },
            function() {
                deferred.reject();
            });
        return deferred.promise;
    };

    projectFactory.insertProject = function(project) {
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

    projectFactory.updateProject = function(project) {
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

    return projectFactory;
}]);
