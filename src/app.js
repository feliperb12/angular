var app= angular.module("App", ["ngRoute"]);

app.config(function($routeProvider){
 $routeProvider
 .when("/",{
  templateUrl:"courses/app.component.html"
 })
 .when("/compras",{
  templateUrl:"courses/app2.component.html"
 })
 .otherwise({redirectTo : '/'});
});
