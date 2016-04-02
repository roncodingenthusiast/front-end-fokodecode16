app.factory("versionFactory", ["$http", "$q", function($http, $q) {
    var urlBase = '/api/versions';
    var versionFactory = {};

    versionFactory.getVersions = function() {
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

    versionFactory.getVersion = function(id) {
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

    versionFactory.insertVersion = function(project) {
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

    versionFactory.updateVersion = function(project) {
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

    return versionFactory;
}]);
