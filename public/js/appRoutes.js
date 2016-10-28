/**
 * Created by D.Musev on 28.10.2016 г..
 */

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: ''
  }).when('/users', {
    templateUrl: 'views/user.html',
    controller: 'UserController'
  }).otherwise({redirectTo: '/home'})

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  })
}])
