(function(){
  angular
    .module('toDo')
    .controller('companyController', companyController);
    function companyController(companyService,taskService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var companyCtrl = this; //binding del controlador con el html, solo en el controlador

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        companyCtrl.companies = companyService.getCompany();
        companyCtrl.taskName = taskService.getTasks();
      }init();
      companyCtrl.save = function(){

        var newCompany = {
          companyName : companyCtrl.companyName,
          business : companyCtrl.business,
          location : companyCtrl.location
        }
        companyService.setCompany(newCompany);

      }
    }
     //se establece un objeto de angular normal

})();
