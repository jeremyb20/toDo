(function(){
  angular
    .module('toDo')
    .controller('userController', userController);
    function userController(userService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var userCtrl = this; //binding del controlador con el html, solo en el controlador

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        userCtrl.users = userService.getUsers();
      }init();
      userCtrl.save= function(){

        var newUser ={
          name : userCtrl.name,
          birthDate : new Date(userCtrl.birthDate) ,
          age : userCtrl.calculateAge(userCtrl.birthDate),
          email: userCtrl.email,
          password: userCtrl.password

        }


        userService.setUsers(newUser);

      }
      userCtrl.calculateAge = function(birthday) { // pass in player.dateOfBirth
        var ageDifMs = Date.now() - new Date(birthday);
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
      }



    }
     //se establece un objeto de angular normal

})();
