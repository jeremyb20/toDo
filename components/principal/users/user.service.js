(function(){
  angular
  .module('toDo')
  .service('userService', userService);

  function userService(){
    var users = [];
    var publicAPI = {
      setUsers : _setUsers,
      getUsers : _getUsers
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones


    function _setUsers(pUser){
      users.push(pUser);
    }

    function _getUsers(){
      return users;
    }



  }

})();
