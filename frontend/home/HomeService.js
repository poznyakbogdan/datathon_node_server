app.service('HomeService', function($http) {
  this.getPrediction = function (androidId) {
    return $http.post(app.API_ROOT + "/prediction", {androidId: androidId});
  }
});