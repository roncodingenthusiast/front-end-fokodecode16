app.factory("annotationFactory", ["$http", "$q", function($http, $q) {
    var urlBase = '/api/annotations';
    var annotationFactory = {};

    annotationFactory.getAnnotations = function() {
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

    annotationFactory.getAnnotation = function(id) {
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

    annotationFactory.insertAnnotation = function(project) {
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

    annotationFactory.updateAnnotation = function(project) {
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

    return annotationFactory;
}]);
