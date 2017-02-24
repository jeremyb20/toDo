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


    function _setCompany(newCompany){
        company.push(newCompany);
        localStorage.setItem('mCompanyLocal',JSON.stringify(company));
    }

    function _getCompany(){
        var companyLocal = JSON.parse(localStorage.getItem('mCompanyLocal'));
        return company;
    }
  }
})();
