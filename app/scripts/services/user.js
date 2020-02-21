angular.module('todoApp')
.factory("User",['$resource', 'Config', function($resource, Config){
  return $resource(Config.getAPI() + "/users", {},{
    login:{
      method:"POST",
      params:{},
      isArray: false,
      url: Config.getAPI() + "/users/login"
    },
    register:{
      method:"POST",
      params:{},
      isArray: false,
      url: Config.getAPI() + "/users/register"
    },
    logout:{
      method:"POST",
      params:{},
      isArray: false,
      url: Config.getAPI() + "/users/logout"
    },
    forgot:{
      method:"POST",
      params:{},
      isArray: false,
      url: Config.getAPI() + "/users/forgot"
    }
  })
}]);
