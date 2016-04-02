app.factory("commentFactory", ["$http", "$q", function($http, $q) {
    var urlBase = '/api/comments';
    var commentFactory = {};

    commentFactory.getComments = function() {
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

    commentFactory.getComment = function(id) {
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

    commentFactory.insertComment = function(project) {
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

    commentFactory.updateComment = function(project) {
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

    return commentFactory;
}]);
