(function(){
  angular
    .module('toDo')
    .controller('logInController', logInController);
    function logInController(logInService,$state){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var logInCtrl = this; //binding del controlador con el html, solo en el controlador

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute

      }init();
      logInCtrl.logIn = function(){

        var newLog = {
          name : logInCtrl.name,
          password : logInCtrl.password
        }
        var isLogged = logInService.logInUser(newLog);
        if (isLogged) {
          $state.go('task');
        }
      }
    }
     //se establece un objeto de angular normal

})();