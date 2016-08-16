angular.module('todoApp')
.factory("Config",function(){

  var _apiUrl = "http://yourdomain.com";
  var configService = {};

  configService.getAPI = function(){
    return _apiUrl;
  }

  return configService;
});
