(function(){
  angular
  .module('toDo')
  .service('companyService', companyService);

  function companyService(){
    var company = [];
    var publicAPI = {
      setCompany : _setCompany,
      getCompany : _getCompany
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones


    function _setCompany(pCompany){
      companies.push(pCompany);
    }

    function _getCompany(){
      return companies;
    }
  }
})();
