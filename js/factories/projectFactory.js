app.factory("projectFactory", ["$http", "$q", function($http, $q) {
    var urlBase = '/api/projects';
    var projectFactory = {};

    projectFactory.getCustomers = function() {
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

    projectFactory.getCustomer = function(id) {
        var deferred = $q.defer();
        $http.get(urlBase + '/' + id);

        .then(function(result) {
                deferred.resolve(result.data);
            },
            function() {
                deferred.reject();
            });
        return deferred.promise;
    };

    projectFactory.insertCustomer = function(project) {
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

    projectFactory.updateCustomer = function(project) {
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

    return dataFactory;
}]);
