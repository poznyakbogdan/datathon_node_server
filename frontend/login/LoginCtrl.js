app.controller("LoginCtrl", function ($scope, LoginService, $crypto, $location, md5) {

  $scope.signUpUser = function(mobileNumber){
    
    var user = {
      mobileNumber: mobileNumber,
      androidId: getHash(mobileNumber.toString()),
      socketId: angular.fromJson(localStorage.socketId) || ""
    };
    LoginService.saveUser(user).then(function(res){
        console.log(res);
        localStorage.userToken = angular.toJson(user.androidId);
    		$location.path("/home");
    	},
    	function(err){
    		console.error(err);
    	})
  };

  function getHash(value){
  	return md5.createHash(value);
  }

});