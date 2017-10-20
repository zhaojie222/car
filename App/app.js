/**
 * Created by lenovo on 2017/10/19.
 */
var app=angular.module('app',["ui.router"]);
app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state("index",{
        url:"/index",
        templateUrl:"./index.html",
        controller:"carController"
    })
    $stateProvider.state("car",{
        url:"/car",
        templateUrl:"./App/View/car.html",
        controller:"carController"
    })

    $urlRouterProvider.otherwise("/index");
})