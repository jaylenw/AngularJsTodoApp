angular.module('todoApp')
.factory("User",['$resource', function($resource){
  return $resource("http://dev.kondeo.com:3020/users", {},{
    login:{
      method:"POST",
      params:{},
      isArray: false,
      url: "http://dev.kondeo.com:3020/users/login"
    },
    register:{
      method:"POST",
      params:{},
      isArray: false,
      url: "http://dev.kondeo.com:3020/users/register"
    }
  })
}]);
