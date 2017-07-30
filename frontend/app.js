"use strict";

var app = angular.module('datathonApp', [
  'ngRoute',
  'ui.bootstrap',
  'mdo-angular-cryptography',
  'btford.socket-io',
  'angular-md5'
]);

app.API_ROOT = "http://localhost:3000"
// app.API_ROOT = "http://4b87350e.ngrok.io"


app.config(function($routeProvider, $cryptoProvider) {
  $cryptoProvider.setCryptographyKey('datathon2017');
  $routeProvider
    .when("/login", {
      templateUrl : "login/login.template.html",
      controller: "LoginCtrl"
    })
    .when("/home", {
      templateUrl : "home/home.template.html",
      controller: "HomeCtrl"
    })
    .otherwise({redirectTo: '/login'});
});