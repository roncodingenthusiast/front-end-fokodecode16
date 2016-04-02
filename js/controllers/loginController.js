app.controller('loginController', function($scope, $http) {
    $http.get("http://localhost:3000")
        .then(function(result) {
                console.log(result);
            },
            function() {
                console.log("Error");
            });
});
