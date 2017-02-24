(function(){
  angular
  .module('toDo')
  .service('logInService', logInService);

  function logInService(userService){
    var logIn = [];
    var publicAPI = {
      logInUser : _logInUser

    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

    function _logInUser(user){
      var users = userService.getUsers();
      for (var i = 0; i < users.length; i++) {
        if (users[i].name == user.name && users[i].password == user.password) {
          return true;
        }
        return false;
      }
    }
  }
})();