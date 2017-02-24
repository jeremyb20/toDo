(function(){
  angular
    .module('toDo')
    .config(configuration);
    function configuration($stateProvider, $urlRouterProvider){ //stateProvider
      $stateProvider
        .state('company',{
          url: '/company',
          templateUrl: 'components/principal/companies/company.view.html',
          controller: 'companyController',
          controllerAs: 'companyCtrl'
        })
        .state('task',{
          url: '/task',
          templateUrl: 'components/principal/tasks/task.view.html',
          controller: 'taskController',
          controllerAs: 'taskCtrl'
        })
        .state('user',{
          url: '/user',
          templateUrl: 'components/principal/users/user.view.html',
          controller: 'userController',
          controllerAs: 'userCtrl'
        })
        .state('logIn',{
          url: '/logIn',
          templateUrl: 'components/principal/logIn/logIn.view.html',
          controller: 'logInController',
          controllerAs: 'logInCtrl'
        })
        .state('viewTask',{
          url: '/task.viewTask',
          templateUrl: 'components/principal/tasks/view/viewTask.view.html',
          controller: 'viewTaskController',
          controllerAs: 'viewTaskCtrl'
        })

        $urlRouterProvider.otherwise('/logIn');
    }
})();
