angular.module('todoApp')
.factory("User",['$resource', function($resource){
  return $resource("http://yourdomain.com:3000/users", {},{
    login:{
      method:"POST",
      params:{},
      isArray: false,
      url: "http://yourdomain.com:3000/users/login"
    },
    register:{
      method:"POST",
      params:{},
      isArray: false,
      url: "http://yourdomain.com:3000/users/register"
    }
  })
}]);
