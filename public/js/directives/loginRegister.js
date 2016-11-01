/**
 * Created by D.Musev on 31.10.2016 г..
 */
angular.module('loginReg', [])
  .directive('loginReg', ($http, $location) => {
    return {
      restrict: 'AE',
      replace: 'true',
      templateUrl: './../../views/loginFrom.html',
      link: (scope, elem, atts) => {
        // login function
        // TODO: move this function inside angular service/factory
        scope.user = {}
        scope.logUserIn = () => {
            // Posting data to the server side
          $http({
            method: 'GET',
            url: '/api/user/authenticate',
            data: scope.user, // forms user object
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          })
            .success(function (data) {
              if (data.errors) {
                // Showing errors.
                scope.errorName = data.errors.name
                scope.errorUserName = data.errors.username
                scope.errorEmail = data.errors.email
              } else {
                scope.message = data.message
                console.log(data)
                $location.path('/')
              }
            })
        }

        // login ids
        scope.loginId = 'login-form-link'
        scope.loginFormId = 'login-form'
        // register ids
        scope.regId = 'register-form-link'
        scope.regFormId = 'register-form'

        scope.showLogin = (event) => {
          $('#' + scope.loginFormId).delay(100).fadeIn(100)
          $('#' + scope.regFormId).fadeOut(100)
          $('#' + scope.regId).removeClass('active')
          $(event.currentTarget).addClass('active')
          event.preventDefault()
        }
        scope.showReg = (event) => {
          $('#' + scope.regFormId).delay(100).fadeIn(100)
          $('#' + scope.loginFormId).fadeOut(100)
          $('#' + scope.loginId).removeClass('active')
          $(event.currentTarget).addClass('active')
          event.preventDefault()
        }
      }
    }
  })
