var app = angular.module("app",['ngRoute']);

app.config(function($routeProvider,$locationProvider){
	//$locationProvider.html5Mode(true);
	$routeProvider
	.when('/gallery', {
		templateUrl:'gallery.html',
		controller:'GalleryController'
		}
	)
	.when('/social', {
		templateUrl:'social.html',
		controller:'SocialController'
		}
	)
	.when('/', {
		templateUrl:'home.html',
		controller:'IndexController'
		}
	)	
	.otherwise(
		{redirecTo:'/'}
	);
	
});

app.controller('GalleryController',function($scope,$location,$params){
	$scope.message="Hello this is gallery";
});

app.controller('SocialController',function($scope,$location,$params){
	$scope.message="Hello this is social";
});

app.controller('IndexController',function($scope,$location,$params){
	$scope.message="Hello this is home page";
});
app.controller('MenuController',function($scope){
	
	$scope.menuItems=[
		'Home','Gallery','Social'
	];
});
