app.service('LoginService', function($http) {
  this.saveUser = function(user){
  	return $http.post(app.API_ROOT + "/users/new", {user: user});
  }

  this.getPrediction = function (x) {
    return x*x;
  }
});