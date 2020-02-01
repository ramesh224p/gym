// this is login controller
app.controller("loginController", [ '$scope', '$http', '$localStorage', '$state', '$window', function($scope, $http, $localStorage, $state, $window){
	$scope.submite= function(){
		$http.get('http://localhost:3003/test?name='+$scope.username+'&password='+$scope.password).then(function(response){
			console.log(response);
			if(response.data.status==true){
                $localStorage.userData = response.data.data;
				console.log($localStorage.userData)
				$state.go('dashboard')				
			};
		});
	};
}]);

