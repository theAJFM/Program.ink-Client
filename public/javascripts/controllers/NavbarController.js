app.controller('NavbarController', ['$scope', '$location', function($scope, $location)
{
	$scope.currentPath = $location.path();
	$scope.welcomePath = function(){
		return $scope.currentPath === '/welcome';
	};

}]);