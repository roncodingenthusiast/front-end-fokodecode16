app.controller('loginController', function($scope, $http, $window, $location) {
    $http.get("http://localhost:3000")
        .then(function(result) {
                console.log(result);
            },
            function() {
                console.log("Error");
            });

     $scope.go = function() {
     	console.log('i saw this');
     	console.log($window.location);
     	$window.location.href = '/main';
    	
	}
});
