angular.module('todoApp')
.factory("Task",['$resource', function($resource){
  return $resource("http://dev.kondeo.com:3020/tasks", {},{
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
      params:{ _id: '_id' },
      isArray: false,
      url: "http://dev.kondeo.com:3020/tasks/:_id"
    }
  })
}]);
