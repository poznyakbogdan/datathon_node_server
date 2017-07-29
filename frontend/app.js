"use strict";

var app = angular.module('datathonApp', [
  'ngRoute',
]);

app.config(function($routeProvider) {
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