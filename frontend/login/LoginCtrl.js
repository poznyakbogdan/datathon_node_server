app.controller("LoginCtrl", function ($scope, LoginService) {
  $scope.title = LoginService.getPrediction(13);
});