app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.when('', '/login');
	$stateProvider
	.state('login',{
		url:'/login',
		templateUrl:'./view/login.html',
		controller:'loginController'
	})
	.state('dashboard',{
		url:'/dashboard',
		templateUrl:'./view/dashboard.html'
	})
	.state('admindashboard',{
		url:'/admindashboard',
		templateUrl:'./view/admindashboard.html',
		controller:'admindashboardcontroller'
	});
});