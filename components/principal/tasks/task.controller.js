(function(){
  angular
    .module('toDo')
    .controller('taskController', taskController);
    function taskController(taskService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var taskCtrl = this; //binding del controlador con el html, solo en el controlador

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        taskCtrl.tasks = taskService.getTasks();
      }init();
      taskCtrl.save= function(){

        var newTask ={
          taskName : taskCtrl.taskName,
          description : taskCtrl.description,
          taskDate : taskCtrl.taskDate,
          priority : taskCtrl.priority,
          status : taskCtrl.status,
          cost : taskCtrl.cost,
          company : taskCtrl.company
        }

      taskService.setTasks(newTask);
      }
    }
     //se establece un objeto de angular normal

})();
