angular.module('todoApp')
.factory("User",['$resource', function($resource){
  return $resource("http://todo.jaylenwimbish.com:3000/users", {},{
    login:{
      method:"POST",
      params:{},
      isArray: false,
      url: "http://todo.jaylenwimbish.com:3000/users/login"
    },
    register:{
      method:"POST",
      params:{},
      isArray: false,
      url: "http://todo.jaylenwimbish.com:3000/users/register"
    }
  })
}]);
