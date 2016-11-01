/**
 * Created by D.Musev on 28.10.2016 г..
 */

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'MainController'
  }).when('/users', {
    templateUrl: 'views/user.html',
    controller: 'UserController'
  }).when('/login', {
    templateUrl: 'views/initialScreen.html',
    controller: ''
  }).otherwise({redirectTo: '/'})

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  })
}])
