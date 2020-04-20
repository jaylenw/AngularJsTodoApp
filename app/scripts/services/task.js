'use strict';

angular.module('todoApp')
.factory("Task",['$resource', 'Config', function($resource, Config){
  return $resource(Config.getAPI() + "/tasks", {},{
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
      url: Config.getAPI() + "/tasks/:id"
    },
    delete:{
      method: "DELETE",
      params:{ id: '@id'},
      isArray: false,
      url: Config.getAPI() + "/tasks/:id"
    }
  });
}]);
