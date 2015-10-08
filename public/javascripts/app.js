var app = angular.module('ProgramInk', ['ngRoute', 'ngAnimate']);

    app.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/welcome', {
                templateUrl: '/javascripts/directives/welcome.html',
                controller: 'HomeController',
                title: 'Welcome'
            })
            .when('/home', {
                templateUrl: '/javascripts/directives/home.html',
                controller: 'HomeController',
                title: 'ProgramInk'
            })
            .when('/category', {
                templateUrl: '/javascripts/directives/category.html',
                controller: 'CategoryController',
                title: 'Category'
            })
            .otherwise({
                redirectTo: '/welcome'
            });
    }]);

