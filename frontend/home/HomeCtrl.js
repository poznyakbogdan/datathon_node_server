app.controller("HomeCtrl", function ($scope, HomeService, Socket) {
  Socket.on('message', function (data) {
    console.log(data);
  })
});