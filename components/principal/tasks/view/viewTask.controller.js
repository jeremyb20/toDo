(function(){
  angular
    .module('toDo')
    .controller('viewTaskController', viewTaskController);
    function viewTaskController(viewTaskService,taskService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var viewTaskCtrl = this; //binding del controlador con el html, solo en el controlador

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        viewTaskCtrl.viewTasks = viewTaskService.getViewTasks();
        viewTaskCtrl.tasks = taskService.getTasks();
      }init();
      viewTaskCtrl.save= function(){

        var newViewTask ={
          taskName : viewTaskCtrl.taskName,
          description : viewTaskCtrl.description,
          taskDate : viewTaskCtrl.taskDate,
          priority : viewTaskCtrl.priority,
          status : viewTaskCtrl.status,
          cost : viewTaskCtrl.cost,
          company : viewTaskCtrl.company
        }

      viewTaskService.setViewTasks(newViewTask);
      }
    }
     //se establece un objeto de angular normal

})();