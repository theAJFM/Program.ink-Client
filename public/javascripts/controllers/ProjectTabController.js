app.controller('ProjectTabController', ['$scope', function($scope)
{
	$scope.header = 'Countless Project Ready to use';
	$scope.list =
	[
		{
			img: 'images/css1.png',
			h2: 'Web Design'
		},
		{
			img: 'images/html5.png',
			h2: 'iOS Apps'
		},
		{
			img: 'images/screen2.png',
			h2: 'Android Apps'
		},
		{
			img: 'images/scala.jpg',
			h2: 'Software Projects'
		},
		{
			img: 'images/php.jpg',
			h2: 'Web UI'
		},
		{
			img: 'images/css3.jpg',
			h2: 'Animation'
		}
	];
}]);