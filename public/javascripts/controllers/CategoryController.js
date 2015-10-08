app.controller('CategoryController', ['$scope', function($scope)
{
	$scope.pageClass = 'category-page';
	$scope.list =
	[
		{
			link: '#',
			icon: 'devicon-html5-plain colored',
			overlay: 'HTML'
		},
		{
			link: '#',
			icon: 'devicon-css3-plain colored',
			overlay: 'CSS'
		},
		{
			link: '#',
			icon: 'devicon-ruby-plain colored',
			overlay: 'RUBY'
		},
		{
			link: '#',
			icon: 'devicon-javascript-plain colored',
			overlay: 'JAVASCRIPT'
		},
		{
			link: '#',
			icon: 'devicon-python-plain colored',
			overlay: 'PYTHON'
		},
		{
			link: '#',
			icon: 'devicon-php-plain colored',
			overlay: 'PHP'
		},
		{
			link: '#',
			icon: 'devicon-java-plain colored',
			overlay: 'JAVA'
		},
		{
			link: '#',
			icon: 'devicon-angularjs-plain colored',
			overlay: 'ANGULAR'
		},
		{
			link: '#',
			icon: 'devicon-nodejs-plain colored',
			overlay: 'NODE JS'
		},

	];
}]);