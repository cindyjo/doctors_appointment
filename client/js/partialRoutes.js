var app = angular.module('app', ['ngRoute', 'angularMoment']);
app.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
        templateUrl: '/partials/login.html'
    })
    .when('/registration',{
        templateUrl: 'partials/registration.html'
    })
    .when('/newAppoint',{
        templateUrl: 'partials/newAppoint.html'
    })
    .when('/dashboard',{
        templateUrl: 'partials/dashboard.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});