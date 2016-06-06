angular.module('todoApp')
.factory("Task",['$resource', function($resource){
  return $resource("http://192.168.1.140:3000/tasks", {},{
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
      url: "http://192.168.1.140:3000/tasks/:_id"
    }
  })
}]);
