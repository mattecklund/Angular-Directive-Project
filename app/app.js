var app = angular.module('directivePractice', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/home', {
			templateUrl: 'app/home.html',
			controller: 'homeCtrl'
		})
		.otherwise({
			redirectTo: '/home'
		})

});

app.directive('dirDisplay', function(){
	return {
		templateUrl: 'app/dirDisplay.html',
		link: function(scope, element, attributes){
			console.log(scope);
			// console.log(element);
			// console.log(attributes);
			element.on('click', function(){
				scope.displayAge = !scope.displayAge;
				scope.displayEmail = !scope.displayEmail;
				// console.log(scope.displayAge)
				scope.$apply();
			})
		}
	}
});

app.directive('dirWeather', function(){
	return {
		templateUrl: 'app/dirWeather.html'

	}
})
