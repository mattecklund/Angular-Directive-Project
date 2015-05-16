var app = angular.module('directivePractice');

app.controller('homeCtrl', function($scope){
	$scope.test = 'this is defined in the Home controller';
	$scope.user = {
		name: "Geoff McMammy",
	 	age: 43,
		email: "geofdude@gmail.com"
	}
	$scope.users = [
		{
		   name: "Geoff McMammy",
		   age: 43,
		   email: "geofdude@gmail.com",
		   city: "Provo"
		},
		{
			name: "Frederick Deeder",
		   age: 26,
		   email: "fredeed@gmail.com",
		   city: "Austin"
		},
		{
		   name: "Spencer Rentz",
		   age: 35,
		   email: "spencerrentz@gmail.com",
		   city: "Sacramento"
		},
		{
		   name: "Geddup Ngo",
		   age: 43,
		   email: "geddupngo@gmail.com",
		   city: "Orlando"
		},
		{
		   name: "Donst Opbie Leevin",
		   age: 67,
		   email: "gernee@gmail.com",
		   city: "Phoenix"
		}
	];
})