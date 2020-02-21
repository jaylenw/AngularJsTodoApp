angular.module('todoApp')
.factory("Config",function(){

  // var _apiUrl = "http://yourdomain.com:3000";
  var _apiUrl = "https://api.nota-dev.jaylenwimbish.com";
  var configService = {};

  configService.getAPI = function(){
    return _apiUrl;
  }

  return configService;
});
