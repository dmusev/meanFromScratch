/**
 * Created by D.Musev on 28.10.2016 г..
 */

angular.module('UserService', []).factory('User', ['$http', ($http) => {

  let getUSers = () => {
    return $http.get('/api/userss')
  }
  let createUser = (userData) => {
    return $http.post('/api/users', userData)
  }
  let deleteUser = (id) => {
    return $http.delete('/api/users/' + id)
  }

  return {
    getUsers : getUSers,
    createUser : createUser,
    deleteUser : deleteUser
  }
}])
