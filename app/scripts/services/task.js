angular.module('todoApp')
.factory("Task",['$resource', function($resource){
  return $resource("http://yourdomain.com:3000/tasks", {},{
    get:{
      method:"GET",
      params:{},
      isArray: true
    },
    create:{
      method:"POST",
      params:{},
      isArray: false
    },
    update:{
      method:"PUT",
      params:{ id: '@id' },
      isArray: false,
      url: "http://yourdomain.com:3000/tasks/:id"
    }
  })
}]);
